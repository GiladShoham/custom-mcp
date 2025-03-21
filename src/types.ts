import { WebSocket } from 'ws';

export interface MCPMessage {
  type: string;
  payload: any;
  id?: string;
  timestamp?: number;
}

export interface MCPResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
  requestId?: string;
}

export type MessageHandler = (message: MCPMessage, clientId: string) => Promise<MCPResponse>;

export interface MCPClientInfo {
  id: string;
  socket: WebSocket;
  lastPing?: number;
} 