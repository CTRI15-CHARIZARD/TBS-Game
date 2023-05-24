// import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

// const fetch = require('node-fetch');

// const moveController = {
//   getMoveData: async (req: Request, res: Response, next: NextFunction) => {
//     try { 
//       const moveId: (number | string) = req.params.id;
//       const moveData:JSON = res.locals.moveData = await fetch(`https://pokeapi.co/api/v2/move/${moveId}`).json()
//       return next();
//     }
//     catch (err: (any | undefined)) { 
//       return next({err: 'error retrieving move data'})
//     }
//   }
// };

// module.exports = moveController;