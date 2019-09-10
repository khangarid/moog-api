/**
 * Spin up .env. Load this before all else.
 */
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import Container from "typedi";
import { Application } from "express";

import { config } from "./config";
import { logger, initAgenda } from "./loaders";


export const loadCore = async (app: Application) => {
  /**
   * Connect mongoose
   */
  mongoose.connect(config.mongoURI, { useNewUrlParser: true });

  const agenda = await initAgenda();

  /**
   * Inject things into DI container
   */
  Container.set("agenda", agenda);
  Container.set("logger", logger);

  /**
   * Middlewares
   */
  app.use(bodyParser.json());
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [config.cookieKey]
    })
  );
};

