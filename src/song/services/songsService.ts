import { Song } from "../interfaces";
import { songModel, SongDocument } from "../models";


async function create(songs: Song[] | Song): Promise<SongDocument> {
  return await songModel.create(songs);
}

async function getAll(): Promise<SongDocument[]> {
  return await songModel.find({});
}

async function getById(id: string): Promise<SongDocument> {
  return await songModel.findById(id);
}

async function getByVideoIds(videoIds: string[]): Promise<SongDocument[]> {
  return await songModel.find({ "youtube.videoId": { "$in": videoIds } });
}

export const songsService = { create, getAll, getById, getByVideoIds };