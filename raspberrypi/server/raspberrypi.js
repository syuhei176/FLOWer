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

module.exports.readWait = function(pin, cb){
	gpio.open(pin, "input", function(err) {
		setInterval(function() {
		    gpio.read(pin, function(err, value) {
		    	if(value == 1) {
			    	cb(err, value);
		    	}
		    });
		}, 100);
	});
}

module.exports.closePin = function(pin){
	gpio.close(pin);
}

