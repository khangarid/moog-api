import { Document, Schema, model } from 'mongoose';

export type SongDocument = Document & {
  name: string;
  artist: string;
  source: {
    name: string;
    key: string;
    url: string;
  }
}

const songSchema = new Schema({
  name: String,
  artist: String,
  source: {
    name: String,
    key: String,
    url: String
  }
}, { timestamps:  true });

export const Song = model<SongDocument>('Song', songSchema)