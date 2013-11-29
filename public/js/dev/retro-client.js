$(function(){

    var socket = null;
    
	var RetroApplication = Backbone.Model.extend({
    });
    var retroApplication = new RetroApplication({});
    
    function RetroClient(editor_key) {
    	this.editor_key = editor_key;
    	this.editor = null;
    }
    
    RetroClient.prototype.init = function(cb) {
    	var self = this;
    	retroApplication.set("editor_key", this.editor_key);
        this.socket = io.connect('http://'+location.hostname + "/editor-socket", {
			'reconnect': true,
			'reconnection delay': 500,
			'max reconnection attempts': 10
		});
    	this.socket.on('connect', function() {
    		console.log('connected');
			self.socket.emit('join', {
				editor_key : retroApplication.get("editor_key")
				});
			self.socket.on('getall', function(a) {
				console.log(a);
				self.editor = cb(a);
			});
			self.get_all();
    	});
    }
    
    //private
    RetroClient.prototype.send = function() {
    	
    }
    //public
    RetroClient.prototype.update = function() {
    	
    }
    RetroClient.prototype.get_all = function() {
       	var self = this;
    	var packet = {};
    	packet.editor_key = self.editor_key;
    	self.socket.emit("getall", packet);
    }
    RetroClient.prototype.save_all = function(data) {
    	var self = this;
    	var packet = {};
    	packet.editor_key = self.editor_key;
    	packet.data = data;
    	self.socket.emit("saveall", packet);
    }
    
    RetroClient.prototype.exporter = function() {
    	this.save_all(this.editor.diagram.exporter());
    	
    }
    
    window.retro.RetroClient = RetroClient;
    /*
    window.init_editor = function(editor_key) {
            function getuser() {
                $.get("getuserinfos");
            }
            var userinfo = null;
        	socket.on('connect', function() {
        		console.log('connected');
    			socket.emit('join', {
    				editor_key : rchatApplication.get("editor_key")
    				});
    			socket.on('update-model', function (msg) {
    				
	    		});
    			socket.on('userinfo', function (msg) {
    				console.log("userinfo", msg.userinfo);
                    userinfo = msg.userinfo;
	    		});
    			socket.on('msg_broadcast', function(msg){
                    msg.replies = [];
                    
                    messageList.models.forEach(function(message) {
                        console.log("aaaaa", message);
                        if(message.get('id') == msg.reply_target) {
                            msg.parent = message.toJSON();
                        }
                    })
                    messageListView.appendMessage(new Message(msg));
                    var el = document.getElementById("list");
                    console.log(el.scrollTop, el.scrollHeight);
                    $('#list').parent("div").animate({ scrollTop: el.scrollHeight }, 'fast');
	    		});
    			socket.on('recvmessages', function(msg){
                    var messages = msg.messages;
                    var messagemap = {};
                    for(var i=0;i < messages.length;i++) {
                        messages[i].replies = [];
                        messagemap[messages[i].id] = messages[i];
                    }
                    for(var i=0;i < messages.length;i++) {
                        if(messages[i].reply_target && messagemap[messages[i].reply_target]) {
                            messages[i].parent = messagemap[messages[i].reply_target];
                            messagemap[messages[i].reply_target].replies.push(messages[i]);
                        }
                    }
                    for(var i=0;i < messages.length;i++) {
                        messageListView.appendMessage(new Message(messages[i]));
                    }
	    		});
                socket.emit('getmessages', {group_id : rchatApplication.get("group_id")});
    		});
    }
    */
}())