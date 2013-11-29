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
            var collection = new mongodb.Collection(dbinterface, "account");
            collection.find({_id : new BSON.ObjectID(String(user.id))}, {projects : 1}, {limit : 1}).toArray(this);
        })
        .seq(function(docs) {
        	var has_projects = [];
        	if(docs[0].projects) {
            	for(var i=0;i < docs[0].projects.length;i++) {
            		has_projects.push(docs[0].projects[i].key);
            	}
        	}
            var collection = new mongodb.Collection(dbinterface, "editor");
        	var query = { key : { $in : has_projects }};
            collection.find(query, {key : 1, name : 1}, {limit:10}).toArray(this);
        })
        .seq(function(docs) {
        	res.send(JSON.stringify(docs));
        });
    }
};