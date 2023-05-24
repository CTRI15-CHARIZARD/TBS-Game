import { Request, Response } from "express";

const express = require('express');
const moveController = require('../controllers/moveController')

const router = express.Router();

router.get('/:id', moveController.getMoveData, (req: Request, res: Response) => {
  return res.status(200).send({'move': res.locals.moveData});
});

module.exports = router;