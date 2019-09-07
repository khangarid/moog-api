import { Schema, Document, model } from 'mongoose';


const userSchema = new Schema({
  googleId: String,
  isModerator: Boolean
});

export const User = model<UserTypes.UserDocument>('User', userSchema);