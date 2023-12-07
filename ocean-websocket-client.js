const WebSocket = require('ws');

const ws = new WebSocket('wss://ocean.xyz:12346');

ws.on('open', function open() {
  console.log('Connected to the server.');
  ws.send(JSON.stringify({ "track-template": 0 }));
});

ws.on('message', function incoming(data) {
  const dataStr = data.toString();
  console.log('Received data:', dataStr);

  try {
    const jsonData = JSON.parse(dataStr);
    console.log('Parsed JSON data:', jsonData);

    // Process the jsonData as needed
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});

ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});

ws.on('close', function close() {
  console.log('Disconnected from the server.');
});
