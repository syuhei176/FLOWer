var fs = require('fs');

module.exports = {
	list : list,
	save : save,
	load : load
}

function list(cb) {
	fs.readdir('./data/', function(err, files){
	    if (err) throw err;
	    var fileList = [];
	    files.filter(function(file){
	        return fs.statSync('./data/'+file).isFile() && /.*\.json$/.test(file);
	    }).forEach(function (file) {
	        fileList.push(file);
	    });
	    cb(null, fileList);
	});
}

function save(name, data, cb) {
	fs.writeFile('./data/'+name + '.json', data , function (err) {
		cb(null);
	});
}

function load(name, cb) {
	var fs = require('fs');
	fs.readFile('./data/'+name + '.json', 'utf8', function (err, text) {
	    cb(null, text);
	});
}