import { Application } from "express";
import Container from "typedi";

import { startFeed } from "./jobs/feedJob";
import { FeedEvent } from "./events";


export const loadFeed = async (app: Application) => {
  const feedEvent = new FeedEvent();

  Container.set("feedEvent", feedEvent);

  startFeed(feedEvent);
};