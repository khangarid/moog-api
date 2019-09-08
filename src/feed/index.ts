import { Application } from "express";
import { startFeed } from "./jobs/feedJob";
import { FeedEvent } from "./events";
import Container from "typedi";


export const loadFeed = async (app: Application) => {
  const feedEvent = new FeedEvent();

  Container.set('feedEvent', feedEvent);

  startFeed(feedEvent);
}