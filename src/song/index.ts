import { Application } from "express";

import { songsController } from "./controllers/songsController";
import { feedEvents } from "../feed";
import { handleFeed } from "./handlers";

export const loadSong = (app: Application) => {
  feedEvents.onFeed(handleFeed)

  /**
   * Routes
   */
  app.get("/api/songs", songsController.getSongs);
  app.get("/api/songs/:id", songsController.getSong);
  app.post("/api/songs", songsController.postSong);
};



