var express = require('express');
var router = express.Router();

var Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  user.save(function (err, doc) {
    if (err) return next(err);
    console.log('here i am//////////////', doc);
    res.json(doc);
  })

});
module.exports = router;
