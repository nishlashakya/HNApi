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

router.post('/login', function (req, res, next) {
  if(req.body.username && req.body.password) {
    Users.findOne({username: req.body.username}, function (err, user) {
      console.log('......................', user);
      if (err) {
        return next(err);
      }
      bcrypt.compare(req.body.password, user.password, function(err, loginSuccess) {
        if (loginSuccess) {
          console.log('......................', user);
          res.json(user);
        } else {
          return next(err);
        }
      });
    })
  }
});

router.get('/:id', function (req, res, next) {
  Users.findById(req.params.id, function (err, user) {
    if(err) {
      return next(err);
    }
    console.log('......user.........', user);
    res.json(user);
  })
})
module.exports = router;
