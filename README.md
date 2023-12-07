# Ocean XYZ WebSocket Client and Pool Status Getter

This project contains two scripts:

1. `ocean-websocket-client.js`: This script connects to a WebSocket server at `wss://ocean.xyz:12346` and sends a JSON message to track a template. It also listens for incoming messages from the server, parses the JSON data, and logs it to the console.

2. `ocean-get-poolstatus.js`: This script sends a GET request to `https://ocean.xyz/template/poolstatus` and logs the response to the console.

## Dependencies

Both scripts require Node.js and the following npm packages:

- `ws` for WebSocket connections (used in `ocean-websocket-client.js`)
- `https` for HTTPS requests (used in `ocean-get-poolstatus.js`)

## Running the Scripts

To run the scripts, navigate to the project directory in your terminal and use the `node` command followed by the script name. For example:

```bash
node ocean-websocket-client.js
```

or

```bash
node ocean-get-poolstatus.js
```
