import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';

import { environment } from './config';

export const loadCore = (app) => {
  mongoose.connect(environment.mongoURI, { useNewUrlParser: true });
  
  app.use(bodyParser.json());
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [environment.cookieKey]
    })
  );
}