# TypeScript MCP Server Example

This is a simple implementation of a Message Control Protocol (MCP) server using TypeScript and WebSocket. The server provides a framework for handling bidirectional communication between clients and the server using a message-based protocol.

## Features

- WebSocket-based communication
- Type-safe message handling
- Support for request-response pattern
- Broadcast capability
- Automatic client ping/pong for connection health monitoring
- Built-in error handling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

## Usage

### Starting the Server

```bash
npm start
```

Or for development with hot reload:
```bash
npm run dev
```

### Example Message Types

The server comes with two example message handlers:

1. Echo Handler:
```typescript
// Client sends:
{
  "type": "echo",
  "payload": "Hello, World!",
  "id": "123"
}

// Server responds:
{
  "success": true,
  "data": "Hello, World!",
  "message": "Echo response",
  "requestId": "123"
}
```

2. Math Handler:
```typescript
// Client sends:
{
  "type": "math",
  "payload": {
    "operation": "add",
    "numbers": [1, 2, 3, 4, 5]
  },
  "id": "456"
}

// Server responds:
{
  "success": true,
  "data": {
    "result": 15
  },
  "message": "add operation completed",
  "requestId": "456"
}
```

### Implementing Custom Handlers

You can add your own message handlers by using the `registerHandler` method:

```typescript
server.registerHandler('customType', async (message, clientId) => {
  // Handle the message
  return {
    success: true,
    data: { /* your response data */ },
    message: 'Operation completed'
  };
});
```

## WebSocket Client Example

Here's an example of how to connect to the server using a WebSocket client:

```javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to server');
  
  // Send a math operation
  ws.send(JSON.stringify({
    type: 'math',
    payload: {
      operation: 'add',
      numbers: [1, 2, 3, 4, 5]
    },
    id: '123'
  }));
};

ws.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log('Received:', response);
};

ws.onclose = () => {
  console.log('Disconnected from server');
};
```

## Error Handling

The server includes built-in error handling for:
- Invalid message format
- Unknown message types
- Handler execution errors
- Connection issues

All errors are returned in a standardized format:

```typescript
{
  success: false,
  error: "Error message here",
  requestId: "original-request-id"
}
``` 