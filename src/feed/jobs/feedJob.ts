import Container from "typedi";
import { YoutubeService } from "../services";
import { Logger } from "winston";
import { FeedEvent } from "../events";

function startFeed(event: FeedEvent) {
  const FEED_FROM_APIS = 'feed';

  const youtubeService = Container.get(YoutubeService);
  const agenda = Container.get<Agenda>('agenda');
  const logger = Container.get<Logger>('logger')

  agenda.define(FEED_FROM_APIS, async (job, done) => {
    try {
      const publishedAfter = '2019-08-01T00:00:00Z';

      const youtubeFeed = await youtubeService.fetchFeed(publishedAfter);

      event.emitNewFeed({ youtube: youtubeFeed })
      
      logger.info(youtubeFeed);
    } catch (error) {
      logger.error(error);
    }

    done();
  });

  agenda.on('ready', () => {
    agenda.now(FEED_FROM_APIS);
  })
}

export { startFeed };