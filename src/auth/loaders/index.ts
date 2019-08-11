import passport = require('passport');

import '../models';
import '../services';
import { authRoutes } from '../routes';

export const loadAuth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(authRoutes());
}