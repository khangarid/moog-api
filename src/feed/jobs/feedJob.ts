import { scheduleJob } from "node-schedule";

import { youtubeService } from "../services";
import { Feed } from "../interfaces";
import { feedEvents } from "..";

// scheduleJob('0 1 * * *', publishFeed);

setTimeout(() => {
  publishFeed();
}, 1000)

async function publishFeed() {
  try {
    const publishedAfter = "2019-08-01T00:00:00Z";

    const youtube = await youtubeService.fetchFeed(publishedAfter);

    const feed: Feed = { youtube }

    feedEvents.emitFeed(feed);
  } catch (error) {
  }
}