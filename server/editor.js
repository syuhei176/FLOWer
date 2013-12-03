module.paths.push("/usr/local/lib/node_modules");
var mongodb = require("mongodb"),
	bcrypt = require('bcrypt'),
	crypto = require('crypto'),
	Seq = require('seq'),
	BSON = mongodb.BSONPure,
    genid = require("../server/genid"),
	dbinterface = require("../server/db").getMongoDBInstance()

var salt = bcrypt.genSaltSync(10);

module.exports = {
	save_all : function(editor_key, data, cb) {
		save_all(editor_key, data, cb);
	},
	get_all : function(editor_key, cb) {
		get_all(editor_key, cb);
	},
	create_group : function(req, res) {
        if(req.session && req.session.user) {
            var user = req.session.user;
            var group_name = req.param("group-name");
            create_group(user, group_name, function(err, result) {
                res.redirect("/chat/" + result.groupinfo.key);
            });
        }else{
            res.redirect("/login");
        }
	},
	send_message : send_message,
	get_messages : get_messages
}



var account_collection_name = "account";
var editor_collection_name = "editor";

function save_all(editor_key, data, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
        .seq(function(uid) {
        	collection.update({key: editor_key},
        			{$set: {model : data}},
        			{safe:true,multi:false,upsert:false}, this);
        })
        .seq(function() {
        	cb();
        });
}

function get_all(editor_key, cb) {
	var collection = new mongodb.Collection(dbinterface, editor_collection_name);
    Seq()
    .seq(function() {
    	collection.find({key : editor_key}, {model : 1}, {limit:1}).toArray(this);
    })
    .seq(function(docs) {
    	if(docs.length == 0) {
    		cb(null, null);
    	}else{
    		cb(null, docs[0]);
    	}
    })
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

function get_group(user, group_key, cb) {
	var collection = new mongodb.Collection(dbinterface, group_collection_name);
	collection.find({key : group_key}, {}, {limit:1}).toArray(function(err, docs) {
        if(docs.length == 0) {
            cb(null, null);
        }else{
            cb(null, docs[0]);
        }
	})
}




function get_messages(group_key, cb) {
    var messages = null;
    Seq()
        .seq(function() {
            var collection = new mongodb.Collection(dbinterface, group_collection_name);
            collection.find({key : group_key}, { messages: { $slice : -16 }}, {limit:1}).toArray(this);
        })
        .seq(function(docs) {
            if(docs[0].messages) {
                messages = docs[0].messages;
            }else{
                messages = [];
            }
            var collection = new mongodb.Collection(dbinterface, account_collection_name);
            var user_ids = [];
            for(var i=0;i < messages.length;i++) {
                user_ids.push(new BSON.ObjectID(messages[i].user_id));
            }
            collection.find({_id : {$in : user_ids}}, {}, {limit:10}).toArray(this);
        })
        .seq(function(docs) {
            var userinfomap = {};
            var messagemap = {};
            for(var i = 0;i < docs.length;i++) {
                delete docs[i].password;
                userinfomap[String(docs[i]._id)] = docs[i];
            }
            for(var i=0;i < messages.length;i++) {
                messages[i].userinfo = userinfomap[messages[i].user_id];
            }
            cb(null, messages);
        })
};

function htmlEscape(s){
	s=s.replace(/&/g,'&amp;');
	s=s.replace(/>/g,'&gt;');
	s=s.replace(/</g,'&lt;');
	return s;
}
function send_message(user, group_id, content, reply_target, cb) {
    content = htmlEscape(content);
    var mat = content.match(/(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)/g);
    console.log(content, mat);
    if(mat) {
        for(var i=0;i < mat.length;i++) {
            content = content.split(mat[i]).join('<a href="'+mat[i]+'">'+mat[i]+'</a>');
        }
    }
    var result_msg = {};
    result_msg.group_id = group_id;
    result_msg.user_id = user.id;
    result_msg.created_date = new Date();
    result_msg.content = content;
    
    Seq()
        .seq(function() {
            genid.genid(this);
        })
        .seq(function(uid) {
            result_msg.id = uid;
            var doc = {
                id : uid,
                user_id : user.id,
                content : content,
                created_date : result_msg.created_date
            };
            var collection = new mongodb.Collection(dbinterface, group_collection_name);
            if(reply_target) {
                doc.reply_target = reply_target;
                result_msg.reply_target = reply_target;
            }
            collection.update({key : group_id },
                    {$push: {messages : doc}},
                    {safe:true,multi:false,upsert:false}, function() {
                        cb(null, result_msg);
                    });
        })
}
