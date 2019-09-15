import express from "express";

import { loadCore } from "./core";
import { loadUser } from "./user";
import { loadSong } from "./song";
import { loadChart } from "./chart";

const app = express();

(async function() {
  await loadCore(app);
  loadUser(app);
  loadSong(app);
  loadChart(app);
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
