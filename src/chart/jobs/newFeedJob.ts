import Container from "typedi";


export function newFeedJob() {
  const agenda = Container.get<Agenda>("agenda");
}