var Seq = require("seq");

/*
 * GET home page.
 */

exports.index = function(req, res){
	var user = null;
    if(req.session && req.session.user) {
    	user = req.session.user;
    }
	res.render('index', { user: user });
};

