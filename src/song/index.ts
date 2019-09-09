import { Application } from "express";
import { Container } from 'typedi';
import { Logger } from 'winston';

import { songsController } from "./controllers/songsController";
import * as models from './models';
import { subscribeToFeed } from "./subscribers";

export const loadSong = (app: Application) => {
  const logger = Container.get<Logger>('logger');

  /**
   * Inject things into DI container
   */
  Container.set('songModel', models.SongModel);

  subscribeToFeed();

  /**
   * Routes
   */
  app.get('/api/songs', songsController.getSongs);
  app.get('/api/songs/:id', songsController.getSong);
  app.post('/api/songs', songsController.postSong);

  logger.silly('Song module loaded')
};



