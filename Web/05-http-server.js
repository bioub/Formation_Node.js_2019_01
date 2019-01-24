const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Bonjour');
  res.end(); // !!! OBLIGATOIRE
});

/*
server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Bonjour');
  res.end(); // !!! OBLIGATOIRE
});
*/

server.on('error', (err) => {
  console.log(err.message);
});

/*
server.on('listening', () => {
  console.log('Server started');
});
*/

server.listen(8080, () => {
  console.log('Server started !!!');
});
