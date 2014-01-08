var gpio = require('pi-gpio');

module.exports.write = function(pin, value){
	gpio.open(pin, "output", function(err) {
	    gpio.write(pin, value, function() {
	        gpio.close(pin);
	    });
	});
}
