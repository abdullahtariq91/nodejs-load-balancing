const net = require('net');

let connections = [];
let messageCount = 0;

const server = net.createServer((sock) => {
  // 'connection' listener
  sock.id = new Date().getTime();
  console.log('Client ' + sock.id + ' connected.');
  connections.push(sock);

  sock.on('end', () => {
    let index = connections.indexOf(sock);
    console.log('Client ' + sock.id + ' disconnected.');
    connections.splice(index, 1);
  });

  setInterval(function() {
    let index = messageCount % connections.length;
    if (connections[index]) {
      let message = {
        sensorName: 'Ats Phase Voltage',
        value: 12.3,
        clientId: connections[index].id,
        messageCount: messageCount.toString()
      };
      connections[index].write(JSON.stringify(message));
      messageCount++;
    }
  }, 2000);
});

server.on('error', (err) => {
  throw err;
});

server.listen(6000, () => {
  console.log('Server started');
});
