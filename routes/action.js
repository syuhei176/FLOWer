


var mongodb = require("mongodb"),
	BSON = mongodb.BSONPure,
	dbinterface = require("../server/db").getMongoDBInstance()

/*
 * GET users listing.
 */

var collection_name = "actions";

exports.list = function(req, res){
	var collection = new mongodb.Collection(dbinterface, collection_name);
	collection.find({},{},{limit:10}).toArray(function(err, docs) {
		res.render('action/show.ejs', {docs : docs});
	})
};

exports.create_view = function(req, res){
	res.render('action/create.ejs', { title: 'Express' });
};

exports.create = function(req, res){
	var user_id = req.param("user_id");
	var type = req.param("type");
	var stage_no = req.param("stage_no");
	var wave = req.param("wave");
	var gold = req.param("gold");



	var collection = new mongodb.Collection(dbinterface, collection_name);
    var doc = {};
      
    doc.user_id = user_id;

    doc.type = type;

    doc.stage_no = stage_no;

    doc.wave = wave;

    doc.gold = gold;


    collection.insert(doc, function() {
    	res.redirect("/actions")
    });

};

exports.update_view = function(req, res){
	var id = req.param("id");
	var collection = new mongodb.Collection(dbinterface, collection_name);
	collection.find({_id:new BSON.ObjectID(id)}, {}, {limit:1}).toArray(function(err, docs) {
		if(docs.length > 0) {
			res.render('action/update.ejs', { doc : docs[0] });
		}else{
			res.status(404).send("not found");
		}
	})
};

exports.update = function(req, res){
	var id = req.param("id");

	var user_id = req.param("user_id");

	var type = req.param("type");

	var stage_no = req.param("stage_no");

	var wave = req.param("wave");

	var gold = req.param("gold");

	var collection = new mongodb.Collection(dbinterface, collection_name);
    var doc = {};

    doc.user_id = user_id;

    doc.type = type;

    doc.stage_no = stage_no;

    doc.wave = wave;

    doc.gold = gold;

	collection.update({_id:new BSON.ObjectID(id)},
			{$set: doc},
			{safe:true,multi:false,upsert:false}, function() {
               res.redirect("/actions")
			});

};


