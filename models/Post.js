const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./User');

const PostSchema = new Schema({
  user: UserSchema,
  artists: [String],
  title: String,
  description: String,
  embed: String,
  created: { type: Date, default: Date.now},
  votes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  tags: [String]
});

mongoose.model('posts', PostSchema);

module.exports = PostSchema;
