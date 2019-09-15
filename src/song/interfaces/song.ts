export interface Statistic {
  createdAt?: Date,
  youtube: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  }
}

export type SongToStatistic = {
  [songId: string]: Statistic
}

export interface Song {
  title: string;
  thumbnail: string;
  youtubeId: string;
  statistics?: Statistic[]
}
