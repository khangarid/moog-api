import { Application } from "express";

import { songsController } from "./controllers/songsController";
import { newFeedJob } from "./jobs";

export const loadSong = (app: Application) => {
  newFeedJob();

  /**
   * Routes
   */
  app.get("/api/songs", songsController.getSongs);
  app.get("/api/songs/:id", songsController.getSong);
  app.post("/api/songs", songsController.postSong);
};



