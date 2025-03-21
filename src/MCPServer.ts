import { WebSocket, WebSocketServer } from 'ws';
import { MCPMessage, MCPResponse, MessageHandler, MCPClientInfo } from './types';
import { randomUUID } from 'crypto';

export class MCPServer {
  private wss: WebSocketServer;
  private clients: Map<string, MCPClientInfo> = new Map();
  private handlers: Map<string, MessageHandler> = new Map();
  private pingInterval: NodeJS.Timeout | null = null;

  constructor(port: number) {
    this.wss = new WebSocketServer({ port });
    this.setupWebSocketServer();
    this.startPingInterval();
  }

  private setupWebSocketServer() {
    this.wss.on('connection', (socket: WebSocket) => {
      const clientId = randomUUID();
      this.clients.set(clientId, { id: clientId, socket });

      console.log(`Client connected: ${clientId}`);

      socket.on('message', async (data: Buffer) => {
        try {
          const message: MCPMessage = JSON.parse(data.toString());
          await this.handleMessage(message, clientId);
        } catch (error) {
          this.sendError(clientId, 'Invalid message format');
        }
      });

      socket.on('close', () => {
        console.log(`Client disconnected: ${clientId}`);
        this.clients.delete(clientId);
      });

      socket.on('error', (error) => {
        console.error(`Client error (${clientId}):`, error);
        this.clients.delete(clientId);
      });
    });
  }

  private startPingInterval() {
    this.pingInterval = setInterval(() => {
      this.clients.forEach((client, clientId) => {
        if (client.socket.readyState === WebSocket.OPEN) {
          client.socket.ping();
          client.lastPing = Date.now();
        } else {
          this.clients.delete(clientId);
        }
      });
    }, 30000); // Ping every 30 seconds
  }

  public registerHandler(type: string, handler: MessageHandler) {
    this.handlers.set(type, handler);
  }

  private async handleMessage(message: MCPMessage, clientId: string) {
    const handler = this.handlers.get(message.type);
    if (!handler) {
      this.sendError(clientId, `No handler registered for message type: ${message.type}`, message.id);
      return;
    }

    try {
      const response = await handler(message, clientId);
      this.sendResponse(clientId, response, message.id);
    } catch (error) {
      this.sendError(clientId, `Error processing message: ${error}`, message.id);
    }
  }

  private sendResponse(clientId: string, response: MCPResponse, requestId?: string) {
    const client = this.clients.get(clientId);
    if (client && client.socket.readyState === WebSocket.OPEN) {
      client.socket.send(JSON.stringify({
        ...response,
        requestId
      }));
    }
  }

  private sendError(clientId: string, error: string, requestId?: string) {
    this.sendResponse(clientId, {
      success: false,
      error,
      requestId
    });
  }

  public broadcast(message: MCPMessage) {
    this.clients.forEach((client) => {
      if (client.socket.readyState === WebSocket.OPEN) {
        client.socket.send(JSON.stringify(message));
      }
    });
  }

  public stop() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
    this.wss.close();
  }
} 