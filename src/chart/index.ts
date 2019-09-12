import { Application } from "express";

import { chartController } from "./controllers";
import { feedEvents } from "../feed";
import { handleFeed } from "./handlers";


export const loadChart = (app: Application) => {
  feedEvents.onFeed(handleFeed);

  /**
   * Routes
   */
  app.get("/api/charts", chartController.getCharts);
  app.get("/api/charts/:id", chartController.getChart);
  app.post("/api/charts", chartController.postChart);
};