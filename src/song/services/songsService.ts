import { Service, Inject } from 'typedi';

import { ISong, SongDocument, SongModel } from '../models';
import { Logger } from 'winston';


@Service()
export class SongsService {
  constructor(
    @Inject('songModel') private songModel: SongModel,
    @Inject('logger') private logger: Logger
  ) { }

  async create(song: ISong): Promise<SongDocument> {
    const newSong = await this.songModel.create(song);
    this.logger.debug('Create new song', song);
    return newSong;
  }

  async getAll(): Promise<SongDocument[]> {
    const songs = await this.songModel.find({});
    return songs;
  }

  async getById(id: string) {
    const song = await this.songModel.findById(id);
    return song;
  }
}