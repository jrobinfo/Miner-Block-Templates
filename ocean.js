const WebSocket = require('ws');

// Connect to the WebSocket server
const ws = new WebSocket('wss://ocean.xyz:12346');

ws.on('open', function open() {
  console.log('Connected to the server.');
  // Here, you can send any initial queries if the server protocol requires
});

ws.on('message', function incoming(data) {
  console.log('Received data:', data);
  // Process the received data
});

ws.on('close', function close() {
  console.log('Disconnected from the server.');
});

ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});
