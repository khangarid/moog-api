import { serializeUser, deserializeUser, use } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { model } from 'mongoose';

import { environment } from '../../shared/config';


const User = model("users");

serializeUser((user: any, done) => {
  done(null, user.id);
});

deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

use(
  new GoogleStrategy(
    {
      clientID: environment.googleClientID,
      clientSecret: environment.googleClientSecret,
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
