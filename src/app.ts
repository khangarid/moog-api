import express from 'express';

import { loadCore } from './core';
import { loadAuth } from './auth';
import { loadChart } from './chart';

const app = express();

loadCore(app);
loadAuth(app);
loadChart(app);

export { app };