const https = require('https');

const url = 'https://ocean.xyz/template/poolstatus';

https.get(url, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Parse and log the JSON data.
  res.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      console.log('Parsed JSON data:', jsonData);
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });

}).on('error', (err) => {
  console.error('Error:', err.message);
});
