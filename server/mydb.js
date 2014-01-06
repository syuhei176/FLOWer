var fs = require('fs');

module.exports = {
	list : list,
	save : save,
	load : load
}
var dir = "./data/";

function list(cb) {
	fs.readdir(dir, function(err, files){
	    if (err) throw err;
	    var fileList = [];
	    files.filter(function(file){
	        return fs.statSync(dir+file).isFile() && /.*\.json$/.test(file);
	    }).forEach(function (file) {
	        fileList.push(file);
	    });
	    cb(null, fileList);
	});
}

function save(name, data, cb) {
	fs.writeFile(dir+name + '.json', data , function (err) {
		cb(null);
	});
}

function load(name, cb) {
	fs.readFile(dir+name + '.json', 'utf8', function (err, text) {
	    cb(null, text);
	});
}