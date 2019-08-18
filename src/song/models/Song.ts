import { Document, Schema, model, Model } from 'mongoose';


export interface ISong {
  name: string;
  artist: string;
  source: {
    name: string;
    id: string;
  }
}

export type SongDocument = ISong & Document;

export type SongModel = Model<SongDocument>

const songSchema = new Schema({
  name: String,
  artist: String,
  source: {
    name: String,
    id: String,
  }
}, { timestamps:  true });

export const Song = model<SongDocument>('Song', songSchema)