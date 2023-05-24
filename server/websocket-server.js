const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('roomId', (roomId) => {
    // Emit the roomId to all connected clients
    io.emit('roomId', roomId);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 3000; // Choose the port number you prefer
server.listen(port, () => {
  console.log(`WebSocket server is listening on port ${port}`);
});
