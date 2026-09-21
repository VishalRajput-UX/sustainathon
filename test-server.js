// simple script to fetch localhost:5173 and check if it returns valid HTML
const http = require('http');
http.get('http://localhost:5173', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body length:', data.length));
}).on('error', (err) => console.log('Error:', err.message));
