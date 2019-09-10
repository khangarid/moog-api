import { Request, Response } from "express";
import Container from "typedi";
import { ChartService } from "../services";


/**
 * GET songs
 * @param req 
 * @param res 
 */
const getCharts = async (req: Request, res: Response) => {
  const songsService = Container.get(ChartService);
  const songs = await songsService.getAll();

  res.send({ songs });
};

/**
 * GET songs/:id
 * @param req 
 * @param res 
 */
const getChart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const songsService = Container.get(ChartService);

  const song = await songsService.getById(id);

  res.send({ song });
};

/**
 * POST songs
 * @param req 
 * @param res 
 */
const postChart = async (req: Request, res: Response) => {
  const { } = req.body;
  const songsService = Container.get(ChartService);

  // res.send({ song: newSong });
};

export const chartController = {
  getCharts,
  getChart,
  postChart
};