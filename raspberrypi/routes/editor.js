module.paths.push("/usr/local/lib/node_modules");
var crypto = require('crypto'),
	Seq = require('seq'),
    mydb = require('../server/mydb'),
    genid = require("../server/genid");

module.exports = {
	edit : function(req, res){
		var key = req.param('key');
	    Seq()
        .seq(function(_auth_result) {
            genid.genid(this);
        })
        .seq(function(uid) {
    	    res.render('editor.ejs', {editorinfo : {key : key}, element_key_header : uid});
        });
	},
	create_project : function(req, res) {
            var name = req.param("name");
            create_project(name, {}, function(err, result) {
            	res.send(JSON.stringify(result));
            });
	}
}


function create_project(name, model, cb) {
	var key = null;
    Seq()
        .seq(function() {
            genid.genid(this);
        })
        .seq(function(uid) {
            var md5sum = crypto.createHash('md5');
            md5sum.update(uid);
            key = md5sum.digest('hex');
        	mydb.save(key, JSON.stringify({}), cb);
        })
        .seq(function() {
            cb(null, {editorinfo : { key : key}});
        });
}

function update_project(user, key, update, cb) {
	mydb.save(key, JSON.stringify(update), cb);
}
