


var mongodb = require("mongodb"),
	BSON = mongodb.BSONPure,
	dbinterface = require("../server/db").getMongoDBInstance()

/*
 * GET users listing.
 */

var collection_name = "scores";


exports.request_score = function(req, res){
	var id = req.param("id");
	var score = req.param("score");
	var type = req.param("type");
	var date = req.param("date");
	var score_id = req.param("score_id");
	var user_id = req.param("user_id");
	var user_name = req.param("user_name");
    
	var collection = new mongodb.Collection(dbinterface, collection_name);
    collection.insert(doc, function() {
        res.send(JSON.stringify())
    });
}

exports.ranking = function(req, res){
	var collection = new mongodb.Collection(dbinterface, collection_name);
	collection.find({},{},{limit:10}).toArray(function(err, docs) {
                                              res.render('score/show.ejs', {docs : docs});
                                              })
	res.render('score/create.ejs', { title: 'Express' });
}

exports.list = function(req, res){
	var collection = new mongodb.Collection(dbinterface, collection_name);
	collection.find({},{},{limit:10}).toArray(function(err, docs) {
		res.render('score/show.ejs', {docs : docs});
	})
};

exports.create_view = function(req, res){
	res.render('score/create.ejs', { title: 'Express' });
};

exports.create = function(req, res){
      
	var score = req.param("score");

	var type = req.param("type");

	var date = req.param("date");

	var score_id = req.param("score_id");

	var user_id = req.param("user_id");

	var user_name = req.param("user_name");



	var collection = new mongodb.Collection(dbinterface, collection_name);
    var doc = {};
      
    doc.score = score;

    doc.type = type;

    doc.date = date;

    doc.score_id = score_id;

    doc.user_id = user_id;

    doc.user_name = user_name;


    collection.insert(doc, function() {
    	res.redirect("/scores")
    });

};

exports.update_view = function(req, res){
	var id = req.param("id");
	var collection = new mongodb.Collection(dbinterface, collection_name);
	collection.find({_id:new BSON.ObjectID(id)}, {}, {limit:1}).toArray(function(err, docs) {
		if(docs.length > 0) {
			res.render('score/update.ejs', { doc : docs[0] });
		}else{
			res.status(404).send("not found");
		}
	})
};

exports.update = function(req, res){
	var id = req.param("id");

	var score = req.param("score");

	var type = req.param("type");

	var date = req.param("date");

	var score_id = req.param("score_id");

	var user_id = req.param("user_id");

	var user_name = req.param("user_name");

	var collection = new mongodb.Collection(dbinterface, collection_name);
    var doc = {};

    doc.score = score;

    doc.type = type;

    doc.date = date;

    doc.score_id = score_id;

    doc.user_id = user_id;

    doc.user_name = user_name;

	collection.update({_id:new BSON.ObjectID(id)},
			{$set: doc},
			{safe:true,multi:false,upsert:false}, function() {
               res.redirect("/scores")
			});

};


