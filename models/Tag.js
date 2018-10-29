const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, unique: true }
});

mongoose.model('tags', TagSchema);

module.exports = TagSchema;
