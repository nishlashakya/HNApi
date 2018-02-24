var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var Users = require('../models/users');

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
      if (err) {
        return next(err);
      }
      bcrypt.compare(req.body.password, user.password, function(err, loginSuccess) {
        if (loginSuccess) {
          var token = jwt.sign(user.toJSON(), 'secret', { expiresIn: 60 * 60 * 24 * 7 });
          res.json({
            user,
            token
          });
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
    res.json(user);
  })
})

router.put('/:id', function (req, res, next) {
  Users.findByIdAndUpdate(req.params.id, req.body, { new:true }, function (err, user) {
    res.json(user);
  });
});

module.exports = router;
