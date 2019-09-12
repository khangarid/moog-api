import { Request, Response } from "express";
import { chartService } from "../services";


/**
 * GET songs
 * @param req 
 * @param res 
 */
async function getCharts(req: Request, res: Response) {
  const charts = await chartService.getAll();
  res.send({ charts });
};

/**
 * GET songs/:id
 * @param req 
 * @param res 
 */
async function getChart(req: Request, res: Response) {
  const { id } = req.params;
  const chart = await chartService.getById(id);
  res.send({ chart });
};

/**
 * POST songs
 * @param req 
 * @param res 
 */
async function postChart(req: Request, res: Response) {
  const { } = req.body;
  // res.send({ song: newSong });
};

export const chartController = {
  getCharts,
  getChart,
  postChart
};