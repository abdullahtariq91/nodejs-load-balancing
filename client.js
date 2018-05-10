const net = require('net');
const socket = new net.Socket();
const port = 6000;
const host = "localhost";

socket.connect(port, host, function(message) {
  console.log("Socket Connected");
})

socket.on('data', (data) => {
  console.log(data.toString('utf-8'));
});
