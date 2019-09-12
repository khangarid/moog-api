import { Song } from "../../song/interfaces";

export interface Chart {
  days: number;
  songs: Song[];
}