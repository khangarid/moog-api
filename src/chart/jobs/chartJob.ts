import Container from "typedi";
import { Logger } from "winston";


export function chartJob() {
  const CREATE_CHART = "feed";

  const agenda = Container.get<Agenda>("agenda");
  const logger = Container.get<Logger>("logger");

  agenda.define(CREATE_CHART, async job => {
    try {
      
    } catch (error) {
      logger.error(error);
    }
  });

  agenda.now(CREATE_CHART);
}