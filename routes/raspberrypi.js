var raspberrypi = require('../server/raspberrypi');

module.exports.write = function(req, res){
	var pin = Number(req.param('pin') || 16);
	var value = Number(req.param('value') || 1);
	raspberrypi.write(pin, value);
	res.send("0");
}
