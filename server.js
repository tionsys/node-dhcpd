var dhcp = require('dhcp'),
    server = dhcp.createServer('udp4');

server.discover(function(packet, ip) {
  return {
    yiaddr: ip,
    options: {
      1: '255.255.255.0',
      3: '192.168.1.1'
    }
  };
});
server.request(function(packet, ip) {
  return {
    yiaddr: ip,
    options: {
      1: '255.255.255.0',
      3: '192.168.1.1'
    }
  };
});
server.decline(function(packet) {
  return [];
});
server.release(function(packet) {
  return [];
});
server.inform(function(packet) {
  return [];
});

server.on('discover', function(packet) {
  console.log('- discover -', packet);
});
server.on('offerError', function(err, packet) {
  console.log('offerError', err, (packet));
});
server.on('offerSent', function(bytes, packet) {
  console.log('offerSent');
});

server.on('request', function(packet) {
  console.log('- request -', packet);
});
server.on('decline', function(packet) {
  console.log('- decline -', packet);
});
server.on('release', function(packet) {
  console.log('- release -', packet);
});
server.on('inform', function(packet) {
  console.log('- inform -', packet);
});

server.on('offer', function() {
  console.log('- offer -');
});
server.on('ack', function(packet) {
  console.log('- ack -', packet);
  var buffer = dhcp.Packet.toBuffer(packet);
  console.log('- ack packet->buffer -', buffer.length, buffer);
  console.log('- ack buffer->packet -', dhcp.Packet.fromBuffer(buffer));
});
server.on('nak', function() {
  console.log('- nak -');
});
    
server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(67);