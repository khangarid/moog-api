import { Application } from "express";

import { startChart } from "./jobs";
import Container from "typedi";
import { SongModel } from "../song/models";
import { chartController } from "./controllers";
import { subscribeToFeed } from "./subscribers";


export const loadChart = (app: Application) => {

  Container.set("chartModel", SongModel);

  startChart();  
  subscribeToFeed();
  
  /**
   * Routes
   */
  app.get("/api/charts", chartController.getCharts);
  app.get("/api/charts/:id", chartController.getChart);
  app.post("/api/charts", chartController.postChart);
};