import { Song } from "../interfaces";
import { Feed } from "../../feed";
import { songsService } from "../services";


export async function handleFeed(feed: Feed) {
  const items = feed.youtube.items;

  const songs = await songsService.getByVideoIds(items.map(item => item.videoId)); 

  const newSongs: Song[] = items
    .filter(item => 
      !songs.find(song => song.youtube.videoId === item.videoId)
    )
    .map(item => ({
      title: item.title,
      thumbnail: item.thumbnail.url,
      youtube: {
        videoId: item.videoId,
        publishedAt: item.publishedAt
      }
    }));

  await songsService.create(newSongs);
}