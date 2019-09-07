import { Schema, model } from 'mongoose';
import { SongTypes } from '../types';


const songSchema = new Schema({
  name: String,
  artist: String,
  source: {
    name: String,
    id: String,
  }
}, { timestamps:  true });

export const Song = model<SongTypes.SongDocument>('Song', songSchema)