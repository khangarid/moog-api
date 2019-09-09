import { Application } from "express";

import { startChart } from "./jobs";


export const loadChart = (app: Application) => {
  startChart();  
}