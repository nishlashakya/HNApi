var mongoose = require('mongoose');

var threadSchema = mongoose.Schema({
  title: String,
  url: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  points: {
    type: String,
    default: '1'
  },
  commentCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: String,
    // default: '1'
  },

})

var Thread = module.exports = mongoose.model('Thread', threadSchema)
