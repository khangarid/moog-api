import { Document, Model, Schema, model, Types } from "mongoose";

import { Statistic } from "../interfaces";


export type StatisticDocument = Statistic & Document;
export type StatisticModel = Model<StatisticDocument>;

export const statisticSchema = new Schema({
  song: { type: Types.ObjectId, ref: 'Song', required: true },
  youtube: {
    viewCount: Number,
    likeCount: Number,
    dislikeCount: Number,
    favoriteCount: Number,
    commentCount: Number
  }
}, { timestamps: true })

export const statisticModel = model<StatisticDocument>('Statistic', statisticSchema)