var express = require('express');
var router = express.Router();

var Users = require('../models/users');

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
  const plaintextPassword = req.body.password;
  bcrypt.hash(plaintextPassword, saltRounds, function(err, hash) {
    var user = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });
  user.save(function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  })
});

});
module.exports = router;
