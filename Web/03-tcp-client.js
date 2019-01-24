const net = require('net');

const socket = net.createConnection(80, 'example.com');

// rediriger les écritures du serveur dans la console
socket.pipe(process.stdout);

socket.write('GET / HTTP/1.1\r\n');
socket.write('Host: example.com\r\n');
socket.write('\r\n');
socket.end(); // !!!!!! OBLIGATOIRE (envoie le message au serveur)