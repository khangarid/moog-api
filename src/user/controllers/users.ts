import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.send(req.user);
}

const getLogout = (req: Request, res: Response) => {
  req.logout();
  res.send();
}

export const usersController = { getUser, getLogout };