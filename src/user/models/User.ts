import { Schema, Document, model, Model } from 'mongoose';
import { IUser } from '../interfaces';


export type UserDocument = Document & IUser
export type UserModel = Model<UserDocument>;

const userSchema = new Schema({
  googleId: String,
  isModerator: Boolean
});

export const User = model<UserDocument>('User', userSchema);