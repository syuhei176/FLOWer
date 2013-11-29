var mongodb = require("mongodb"),
	crypto = require('crypto'),
	Seq = require('seq'),
	BSON = mongodb.BSONPure,
    genid = require("../server/genid"),
	dbinterface = require("../server/db").getMongoDBInstance();
	

module.exports.dashboard = function(req, res){
    if(req.session && req.session.user) {
    	var user = req.session.user;
        Seq()
        .seq(function() {
        	res.render('dashboard', { user: user });
        });
    }
};

module.exports.editorlist = function(req, res){
    if(req.session && req.session.user) {
    	var user = req.session.user;
        Seq()
        .seq(function() {
            var collection = new mongodb.Collection(dbinterface, "editor");
            collection.find({owner_id : String(user.id)}, {key : 1, name : 1}, {limit:10}).toArray(this);
        })
        .seq(function(docs) {
        	res.send(JSON.stringify(docs));
        });
    }
};