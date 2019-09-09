import Container from "typedi";
import { FeedEvent } from "../../feed/events";


export function subscribeToFeed() {
  const feedEvent = Container.get<FeedEvent>('feedEvent');

  feedEvent.onNewFeed((feed) => {
    
  })
}