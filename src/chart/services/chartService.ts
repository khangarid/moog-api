import { Service, Inject } from "typedi";
import { Logger } from "winston";
import { ChartModel, ChartDocument } from "../models";
import { Chart } from "../interfaces";


@Service()
export class ChartService {
  constructor(
    @Inject("chartModel") private chartModel: ChartModel,
    @Inject("logger") private logger: Logger
  ) { }

  async create(songs: Chart[] | Chart): Promise<ChartDocument> {
    return await this.chartModel.create(songs);
  }

  async getAll(): Promise<ChartDocument[]> {
    return await this.chartModel.find({});
  }

  async getById(id: string): Promise<ChartDocument> {
    return await this.chartModel.findById(id);
  }
}