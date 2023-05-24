import express from 'express';
import path from 'path';
import cors from 'cors';

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();

// WebSocket server code
const { server } = require('./websocket-server');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

const httpServer = require('http').createServer(app);
httpServer.on('request', app);
httpServer.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.listen(port, () => {
  console.log(`Securely Running at ${port}`);
});
