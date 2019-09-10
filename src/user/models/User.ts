import { Schema, Document, model, Model } from "mongoose";
import { User } from "../interfaces";


export type UserDocument = Document & User
export type UserModel = Model<UserDocument>;

const userSchema = new Schema({
  googleId: String,
  isModerator: Boolean
});

export const UserModel = model<UserDocument>("User", userSchema);