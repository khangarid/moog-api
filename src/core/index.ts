/**
 * Spin up .env. Load this before all else.
 */
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import { Application } from "express";

import { config } from "./config";
import { logger } from "./loaders";

global.logger = logger;

export const loadCore = async (app: Application) => {
  /**
   * Connect mongoose
   */
  mongoose.connect(config.mongoURI, { useNewUrlParser: true });

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