import { Application } from "express";

import { feedJob } from "./jobs/feedJob";
import { Feed } from "./interfaces";


const loadFeed = (app: Application) => {
  feedJob();
};

export { loadFeed, Feed };
