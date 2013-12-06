module.paths.push("/usr/local/lib/node_modules");
var mongodb = require("mongodb"),
	bcrypt = require('bcrypt'),
	crypto = require('crypto'),
	Seq = require('seq'),
	BSON = mongodb.BSONPure,
    genid = require("../server/genid"),
    account_controller = require("../server/account"),
	dbinterface = require("../server/db").getMongoDBInstance();

module.exports = {
	edit : function(req, res){
		var user = null;
        if(req.session && req.session.user) {
            user = req.session.user;
        }
		var key = req.param('key');
		var auth_result = null;
	    Seq()
        .seq(function() {
        	account_controller.get_userinfo(user, this);
        })
        .seq(function(account) {
            //アクセス権を確認
        	check_auth_to_project(account, key, this);
        })
        .seq(function(_auth_result) {
        	auth_result = _auth_result;
        	if(auth_result == null) {
        	    res.status(403).render('403.ejs', {});
        		return;
        	}
            genid.genid(this);
        })
        .seq(function(uid) {
    	    res.render('editor.ejs', {editorinfo : {key : key}, element_key_header : uid});
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
            var key = req.param("key");
            var update = {};
            if(req.param("name")) {
            	update.name = req.param("name");
            }
            if(req.param("visibility")) {
            	update.visibility = req.param("visibility");
            }
            update_project(user, key, update, function(err, result) {
            	res.send(JSON.stringify(result));
            });
        }else{
        	res.send(JSON.stringify(false));
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

var account_collection_name = "account";
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

function update_project(user, key, update, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
        .seq(function() {
        	collection.update({key : key},
        			{$set: update},
        			{safe:true,multi:false,upsert:false}, cb);
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

function check_auth_to_project(account, key, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
    .seq(function() {
    	collection.find({key : key}, {}, {limit:1}).toArray(this);
    })
    .seq(function(docs) {
        if(docs.length == 0) {
        	//プロジェクトがない
            cb(null, null);
            return;
        }
        if(String(account._id) == docs[0].owner_id) {
        	//オーナー
            cb(null, {
            	message : "ok",
            	code : 1,
            	readonly : false
            });
            return;
        }
        var result = null;
    	if(!docs[0].userlist) {
    		//許可ユーザがいない
    		result = null;
    	}else{
        	for(var i=0;i < docs[0].userlist.length;i++) {
        		if(String(account._id) == docs[0].userlist[i]) {
        			result = {
                    	message : "ok",
                    	code : 1,
                    	readonly : false
                    };
        			break;
        		}
        	}
    	}
    	if(docs[0].visibility == "public") {
    		result = {
            	message : "ok",
            	code : 1,
            	readonly : true
            };
    	}
    	cb(null, result);
    });
}