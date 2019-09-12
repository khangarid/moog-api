import { Request, Response } from "express";
import { songsService } from "../services";


/**
 * GET songs
 * @param req 
 * @param res 
 */
async function getSongs(req: Request, res: Response) {
  const songs = await songsService.getAll();

  res.send({ songs });
};

/**
 * GET songs/:id
 * @param req 
 * @param res 
 */
async function getSong(req: Request, res: Response) {
  const { id } = req.params;

  const song = await songsService.getById(id);

  res.send({ song });
};

/**
 * POST songs
 * @param req 
 * @param res 
 */
async function postSong(req: Request, res: Response) {
  const { } = req.body;

  // res.send({ song: newSong });
};

export const songsController = {
  getSongs,
  getSong,
  postSong
};