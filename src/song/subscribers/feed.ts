import Container from "typedi";
import { FeedEvent } from "../../feed/events";
import { SongsService } from "../services";
import { Song } from "../interfaces";

export function subscribeToFeed() {
  const feedEvent = Container.get<FeedEvent>("feedEvent");
  const songsService = Container.get(SongsService);

  feedEvent.onNewFeed(async (feed) => {
    const items = feed.youtube.items;

    const songs = await songsService.getByVideoIds(items.map(item => item.videoId)); 

    const newSongs: Song[] = items
      .filter(item => 
        songs.find(song => song.youtube.videoId !== item.videoId)
      )
      .map(item => ({
        title: item.title,
        thumbnail: item.thumbnail.url,
        youtube: {
          videoId: item.videoId,
          publishedAt: item.publishedAt
        }
      }));
    
    songsService.create(newSongs);
  });
}