module.paths.push("/usr/local/lib/node_modules");
var crypto = require('crypto'),
	Seq = require('seq'),
    genid = require("../server/genid"),
    mydb = require('../server/mydb');

module.exports = {
	save_all : function(editor_key, data, cb) {
		save_all(editor_key, data, cb);
	},
	get_all : function(editor_key, cb) {
		get_all(editor_key, cb);
	}
}



var account_collection_name = "account";
var editor_collection_name = "editor";

function save_all(editor_key, data, cb) {
	mydb.save(editor_key, JSON.stringify(data), cb);
}

function get_all(editor_key, cb) {
    Seq()
    .seq(function() {
    	mydb.load(editor_key, this);
    })
    .seq(function(data) {
    	cb(null, {model : JSON.parse(data)});
    })
}

