var	crypto = require('crypto'),
	Seq = require('seq'),
    genid = require("../server/genid"),
    mydb = require('../server/mydb');
	

module.exports.dashboard = function(req, res){
    	var device = req.param('device');
    	var ua = req.headers['user-agent'];
    	if(!device || (device!="pc" && device!="tablet")) {
        	if(ua.indexOf('iPad') >= 0) {
        		device = "tablet";
        	}else if(ua.indexOf('iPhone') >= 0) {
        		device = "tablet";
        	}else if(ua.indexOf('Android') >= 0) {
        		device = "tablet";
        	}else{
        		device = "pc";
        	}
    	}
        Seq()
        .seq(function(account) {
        	res.render('dashboard_'+device, {});
        });
};

module.exports.editorlist = function(req, res){
        Seq()
        .seq(function() {
        	mydb.list(this);
        })
        .seq(function(list) {
        	res.send(JSON.stringify(list));
        });
};

module.exports.download = function(req, res){
	var key = req.param("key");
        Seq()
        .seq(function() {
        	mydb.load(key, this);
        })
        .seq(function(data) {
        	res.header('Content-type', 'application/octet-stream;');
        	res.header('Content-Disposition', 'attachment; filename='+data.name+'.json;');
        	res.send(data);
        });
};

module.exports.run = function(req, res){
	var key = req.param('key');
    res.render('run.ejs', {editorinfo : {key : key}});
};
