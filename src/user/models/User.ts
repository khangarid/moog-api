import { Schema, Document, model } from 'mongoose';

export type UserDocument = Document & {
  googleId: String,
  isModerator: Boolean
};

const userSchema = new Schema({
  googleId: String,
  isModerator: Boolean
});

export const User = model<UserDocument>('User', userSchema);