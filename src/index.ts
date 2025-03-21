import { MCPServer } from './MCPServer';
import { MCPMessage } from './types';

const server = new MCPServer(8080);

// Example handler for echo messages
server.registerHandler('echo', async (message: MCPMessage) => {
  return {
    success: true,
    data: message.payload,
    message: 'Echo response'
  };
});

// Example handler for math operations
server.registerHandler('math', async (message: MCPMessage) => {
  const { operation, numbers } = message.payload;
  
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return {
      success: false,
      error: 'Invalid input: numbers should be an array with at least 2 numbers'
    };
  }

  let result: number;
  switch (operation) {
    case 'add':
      result = numbers.reduce((a, b) => a + b, 0);
      break;
    case 'multiply':
      result = numbers.reduce((a, b) => a * b, 1);
      break;
    default:
      return {
        success: false,
        error: 'Unsupported operation'
      };
  }

  return {
    success: true,
    data: { result },
    message: `${operation} operation completed`
  };
});

// Broadcast a message every 5 seconds
setInterval(() => {
  server.broadcast({
    type: 'heartbeat',
    payload: {
      timestamp: Date.now()
    }
  });
}, 5000);

console.log('MCP Server started on port 8080');

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down MCP Server...');
  server.stop();
  process.exit(0);
}); 