module.paths.push("/usr/local/lib/node_modules");
var mongodb = require("mongodb"),
	bcrypt = require('bcrypt'),
	crypto = require('crypto'),
	Seq = require('seq'),
	BSON = mongodb.BSONPure,
    genid = require("../server/genid"),
	dbinterface = require("../server/db").getMongoDBInstance();

module.exports = {
	edit : function(req, res){
	    Seq()
        .seq(function() {
            genid.genid(this);
        })
        //アクセス権を確認
        .seq(function(uid) {
    	    res.render('editor.ejs', {editorinfo : {key : req.param('key')}, element_key_header : uid});
        });
	},
	create_project : function(req, res) {
        if(req.session && req.session.user) {
            var user = req.session.user;
            var name = req.param("name");
            create_project(user, name, {}, function(err, result) {
            	res.send(JSON.stringify(result));
            });
        }else{
            res.redirect("/login");
        }
	},
	update_project : function(req, res) {
        if(req.session && req.session.user) {
            var user = req.session.user;
            var name = req.param("name");
            update_project(user, name, function(err, result) {
                res.redirect("/editor/edit/" + result.editorinfo.key);
            });
        }else{
            res.redirect("/login");
        }
	},
	delete_project : function(req, res) {
        if(req.session && req.session.user) {
            var user = req.session.user;
            var key = req.param("key");
            delete_project(user, key, function(err, result) {
                res.redirect("/editor/edit/");
            });
        }else{
            res.redirect("/login");
        }
	},
	copy_project : function(req, res) {
        if(req.session && req.session.user) {
            var user = req.session.user;
            var key = req.param("key");
            copy_project(user, key, function(err, result) {
            	res.send(JSON.stringify(result));
            });
        }else{
        	res.send("false");
        }
	}
}

var editor_collection_name = "editor";

function create_project(user, name, model, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    var doc = {};
    doc.owner_id = user.id;
    doc.name = name;
    doc.model = model;
    Seq()
        .seq(function() {
            genid.genid(this);
        })
        .seq(function(uid) {
            var md5sum = crypto.createHash('md5');
            md5sum.update(uid);
            doc.key = md5sum.digest('hex');
            collection.insert(doc, this);
        })
        .seq(function() {
        	var collection = new mongodb.Collection(dbinterface, account_collection_name);
        	var query = {_id : new BSON.ObjectID(String(user.id))};
        	var update = {};
        	var has_project = {
        			key : doc.key
        	}
        	update = {$push:{projects:has_project}};
        	collection.update(query, update, {safe:true,multi:false,upsert:true}, this);
        })
        .seq(function() {
            cb(null, {editorinfo : { key : doc.key}});
        });
}

function update_project(user, name, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    var doc = {};
    doc.owner_id = user.id
    doc.name = name
    Seq()
        .seq(function() {
            genid.genid(this);
        })
        .seq(function(uid) {
            md5sum.update(uid);
            doc.key = md5sum.digest('hex');
        	collection.update({_id:new BSON.ObjectID(id)},
        			{$set: doc},
        			{safe:true,multi:false,upsert:false}, this);
        })
        .seq(function() {
            res.redirect("/scores")
        });
}
function delete_project(user, key, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
        .seq(function() {
            collection.remove({key : key}, this);
        })
        .seq(function() {
        	cb(null);
        });
}

function copy_project(user, key, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
        .seq(function() {
        	collection.find({key : key}, {}, {limit:1}).toArray(this);
        })
        .seq(function(docs) {
            if(docs.length == 0) {
                cb(null, null);
            }else{
            	create_project(user, "Copied Editor", docs[0].model, cb);
            }
        });
}
