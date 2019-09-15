import axios, { AxiosResponse } from "axios";

import { config } from "../../core/config";


async function search(publishedAfter: string): Promise<AxiosResponse<Youtube.SearchResponse>> {
  const params = {
    part: "snippet",
    location: "47.910384, 106.907324",
    locationRadius: "10mi",
    publishedAfter,
    type: "video",
    videoCategoryId: 10,
    maxResults: 50,
    key: config.dataFeeds.youtubeApikey
  };
  
  return axios.get<Youtube.SearchResponse>(
    "https://www.googleapis.com/youtube/v3/search",
    { params }
  );
}

async function videos(videoIds: string[]): Promise<AxiosResponse<Youtube.VideosResponse>> {
  const params = {
    part: "statistics",
    id: videoIds.join(","),
    maxResults: 50,
    key: config.dataFeeds.youtubeApikey
  };

  return axios.get<Youtube.VideosResponse>(
    "https://www.googleapis.com/youtube/v3/videos", 
    { params }
  );
  
  }

export const youtubeService = { videos, search };