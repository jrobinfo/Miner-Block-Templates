const https = require('https');

const url = 'https://ocean.xyz/template/poolstatus';

https.get(url, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log('Response:', data);
  });

}).on('error', (err) => {
  console.error('Error:', err.message);
});
