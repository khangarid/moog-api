import passport = require('passport');

import './models';
import './services';
import { usersController } from './controllers';

export const loadUser = (app) => {
  /**
   * Middlewares
   */
  app.use(passport.initialize());
  app.use(passport.session());

  /**
   * Users routes
   */
  app.get("/api/account", usersController.getUser);
  app.get("/api/logout", usersController.getLogout);

  /**
   * Auth routes
   */
  app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => { 
    res.send();
  });
}