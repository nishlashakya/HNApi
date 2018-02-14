var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  about: String,
  points: String,
  karma: {
    type: Number,
    default: '1'
  },

})

var User = module.exports = mongoose.model('User', userSchema)
