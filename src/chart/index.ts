import { Application } from "express";

import Container from "typedi";
import { SongModel } from "../song/models";
import { chartController } from "./controllers";
import { chartJob, newFeedJob } from "./jobs";


export const loadChart = (app: Application) => {

  Container.set("chartModel", SongModel);

  chartJob();  
  newFeedJob();
  
  /**
   * Routes
   */
  app.get("/api/charts", chartController.getCharts);
  app.get("/api/charts/:id", chartController.getChart);
  app.post("/api/charts", chartController.postChart);
};