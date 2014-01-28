

var oldmillis = 0;

function genid(cb) {
	var millis = new Date().getTime();
	if(oldmillis = millis) {
		setTimeout(function () {
			genid(cb);
		}, 1);
	}else{
		oldmillis = millis;
	}
	var uid = millis.toString(32);
	cb(null, uid);
}

module.exports = {
		genid : genid
}
