import { Document, Model, Schema, model } from "mongoose";

import { Chart } from "../interfaces";
import { songSchema } from "../../song/models";


export type ChartDocument = Chart & Document;
export type ChartModel = Model<ChartDocument>;

const chartSchema = new Schema({
  days: Number,
  songs: [songSchema]
}, { timestamps: true });

export const chartModel = model<ChartDocument>("Chart", chartSchema);