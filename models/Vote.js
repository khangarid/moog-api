const mongoose = require('mongoose');
const PostSchema = require('./Post');

const { Schema } = mongoose;

const VoteSchema = new Schema({
  post: PostSchema,
  vote: Number
});

module.exports = VoteSchema;
