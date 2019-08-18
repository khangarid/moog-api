/**
 * Spin up .env. Load this before all else.
 */
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import winston from 'winston';
import Container from 'typedi';

import { config } from './config';

export const loadCore = (app) => {
  const logger = createLogger();
  /**
   * Inject things into DI container
   */
  Container.set('logger', logger);
  
  /**
   * Connect mongoose
   */
  mongoose.connect(config.mongoURI, { useNewUrlParser: true });
  logger.silly('Mongoose connected');

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
}

/**
 * Create Winston logger instance
 */
function createLogger(): winston.Logger {
  return winston.createLogger({
    level: config.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    ),
    transports: [
      config.nodeEnv !== 'development' 
        ? new winston.transports.Console()
        : new winston.transports.Console({
          format: winston.format.combine(
            winston.format.cli(),
            winston.format.splat(),
          )
        })
    ]
  });
}