import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { config } from "../../core/config";
import { UserModel } from "../models";


passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.passport.googleClientID,
      clientSecret: config.passport.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await UserModel.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new UserModel({ googleId: profile.id }).save();
      done(null, newUser);
    }
  )
);