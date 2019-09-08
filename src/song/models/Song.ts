import { Schema, model, Model, Document } from 'mongoose';
import { ISong } from '../interfaces';


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