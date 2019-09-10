import { Service, Inject } from "typedi";
import { Logger } from "winston";
import { Song } from "../interfaces/Song";
import { SongModel, SongDocument } from "../models";


@Service()
export class SongsService {
  constructor(
    @Inject("logger") private logger: Logger
  ) { }

  async create(songs: Song[] | Song): Promise<SongDocument> {
    const newSongs = await SongModel.create(songs);
    this.logger.debug("Create new song(s)", newSongs);
    return newSongs;
  }

  async getAll(): Promise<SongDocument[]> {
    return await SongModel.find({});
  }

  async getById(id: string): Promise<SongDocument> {
    return await SongModel.findById(id);
  }

  async getByVideoIds(videoIds: string[]): Promise<SongDocument[]> {
    return await SongModel.find({ "youtube.videoId": { "$in": videoIds } });
  }
}