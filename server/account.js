module.paths.push("/usr/local/lib/node_modules");
var mongodb = require("mongodb"),
	bcrypt = require('bcrypt'),
	crypto = require('crypto'),
    md5sum = crypto.createHash('md5'),
	Seq = require('seq'),
	BSON = mongodb.BSONPure,
    genid = require("../server/genid"),
	dbinterface = require("../server/db").getMongoDBInstance()

var salt = bcrypt.genSaltSync(10);

module.exports = {
	register : function(req, res) {
		var email = req.param("email");
		var password = req.param("password");
        register(email, password, function(err, result) {
            res.redirect("/login");
        });
	},
	login : function(req, res) {
		var email = req.param("email");
		var password = req.param("password");
        login(email, password, function(err, result) {
            if(result.success) {
                req.session.user = result.user;
                res.redirect("/chat");
            }else{
                res.send("false");
            }
        });
	},
    get_userinfo : get_userinfo,
	get_userinfos : function(req, res) {
		var user_ids = req.param("user_ids");
        get_userinfos(user_ids, function(err, userinfos) {
            res.send(JSON.stringify(userinfos));
        });
	},
}



var account_collection_name = "account";
var group_collection_name = "groupinfo";

function register(email, password, cb) {
    console.log(email, password);
	var collection = new mongodb.Collection(dbinterface, account_collection_name);
    var doc = {};
    doc.email = email;
    doc.password = bcrypt.hashSync(password, salt)
    collection.insert(doc, function() {
        cb(null, true);
    });
}

function login(email, password, cb) {
    console.log(email, password);
	var collection = new mongodb.Collection(dbinterface, account_collection_name);
    Seq()
        .seq(function() {
            collection.find({email: email}, {limit:1}).toArray(this);
        })
        .seq(function(docs) {
            var result = {success:false};
            if(docs.length == 0) {
                cb(null, result);
            }
            var account = docs[0];
            if(bcrypt.compareSync(password, account.password)) {
                result.success = true;
                result.user = {
                    id : account._id
                }
            }
            cb(null, result);
        });
}

function get_userinfo(user, cb) {
	var collection = new mongodb.Collection(dbinterface, account_collection_name);
	collection.find({_id : new BSON.ObjectID(user.id)}, {}, {limit:1}).toArray(function(err, docs) {
        if(docs.length == 0) {
            cb(null, null);
        }else{
            docs[0].password = null;
            cb(null, docs[0]);
        }
	})
}

function get_userinfos(user_ids, cb) {
	var collection = new mongodb.Collection(dbinterface, account_collection_name);
	collection.find({_id : {$in : user_ids}}, {}, {limit:10}).toArray(function(err, docs) {
        if(docs.length == 0) {
            cb(null, null);
        }else{
            for(var i=0;i < docs.length;i++) {
                docs[i].password = null;
            }
            docs[0].password = null;
            cb(null, docs);
        }
	})
}
