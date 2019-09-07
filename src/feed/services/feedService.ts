import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import axios, { AxiosResponse } from 'axios';
import { config } from '../../core/config';

@Service()
export class FeedService {
  constructor(
    @Inject('logger') private logger: Logger
  ) { }

  fetch(): Promise<AxiosResponse<FeedTypes.YoutubeResponse>> {
    const params = {
      part: 'snippet',
      location: '47.910384, 106.907324',
      locationRadius: '10mi',
      publishedAfter: '2019-08-01T00:00:00Z',
      type: 'video',
      videoCategoryId: 10,
      key: config.dataFeeds.youtubeApikey
    }
    
    return axios.get<FeedTypes.YoutubeResponse>('https://www.googleapis.com/youtube/v3/search', {
      params
    })
  }
}