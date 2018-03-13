var jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
	const token = req.headers['authorization']
	jwt.verify(token, 'secret', function(err, decoded) {
		// if (err) {
		// 	res.send(401);
		// } else {
		console.log('err...........', err);
			req.decoded = decoded;
			next();
		// }
	});
}
module.exports = checkToken;
