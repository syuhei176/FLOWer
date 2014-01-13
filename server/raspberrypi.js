var gpio = require('pi-gpio');

module.exports.write = function(pin, value){
	gpio.open(pin, "output", function(err) {
	    gpio.write(pin, value, function() {
	        gpio.close(pin);
	    });
	});
}

module.exports.read = function(pin, cb){
	gpio.open(pin, "input", function(err) {
	    gpio.read(pin, function(err, value) {
	    	cb(err, value);
	        gpio.close(pin);
	    });
	});
}
