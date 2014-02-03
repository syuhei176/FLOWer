var gpio = require('pi-gpio');
var twitter = require('twitter');

var twitter_client = new twitter({
	consumer_key        : 'tLIWbsemslWlsKxSlh4Q',
	consumer_secret     : 'VNNSoQKhjxMAFhs9NV3Sqbh5BZ2uBtZSvDkDLIU',
	access_token_key    : '2324856098-OcK3hIitRSX7Lb9dwC9iqbaneUUoLDOwA2OHHYT',
	access_token_secret : 'HhANip2PYuq9EdByZn9OMzZiVYKc47DXBhfY6Vn9rPAwk'
});

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
	var prev = 0;
	gpio.open(pin, "input", function(err) {
		setInterval(function() {
		    gpio.read(pin, function(err, value) {
		    	if(value == 1 && prev == 0) {
			    	cb(err, value);
		    	}
	    		prev = value;
		    });
		}, 100);
	});
}

module.exports.closePin = function(pin){
	gpio.close(pin);
}


module.exports.tweet = function(message, cb){
	twitter_client.updateStatus(message, function (data) {
		cb(null, data);
	});
}

