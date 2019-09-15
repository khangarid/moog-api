import { Schema, model, Document, Model } from "mongoose";

import { Song } from "../interfaces";


export type SongDocument = Song & Document;
export type SongModel = Model<SongDocument>;

export const songSchema = new Schema({
  title: String,
  thumbnail: String,
  youtubeId: { type: String, unique: true },
  statistics: {
    type: [{
      createdAt: { type: Date, default: Date.now },
      youtube: {
        viewCount: Number,
        likeCount: Number,
        dislikeCount: Number,
        favoriteCount: Number,
        commentCount: Number
      }
    }],
    default: []
  }
}, { timestamps:  true });

export const songModel = model<SongDocument>("Song", songSchema);