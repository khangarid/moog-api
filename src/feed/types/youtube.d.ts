declare module FeedTypes {
  export type YoutubeResponseItem = {
    kind: string,
    etag: string,
    id: {
      kind: string,
      videoId: string
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string
      thumbnails: {
        default: {
          url: string
          width: number,
          height: number
        },
        medium: {
          url: string
          width: number,
          height: number
        },
        high: {
          url: string,
          width: number,
          height: number
        }
      },
      channelTitle: string,
      liveBroadcastContent: string
    }
  }
    
  export type YoutubeResponse = {
    kind: string,
    etag: string,
    regionCode: string,
    nextPageToken: string,
    pageInfo: {
      totalResults: number,
      resultsPerPage: number
    },
    items: YoutubeResponseItem[]
  }
}
