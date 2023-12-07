const WebSocket = require('ws');

const ws = new WebSocket('wss://ocean.xyz:12346');

ws.on('open', function open() {
  console.log('Connected to the server.');
  ws.send(JSON.stringify({ "track-template": 0 }));
});

let accumulatedData = '';

ws.on('message', function incoming(data) {
  accumulatedData += data.toString();

  // Check if the complete data is received (depends on the server's protocol)
  if (isCompleteData(accumulatedData)) {
    try {
      const jsonData = JSON.parse(accumulatedData);
      processJsonData(jsonData); // Process your JSON data here
      accumulatedData = ''; // Reset for next message
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  }
});

function isCompleteData(dataString) {
  // Implement logic to determine if the complete data has been received
  // For example, check for a specific delimiter or end-of-data indicator
}

function processJsonData(jsonData) {
  // Implement your data processing logic here
}


ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});

ws.on('close', function close() {
  console.log('Disconnected from the server.');
});
