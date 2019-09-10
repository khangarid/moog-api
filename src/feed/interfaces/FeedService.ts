export interface FeedService<T> {
  fetchFeed(publishedAfter: string): Promise<T>;
}