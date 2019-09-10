import Container from "typedi";
import { YoutubeService } from "../services";
import { Logger } from "winston";
import { Feed } from "..";


function feedJob() {
  const youtubeService = Container.get(YoutubeService);
  const agenda = Container.get<Agenda>("agenda");
  const logger = Container.get<Logger>("logger");

  agenda.define("start feed", async job => {
    try {
      const publishedAfter = "2019-08-01T00:00:00Z";

      const youtube = await youtubeService.fetchFeed(publishedAfter);

      const feed: Feed = { youtube }

      agenda.now("new feed", feed);

      logger.info(youtube);
    } catch (error) {
      logger.error(error);
    }
  });
  
  // agenda.schedule("in 2 seconds", "start feed");
}

export { feedJob };