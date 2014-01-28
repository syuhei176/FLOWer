var express = require('express')
  , app = express()
  , dashboard = require('./routes/dashboard')
  , routes_editor = require('./routes/editor')
  , routes_raspberrypi = require('./routes/raspberrypi')
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , cookie = require('cookie')
  , path = require('path');

var editor_controller = require('./server/editor')
var vm_controller = require('./server/vm')
var config = require("./server/config");

server.listen(3000);

var secret = "wwn0x0nww";

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(secret));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', dashboard.dashboard);
app.get('/dashboard', dashboard.dashboard);
app.get('/editor/list', dashboard.editorlist);
app.get('/editor/download/:key', dashboard.download);
app.get('/editor/run/:key', dashboard.run);


//権限のあるプロジェクトを開く
app.get('/editor/edit/:key', routes_editor.edit);
app.post('/editor/create', routes_editor.create_project);
//app.post('/editor/delete', routes_editor.delete_project);

app.post('/pigpio/write', routes_raspberrypi.write);
app.post('/pigpio/read', routes_raspberrypi.read);

//Run flower language on Node.JS
app.get('/run/:key', function(req, res) {
	var key = req.param("key");
	editor_controller.get_all(key, function(err, model) {
    	vm_controller.VMMain_nodejs.run(model);
    	res.send("Running");
	})
});


io.configure(function () {
	io.set('log level', 1);
	//io.set('transports', ['websocket'/*, 'flashsocket', 'xhr-polling'*/]);
});


var chat = io
.of("/editor-socket")
.on('connection', function (socket) {
    //クライアント側からのイベントを受け取る。
    socket.on('join', function (msg) {
    	socket.join("g" + msg.editor_key);
    });
    socket.on('saveall', function (msg) {
    	editor_controller.save_all(msg.editor_key, msg.data, function() {
    		
    	});
    });
    socket.on('update', function (msg) {
    	var room_name = "g" + msg.editor_key;
        //socket.emit('result', msg);
        console.log(socket.handshake.user.id);
        editor.send_message(socket.handshake.user, msg.group_id, msg.message, msg.reply_target, function(err, result_msg) {
            chat.in(room_name).emit("msg_broadcast", result_msg);
        });
        //socket.broadcast.emit('msg_broadcast', msg);
    });
    socket.on('getall', function (msg) {
    	editor_controller.get_all(msg.editor_key, function(err, model) {
            socket.emit('getall', model);
    	})
    });
    
    socket.on('disconnect', function() {
    	//socket.leave("g" + msg.group_id);
        console.log('disconnected');
    });
});

