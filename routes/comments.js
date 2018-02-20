var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');


/* GET home page. */
router.post('/', function(req, res, next) {
  const comment = new Comments(req.body);
  comment.save(function(err, comment) {
		if(err) return next(err);
		res.json(comment);
	});
});

router.get('/:threadId', function(req, res, next) {
  Comments.find({threadId: req.params.threadId}, function (err, comments) {
    res.json(comments);
  });
});
//
// router.get('/:id', function(req, res, next) {
//   Comments.findById(req.params.id, function (err, thread) {
//     res.json(thread);
//   })
// });

module.exports = router;
