// Dependency for typedi, should be on top
import "reflect-metadata";

import express from "express";

import { loadCore } from "./core";
import { loadUser } from "./user";
import { loadSong } from "./song";
import { loadChart } from "./chart";
import { loadFeed } from "./feed";

const app = express();

(async function() {
  await loadCore(app);
  loadFeed(app);
  loadUser(app);
  loadSong(app);
  loadChart(app);
})();

export { app };