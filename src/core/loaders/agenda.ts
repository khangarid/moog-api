import Agenda from 'agenda';

import { config } from "../config";


const agenda = new Agenda({ db: { address: config.mongoURI } });

agenda.on('ready', () => {
  agenda.start();
});

export { agenda}