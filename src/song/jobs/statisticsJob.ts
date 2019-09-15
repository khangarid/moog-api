import { scheduleJob } from "node-schedule";

import { youtubeService, songsService } from "../services";
import { SongToStatistic } from "../interfaces";


const YOUTUBE_MAX_RESULTS = 50;

export function scheduleStatisticsJob(schedule: string) {
  // scheduleJob(schedule, publishFeed);

  setTimeout(() => {
    updateStatistics();
  }, 1000)
}

async function updateStatistics(): Promise<void> {
  const songs = await songsService.getOnlyYoutubeIds();

  const youtubeIds = songs.map(song => song.youtubeId);

  const groups = chunkArray<string>(youtubeIds, YOUTUBE_MAX_RESULTS);

  const apiCalls = groups.map(group => youtubeService.videos(group))

  const responses = await Promise.all(apiCalls);

  const videos = responses
    .map(res => res.data.items)
    .reduce((acc, items) => [...acc, ...items], [])

  const songToStatistic: SongToStatistic = videos.reduce((dict, video) => {
    const songId = songs.find(song => song.youtubeId === video.id).id;
    const statistics = { youtube: video.statistics };
    return { ...dict, [songId]: statistics };
  }, {})

  songsService.updateStatistics(songToStatistic)
}

/**
 * Returns an array with arrays of the given size.
 *
 * @param array {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  var results = [];
  
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  
  return results;
}