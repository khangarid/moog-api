import { Document, Model } from 'mongoose';
import { ISong } from '../interfaces/ISong';

declare module SongTypes {
  export type SongDocument = ISong & Document;
  export type SongModel = Model<SongDocument>
}