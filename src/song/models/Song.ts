import { Schema, model, Model, Document } from "mongoose";

import { Song } from "../interfaces";


export type SongDocument = Song & Document;
export type SongModel = Model<SongDocument>

export const songSchema = new Schema({
  title: String,
  thumbnail: String,
  youtube: {
    videoId: String,
    publishedAt: String,
    description: String
  }
}, { timestamps:  true });

export const SongModel = model<SongDocument>("Song", songSchema);