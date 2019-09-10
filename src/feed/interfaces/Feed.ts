export interface Feed {
  youtube: YoutubeFeed;
}

export interface YoutubeFeedItem {
  videoId: string;
  publishedAt: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

export interface YoutubeFeed {
  runAt: string;
  items: YoutubeFeedItem[];
}