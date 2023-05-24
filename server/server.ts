import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Request, Response, NextFunction, Application, ErrorRequestHandler, Router } from 'express';

const port = process.env.PORT ? process.env.PORT : 3000;
const app: Application = express();
const httpServer = createServer(app); // Create HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('roomId', () => {
    console.log('in socket.on');
    console.log(socket.id);
    // // Emit the roomId to the current connected client
    socket.emit('roomId', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const pokeRouter: Router = require('./routers/pokeRouter.ts');
const moveRouter: Router = require('./routers/moveRouter.ts');

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

app.get('/api/pokemon', pokeRouter);
app.get('/api/move', moveRouter);

app.use((req: Request, res: Response): void => {
  res.sendStatus(404);
});

app.use(
  (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };

    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  }
);

app.listen(port, () => {
  console.log(`Securely Running at ${port}`);
});

module.exports = app;
