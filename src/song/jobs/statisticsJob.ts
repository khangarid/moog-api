import { scheduleJob } from "node-schedule";

import { youtubeService, songsService } from "../services";
import { Statistic } from "../interfaces";
import { statisticsService } from "../services/statisticsService";


const YOUTUBE_MAX_RESULTS = 50;

export function scheduleStatisticsJob(schedule: string) {
  // scheduleJob(schedule, publishFeed);

  setTimeout(() => {
    // updateStatistics();
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
    .reduce((acc, items) => [...acc, ...items], []);

  const statistics: Statistic[] = videos.map(video => {
    const song = songs.find(song => song.youtubeId === video.id).id;
    return { song, youtube: video.statistics };
  })

  statisticsService.create(statistics)
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