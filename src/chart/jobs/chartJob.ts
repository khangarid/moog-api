import Container from "typedi";
import { Logger } from "winston";


function startChart() {
  const CREATE_CHART = 'feed';

  const agenda = Container.get<Agenda>('agenda');
  const logger = Container.get<Logger>('logger')

  agenda.define(CREATE_CHART, async (job, done) => {
    try {
      
    } catch (error) {
      logger.error(error);
    }

    done();
  });

  agenda.on('ready', () => {
    agenda.now(CREATE_CHART);
  })
}

export { startChart };