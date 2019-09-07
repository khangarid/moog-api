import { Service, Inject } from 'typedi';
import { Logger } from 'winston';
import { SongTypes } from '../types';
import { ISong } from '../interfaces/ISong';


@Service()
export class SongsService {
  constructor(
    @Inject('songModel') private songModel: SongTypes.SongModel,
    @Inject('logger') private logger: Logger
  ) { }

  async create(song: ISong): Promise<SongTypes.SongDocument> {
    const newSong = await this.songModel.create(song);
    this.logger.debug('Create new song', song);
    return newSong;
  }

  async getAll(): Promise<SongTypes.SongDocument[]> {
    const songs = await this.songModel.find({});
    return songs;
  }

  async getById(id: string) {
    const song = await this.songModel.findById(id);
    return song;
  }
}