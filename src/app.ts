import express from 'express';

import { loadCore } from './core';
import { loadUser } from './user';
import { loadSong } from './song';
import { loadChart } from './chart';

const app = express();

loadCore(app);
loadUser(app);
loadSong(app);
loadChart(app);

export { app };