import { EventEmitter } from "events";
import { Feed } from "../interfaces";

export class FeedEvent extends EventEmitter {
  static newFeed = 'newFeed';

  emitNewFeed(feed: Feed) {
    this.emit(FeedEvent.newFeed, feed);
  }

  onNewFeed(cb: (feed: Feed) => void) {
    this.on(FeedEvent.newFeed, cb);
  }
}
