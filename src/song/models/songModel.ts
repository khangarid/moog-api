import { Schema, model, Document, Model, Types } from "mongoose";

import { Song } from "../interfaces";


export type SongDocument = Song & Document;
export type SongModel = Model<SongDocument>;

export const songSchema = new Schema({
  title: String,
  thumbnail: String,
  youtubeId: { type: String, unique: true },
  statistics: [{ type: Types.ObjectId, ref: 'Statistic' }]
}, { timestamps: true });

export const songModel = model<SongDocument>("Song", songSchema);