export interface Song {
  title: string;
  thumbnail: string;
  youtube: {
    videoId: string;
    publishedAt: string;
  }
}
