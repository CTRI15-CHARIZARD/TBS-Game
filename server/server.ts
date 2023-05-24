import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const port = process.env.PORT ? process.env.PORT : 3000;
const app = express();
const httpServer = createServer(app); // Create HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080', // Replace with the actual origin of your React application
    methods: ['GET', 'POST'],
  },
});

// const io = require('socket.io')(3000, {
//   cors: {
//     origin: 'http://localhost:8080',
//   },
// });

io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('roomId', () => {
    // console.log('in socket.on');
    // console.log(socket.id);
    // Emit the roomId to the current connected client
    socket.emit('roomId', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
