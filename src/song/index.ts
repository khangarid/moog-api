import { Application } from "express";

import { songsController } from "./controllers/songsController";
import { scheduleNewSongsJob } from "./jobs";
import { scheduleStatisticsJob } from "./jobs/statisticsJob";
import { songModel, statisticModel } from "./models";
import { songsService } from "./services";
import { statisticsService } from "./services/statisticsService";

const loadSong = (app: Application) => {
  scheduleNewSongsJob('0 1 * * *');
  scheduleStatisticsJob('0 1 * * *');

  /**
   * Routes
   */
  app.get("/api/songs", songsController.getSongs);
  app.get("/api/songs/:id", songsController.getSong);
  app.post("/api/songs", songsController.postSong);
};

export { 
  loadSong,
  songModel,
  statisticModel,
  songsService,
  statisticsService 
}
