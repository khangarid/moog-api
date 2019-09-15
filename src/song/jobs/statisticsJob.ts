import { scheduleJob } from "node-schedule";

import { youtubeService, songsService } from "../services";
import { SongToStatistic } from "../interfaces";


export function scheduleStatisticsJob(schedule: string) {
  // scheduleJob(schedule, publishFeed);

  setTimeout(() => {
    // updateStatistics();
  }, 1000)
}

async function updateStatistics(): Promise<void> {
  const songs = await songsService.getOnlyYoutubeIds();

  const response = await youtubeService.videos(songs.map(song => song.youtubeId));

  const videos = response.data.items;

  const songToStatistic: SongToStatistic = videos.reduce((dict, video) => {
    const songId = songs.find(song => song.youtubeId === video.id).id;
    const statistics = { youtube: video.statistics };

    return { ...dict, [songId]: statistics };
  }, {})

  songsService.updateStatistics(songToStatistic)
}