import { Request, Response } from "express";

export const requireLogin = (req: Request, res: Response, next) => {
  if (!req.user) return res.status(401).send({ error: 'You must log in!'});
  next();
};