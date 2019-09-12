import { Application } from "express";

import { Feed } from "./interfaces";
import "./jobs/feedJob";
import { FeedEvents } from "./events";

const feedEvents = new FeedEvents();

const loadFeed = (app: Application) => {
};

export { loadFeed, Feed, feedEvents };
