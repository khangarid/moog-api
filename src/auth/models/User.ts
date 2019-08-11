import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  googleId: String,
  isModerator: Boolean
});

model('users', UserSchema);

export { UserSchema };
