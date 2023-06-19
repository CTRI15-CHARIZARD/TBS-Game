import { Request, Response, NextFunction, Application, ErrorRequestHandler, Router } from 'express';
const express = require('express');
const path = require('path');
const cors = require('cors');


const port = process.env.PORT ? process.env.PORT : 3000;

const app: Application = express();

const pokeRouter: Router = require('./routers/pokeRouter.ts');
const moveRouter: Router = require('./routers/moveRouter.ts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/api/pokemon', pokeRouter);
// app.get('/api/move', moveRouter);

app.use((req: Request, res: Response): void => {res.sendStatus(404)});


app.use ((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): Response <any, Record <string, any> > => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred'},
    };

    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
})

app.listen(port, () => {
    console.log(`Securely Running at ${port}`);
});

module.exports = app;