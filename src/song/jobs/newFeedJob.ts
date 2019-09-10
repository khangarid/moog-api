import Container from "typedi";
import { Job } from "agenda";

import { SongsService } from "../services";
import { Song } from "../interfaces";
import { Feed } from "../../feed";


export function newFeedJob() {
  const songsService = Container.get(SongsService);
  const agenda = Container.get<Agenda>("agenda");

  agenda.define("new feed", async (job: Job<Feed>) => {
    const items = job.attrs.data.youtube.items;

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
    
    songsService.create(newSongs);
  });
}