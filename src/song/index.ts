import { Application } from "express";
import { songsController } from "./controllers/songsController";

export const loadSong = (app: Application) => {
  app.get('/api/songs', songsController.getSongs);
  app.get('/api/songs/:id', songsController.getSong);
  app.post('/api/songs', songsController.postSong);
};