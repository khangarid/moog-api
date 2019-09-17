import { Statistic } from "../interfaces";
import { statisticModel, StatisticDocument } from "../models";


async function create(statistics: Statistic[] | Statistic): Promise<StatisticDocument> {
  return statisticModel.create(statistics);
}

export const statisticsService = { create }