const mongoose = require('mongoose');
const VoteSchema = require('./Vote');

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  isModerator: Boolean,
  votes: [VoteSchema]
});

mongoose.model('users', UserSchema);

module.exports = UserSchema;
