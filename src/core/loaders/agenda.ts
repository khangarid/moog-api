import Agenda from "agenda";

import { config } from "../config";


export async function initAgenda() {
  const agenda = new Agenda({ db: { address: config.mongoURI } });

  await agenda.start();

  return agenda;
}