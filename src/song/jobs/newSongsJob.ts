import { scheduleJob } from "node-schedule";

import { youtubeService, songsService } from "../services";
import { Song } from "../interfaces";


export function scheduleNewSongsJob(schedule: string) {
  // scheduleJob(schedule, publishFeed);
  setTimeout(() => {
    // addNewSongs();
  }, 1000)
}

async function addNewSongs() {
  const publishedAfter = "2019-06-21T00:00:00Z";
  const response = await youtubeService.search(publishedAfter);
  const youtubeVideos = response.data.items;

  const newSongs: Song[] = youtubeVideos
    .map(({ snippet, id }) => ({
      title: snippet.title,
      thumbnail: snippet.thumbnails.high.url,
      youtubeId: id.videoId
    }));

  songsService.create(newSongs);
}