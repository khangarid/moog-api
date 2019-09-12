import axios, { AxiosResponse } from "axios";

import { config } from "../../core/config";
import { YoutubeFeed } from "../interfaces";


async function fetchFeed(publishedAfter: string): Promise<YoutubeFeed | null> {
  const searchResponse = await search(publishedAfter);
  const searchItems = searchResponse.data.items;

  if (searchItems == null || searchItems.length < 1) return;

  const videoIds = searchItems.map(searchItem => searchItem.id.videoId) ;

  const videosResponse = await fetchVideos(videoIds);
  const videosItems = videosResponse.data.items;

  const feedItems = searchItems.map(({ snippet, id }, i) => ({
    videoId: id.videoId,
    publishedAt: snippet.publishedAt,
    title: snippet.title,
    description: snippet.description,
    thumbnail: snippet.thumbnails.high,
    statistics: videosItems[i].statistics
  }));

  return {
    runAt: new Date().toISOString(),
    items: feedItems
  };
}

async function search(publishedAfter: string): Promise<AxiosResponse<Youtube.SearchResponse>> {
  const params = {
    part: "snippet",
    location: "47.910384, 106.907324",
    locationRadius: "10mi",
    publishedAfter,
    type: "video",
    videoCategoryId: 10,
    key: config.dataFeeds.youtubeApikey
  };
  
  return axios.get<Youtube.SearchResponse>(
    "https://www.googleapis.com/youtube/v3/search",
    { params }
  );
}

async function fetchVideos(videoIds: string[]): Promise<AxiosResponse<Youtube.VideosResponse>> {
  const params = {
    part: "statistics",
    id: videoIds.join(","),
    key: config.dataFeeds.youtubeApikey
  };

    return axios.get<Youtube.VideosResponse>(
      "https://www.googleapis.com/youtube/v3/videos", 
      { params }
    );
  
  }

export const youtubeService = { fetchFeed, fetchVideos, search };