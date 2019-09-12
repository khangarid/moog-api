import { EventEmitter } from "events";
import { Feed } from "../interfaces";

const NEW_FEED = 'new feed'

export class FeedEvents extends EventEmitter {
  onFeed(listener: (...args: any[]) => void) {
    this.on(NEW_FEED, listener)
  }

  emitFeed(feed: Feed) {
    this.emit(NEW_FEED,feed)
  }
}