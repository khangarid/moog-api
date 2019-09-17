import { Song } from "../interfaces";
import { songModel, SongDocument } from "../models";


async function create(songs: Song[] | Song, ordered: boolean = false): Promise<SongDocument> {
  return await songModel.insertMany(songs, { ordered });
}

async function getAll(): Promise<SongDocument[]> {
  return await songModel.find({});
}

async function getOnlyYoutubeIds(): Promise<SongDocument[]> {
  return await songModel.find({}, { youtubeId: 1 })
}

async function getById(id: string): Promise<SongDocument> {
  return await songModel.findById(id);
}

async function getByVideoIds(videoIds: string[]): Promise<SongDocument[]> {
  return await songModel.find({ "youtubeId": { "$in": videoIds } });
}

export const songsService = { create, getAll, getById, getByVideoIds, getOnlyYoutubeIds };