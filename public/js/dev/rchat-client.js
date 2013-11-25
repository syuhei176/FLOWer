$(function(){

    var socket = null;
    
	var RChatApplication = Backbone.Model.extend({
    });
    var rchatApplication = new RChatApplication({});

	var ChatBox = Backbone.Model.extend({
	    defaults: {
	        //"": new Date().toISOString()
	    },
	    initialize: function (attrs, options) {
	    },
	    validate: function (attrs) {
	        if (attrs.content.length === 0) {
	            return "empty";
	        }
	    },
        setReply : function(reply_target) {
            this.set("reply_target", reply_target);
            this.trigger("reply");
        }
	});
    var ChatBoxView = Backbone.View.extend({
	    initialize: function (options) {
	    	_.bindAll(this, "render");

	        this.model.bind("reply", this.render);
            this.render()
	    },
	    events: {
	        'click #close-replayzone' : "close",
	        'click #btn' : "send"
	    },
        close : function(e) {
            this.model.setReply(null);
        },
        send : function() {
    				var message = $('#message');
    				console.log(message);
                    var content = message.val();
                    if(chatBox.get('reply_target')) {
                        socket.emit('message', {group_id : rchatApplication.get("group_id"), message : content, reply_target : chatBox.get('reply_target')} );
                    }else{
                        socket.emit('message', {group_id : rchatApplication.get("group_id"), message : content } );
                    }
                    message.val("")
        },
	    render : function() {
            console.log(this.model.attributes);
	    	var source = document.getElementById("source-chatbox").innerHTML;
	    	var result = Jarty.eval(source, { chatbox : this.model.attributes });
	    	$(this.el).html(result);
	    }
	});
    
    var chatBox = new ChatBox();
    
	var Message = Backbone.Model.extend({
	    defaults: {
	        //"": new Date().toISOString()
	    },
	    initialize: function (attrs, options) {
            //ここで親子関係を作る
            var replies2 = [];
            dfd(attrs.replies, 1);
            this.replies2 = replies2
            this.set("replies2", replies2);
            function dfd(messages, depth) {
                for(var i=0;i < messages.length;i++) {
                    messages[i].depth = depth * 20;
                    replies2.push(messages[i]);
                    if(messages[i].replies) {
                        dfd(messages[i].replies, depth + 1);
                    }
                }
            }
	    },
	    validate: function (attrs) {
	        if (attrs.content.length === 0) {
	            return "empty";
	        }
	    }
	});
	
	var MessageList = Backbone.Collection.extend({
	    model: Message,
        parse : function(resp) {
            if (resp.error) {
                // エラーがあればエラーメッセージ表示
                alert(resp.error.message);
            }
            // モデルに格納するデータ部分を返す
            return resp.messages;
        },
        
	});
	var MessageView = Backbone.View.extend({
	    initialize: function (options) {
	    },
	    events: {
	        'click [name="reply"]' : "reply",
	    },
        reply : function(e) {
            var message_id = $(e.target).data('cid');
            console.log("reply to " + message_id);
            reply_target = message_id;
            chatBox.setReply(message_id)
        },
	    render : function() {
	    	var source = document.getElementById("source-a-message").innerHTML;
	    	var result = Jarty.eval(source, { message : this.model.attributes });
	    	$(this.el).html(result);
	    	return this;
	    }
	});
	var MessageListView = Backbone.View.extend({
	    initialize: function (options) {
	    	_.bindAll(this, "resetMessages", "appendMessage");

	        this.collection.bind("reset", this.resetMessages);
	        //this.collection.bind("add", this.appendMessage);
	        //this.collection.bind("remove", this.removeItem);
	    },
	    events: {
	        "click" : "click", // #foo 以下で発生する全ての click イベント
	        "click #messages" : "clickMessage", // #foo 以下の .bar で発生する click イベント
	        "click .baz" : "clickBaz"
	    },
	    click: function(e) {
	    },
	    clickMessage: function(e) {
	    	this.collection.fetch({
                data : {
                	return_type : "json"
                },
                dataType : 'json',
                reset: true/*,
                success : $.proxy(this.resetMessages, this)*/
            });
	    },
	    clickBaz: function(e) { console.log("clickBaz") },
	    appendMessage : function(model) {
            this.collection.add(model);
	    	var view = new MessageView({model: model});
	        $(this.el).append(view.render().el);
	    },
	    resetMessages : function(collection, resp) {
	    	var self = this;
	    	$(this.el).empty();
	    	if (collection.length == 0) {
		    	var source = document.getElementById("source-nomessage").innerHTML;
		    	var result = Jarty.eval(source, {});
		    	$(this.el).html(result);
		    	
	    	}else{
	    		 collection.each(function(model) {
	    			 self.appendMessage(model);
	             });
	    	}
	    }
	});
    
    window.init_chat = function(current_group_id) {
            rchatApplication.set("group_id", current_group_id);
            var chatBoxView = new ChatBoxView({
	    		el: $("#chatbox"),
	    		model : chatBox
            });
            var messageList = new MessageList();
	    	var messageListView = new MessageListView({
	    		el: $("#list"),
	    		collection : messageList
	    	});

	        socket = io.connect('http://'+location.hostname,{
				'reconnect': true,
				'reconnection delay': 500,
				'max reconnection attempts': 10
			});
            function getuser() {
                $.get("getuserinfos");
            }
            var userinfo = null;
        	socket.on('connect', function() {
        		console.log('connected');
    			socket.emit('join', {
    				group_id : rchatApplication.get("group_id")
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
}())