export interface Statistic {
  youtube: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  }
}

export interface SongToStatistic {
  [songId: string]: Statistic
}