var mongodb = require('mongodb');
var config = require('./config');


var server = new mongodb.Server(config.db.host, config.db.port, {});
var mongo_dbinstance = mongodb.Db(config.db.name, server);
//var username = config.db.user;
//var password = config.db.pass;

function open(cb) {
	mongo_dbinstance.open(function (error, client) {
		if (error) throw error;
		if(cb) cb(null);
	});
	
}


module.exports.open = open;

module.exports.getMongoDBInstance = function(){
	return mongo_dbinstance;
}