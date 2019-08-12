import { Service } from 'typedi';
import { Song, ISong, SongDocument } from '../models';

@Service()
export class SongsService {
  constructor() { }

  async create(song: ISong): Promise<SongDocument> {
    const newSong = await Song.create(song);
    return newSong;
  }

  async getAll(): Promise<SongDocument[]> {
    const songs = await Song.find({});
    return songs;
  }

  async getById(id: string) {
    const song = await Song.findById(id);
    return song;
  }
}