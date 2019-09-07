import { Application } from "express";
import Container from "typedi";
import { FeedService } from "./services/feedService";

export const loadFeed = async (app: Application) => {

  const feedService = Container.get(FeedService);

  const response = await feedService.fetch();

  console.log(response.data);
}