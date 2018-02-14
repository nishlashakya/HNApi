var express = require('express');
var router = express.Router();

var Threads = require('../models/threads');


/* GET home page. */
router.post('/', function(req, res, next) {
  const thread = new Threads(req.body);
  thread.save(function(err, thread) {
			if(err) return next(err);
			res.json(thread);
		});
});

router.get('/', function(req, res, next) {
  Threads.find({}, function (err, threads) {
    res.json(threads);
  })
});

module.exports = router;
