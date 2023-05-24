import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const fetch = require('node-fetch');

const pokeController = {
  getPokemonData: async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const pokeId: (number | string) = req.params.id;
      const pokeData:JSON = res.locals.pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).json()
      return next();
    }
    catch (err: (any | undefined)) { 
      return next({err: 'error retrieving Pokemon data'})
    }
  }
};

module.exports = pokeController;