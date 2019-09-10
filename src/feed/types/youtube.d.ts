declare namespace Youtube {
  export type SearchItem = {
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      liveBroadcastContent: string;
    };
  }
    
  export type SearchResponse = {
    kind: string;
    etag: string;
    regionCode: string;
    nextPageToken: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: SearchItem[];
  }

  export type VideosItem = {
    kind: string;
    etag: string;
    id: string;
    statistics: {
     viewCount: number;
     likeCount: number;
     dislikeCount: number;
     favoriteCount: number;
     commentCount: number;
    };
   }

  export type VideosResponse = {
    kind: string;
    etag: string;
    pageInfo: {
     totalResults: number;
     resultsPerPage: number;
    };
    items: VideosItem[];
   }
   
}
