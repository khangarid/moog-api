import { ChartDocument, chartModel } from "../models";
import { Chart } from "../interfaces";


async function create(songs: Chart[] | Chart): Promise<ChartDocument> {
  return await chartModel.create(songs);
}

async function getAll(): Promise<ChartDocument[]> {
  return await chartModel.find({});
}

async function getById(id: string): Promise<ChartDocument> {
  return await chartModel.findById(id);
}

export const chartService = { create, getAll, getById };