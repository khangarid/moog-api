import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { config } from '../../core/config';
import { User } from '../models';


passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.passport.googleClientID,
      clientSecret: config.passport.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({ googleId: profile.id }).save();
      done(null, newUser);
    }
  )
);