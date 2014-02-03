var raspberrypi = require('../server/raspberrypi');

module.exports.write = function(req, res){
	var pin = Number(req.param('pin') || 16);
	var value = Number(req.param('value') || 1);
	raspberrypi.write(pin, value);
	res.send("0");
}

module.exports.read = function(req, res){
	var pin = Number(req.param('pin') || 16);
	raspberrypi.read(pin, function(err, value) {
		res.send(JSON.stringify(value));
	});
}

module.exports.tweet = function(req, res){
	var message = req.param('message');
	raspberrypi.tweet(message, function(err, value) {
		res.send(JSON.stringify(value));
	});
}
