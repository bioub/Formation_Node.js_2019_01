const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-Type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.write('\r\n');
  socket.end(); // !!! OBLIGATOIRE
});

server.on('error', (err) => {
  console.log(err.message);
});

server.on('listening', () => {
  console.log('Server started');
});

server.listen(8080);
