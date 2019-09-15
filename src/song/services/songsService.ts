import { BulkWriteOpResultObject } from "mongodb";

import { Song, SongToStatistic } from "../interfaces";
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

async function updateStatistics(dict: SongToStatistic): Promise<BulkWriteOpResultObject> {
  const bulkWrites = Object.keys(dict).map(songId => ({
    updateOne: {
        filter: { _id: songId },
        update: { $push: { statistics: dict[songId] } }
      }
  }));

  return await songModel.bulkWrite(bulkWrites);
}

export const songsService = { create, getAll, getById, getByVideoIds, updateStatistics, getOnlyYoutubeIds };