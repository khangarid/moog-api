import { Application } from "express";

import { chartController } from "./controllers";


export const loadChart = (app: Application) => {
  /**
   * Routes
   */
  app.get("/api/charts", chartController.getCharts);
  app.get("/api/charts/:id", chartController.getChart);
  app.post("/api/charts", chartController.postChart);
};