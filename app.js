var express = require('express')
  , app = express()
  , routes = require('./routes')
  , action = require('./routes/action')
  , score = require('./routes/score')
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , cookie = require('cookie')
  , connect = require('connect')
  , path = require('path');

var MongoStore = require('connect-mongo')(express);

var rchat = require("./server/rchat");


var dbinterface = require("./server/db");
var config = require("./server/config");
dbinterface.open(function() {
	server.listen(3000);
});

var store = new MongoStore({
    db: config.db.name, // require
    host: config.db.host, // default: 127.0.0.1
    username: config.db.user, // optional
    password: config.db.pass, // optional
    clear_interval: 12 * 60 * 60 // Interval in seconds to clear expired sessions. 60 * 60 = 1 hour
});

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
  app.use(express.session({
		  secret: secret,
		  store: store,
	      cookie: {
	            httpOnly: true,
	            // 5 * 24 * 60 * 60 * 1000 = 3600000 msec = 5 * 24 hour
	            maxAge: 5 * 24 * 60 * 60 * 1000
	      }
	  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});



app.get('/', routes.index);
app.get('/edit/:key', routes.editor);
app.get('/chat/:groupkey', routes.chat);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.get('/create-group', routes.create_group);
app.get('/getuserinfos', rchat.get_userinfos);



app.post('/login', rchat.login);
app.post('/register', rchat.register);
app.post('/create-group', rchat.create_group);




io.configure(function () {
	io.set('log level', 1);
	//io.set('transports', ['websocket'/*, 'flashsocket', 'xhr-polling'*/]);
});

function authorization(handshakeData, callback) {
	var sessionCookie = cookie.parse(handshakeData.headers.cookie);
    var sessionID = connect.utils.parseSignedCookie(sessionCookie['connect.sid'], secret);
    //console.log("sid = ", sessionID);
	store.get(sessionID, function(err, session) {
		//TODO: ここでユーザがこの＿channelにアクセス可能かどうか確かめる
		//console.log(session);
		handshakeData.user = session.user;
		callback(null, true);
	});
}


var chat = io.sockets
.authorization(authorization)
.on('connection', function (socket) {
    //クライアント側からのイベントを受け取る。
    socket.on('join', function (msg) {
    	socket.join("g" + msg.group_id);
    });
    
    socket.on('message', function (msg) {
    	var room_name = "g" + msg.group_id;
        //socket.emit('result', msg);
        console.log(socket.handshake.user.id);
        rchat.send_message(socket.handshake.user, msg.group_id, msg.message, msg.reply_target, function(err, result_msg) {
            chat.in(room_name).emit("msg_broadcast", result_msg);
        });
        //socket.broadcast.emit('msg_broadcast', msg);
    });
    socket.on('getmessages', function (msg) {
        rchat.get_messages(msg.group_id, function(err, messages) {
            socket.emit('recvmessages', {messages : messages});
        });
    });
    
    socket.on('disconnect', function() {
    	//socket.leave("g" + msg.group_id);
        console.log('disconnected');
    });
});
