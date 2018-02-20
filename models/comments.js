const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create schema

const schema = mongoose.Schema({
  _id           : { type: ObjectId, auto: true},
  threadId      : { type: ObjectId, ref: 'Threads' },
  createdDate   : { type: Date, default: Date.now },
  commentedBy   : { type: String },
  comment       : String
});

module.exports = mongoose.model('Comments', schema);
