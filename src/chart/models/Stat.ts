import { Document, Model, Schema, model } from "mongoose";

import { Stat } from "../interfaces";


export type StatDocument = Stat & Document;
export type StatModel = Model<StatDocument>;

const statSchema = new Schema({
  songId: String,
  youtube: {
    viewCount: Number,
    likeCount: Number,
    dislikeCount: Number,
    favoriteCount: Number,
    commentCount: Number
  }
}, { timestamps: true });

export const StatModel = model<StatDocument>("Stat", statSchema);