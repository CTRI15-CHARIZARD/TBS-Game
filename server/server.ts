import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const port = process.env.PORT ? process.env.PORT : 3000;
const app = express();
const httpServer = createServer(app); // Create HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080', // Replace with the actual origin of your React application
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('roomId', (roomId) => {
    console.log('Received roomId:', roomId);
    // Emit the roomId to all connected clients
    io.emit('roomId', roomId);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
