var express = require('express');
var router = express.Router();

var Threads = require('../models/threads');
var checkToken = require('../utils/checkToken')

/* GET home page. */
router.post('/', checkToken, function(req, res, next) {
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

router.get('/:id', function(req, res, next) {
  Threads.findById(req.params.id, function (err, thread) {
    res.json(thread);
  })
});

router.put('/:id', checkToken, function(req, res, next) {
  Threads.findByIdAndUpdate(req.params.id, req.body, { new:true }, function (err, thread) {
    res.json(thread);
  })
});

module.exports = router;
