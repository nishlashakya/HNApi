var mongoose = require('mongoose');

var threadSchema = mongoose.Schema({
  title: String,
  url: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  points: String,
  createdBy: {
    type: String,
    // default: '1'
  },

})

var Thread = module.exports = mongoose.model('Thread', threadSchema)
