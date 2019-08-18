import { Request, Response } from "express";
import Container from "typedi";
import { SongsService } from "../services/songsService";
import { ISong } from "../models";


/**
 * GET songs
 * @param req 
 * @param res 
 */
const getSongs = async (req: Request, res: Response) => {
  const songsService = Container.get(SongsService);
  const songs = await songsService.getAll();

  res.send({ songs });
};

/**
 * GET songs/:id
 * @param req 
 * @param res 
 */
const getSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  const songsService = Container.get(SongsService);

  const song = await songsService.getById(id);

  res.send({ song });
};

/**
 * POST songs
 * @param req 
 * @param res 
 */
const postSong = async (req: Request, res: Response) => {
  const { } = req.body;
  const songsService = Container.get(SongsService);

  const song: ISong = {
    name: 'Bad guy',
    artist: 'Billie Ellish',
    source: {
      name: 'youtube',
      id: 'jpEUusGcdIw'
    }
  }
  
  const newSong = await songsService.create(song);
  res.send({ song: newSong });
};

export const songsController = {
  getSongs,
  getSong,
  postSong
};