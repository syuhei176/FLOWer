var Seq = require("seq");
var rchat = require("../server/rchat");

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

exports.chat = function(req, res){
    if(req.session && req.session.user) {
        var group_key = req.param("groupkey");
        var ui = req.param("ui");

        rchat.get_group(req.session.user, group_key, function(err, groupinfo) {
            if(groupinfo) {
                var template = 'chat';
                if(ui == "couple") {
                    template = "chat/couple";
                }else if(ui == "timeline") {
                    template = "chat/timeline";
                }else if(ui == "tree") {
                    template = "chat/tree";
                }else{
                    template = "chat/couple";
                }
                res.render(template, { group_key: group_key, groupinfo : groupinfo});
            }else{
                res.status(404).render('404');
            }
        });
    }else{
        res.redirect("/login");
    }
};

exports.register = function(req, res){
    res.render('register', { title: 'Express' });
};

exports.login = function(req, res){
    res.render('login', { title: 'Express' });
};

