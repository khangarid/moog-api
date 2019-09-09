import { Service, Inject } from 'typedi';
import { Logger } from 'winston';
import { Song } from '../interfaces/Song';
import { SongModel, SongDocument } from '../models';


@Service()
export class SongsService {
  constructor(
    @Inject('songModel') private songModel: SongModel,
    @Inject('logger') private logger: Logger
  ) { }

  async create(songs: Song[] | Song): Promise<SongDocument> {
    const newSong = await this.songModel.create(songs);
    this.logger.debug('Create new song(s)', songs);
    return newSong;
  }

  async getAll(): Promise<SongDocument[]> {
    const songs = await this.songModel.find({});
    return songs;
  }

  async getById(id: string): Promise<SongDocument> {
    const song = await this.songModel.findById(id);
    return song;
  }

  async getByVideoIds(videoIds: string[]): Promise<SongDocument[]> {
    const songs = await this.songModel.find({ 'youtube.videoId': { '$in': videoIds } });
    return songs;
  }
}