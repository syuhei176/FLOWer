(function(){
	function Diagram(editor, model) {
		//編集作業
    	this.start = null;
    	this.end = null;
		//プログラム構造
		this.nodes = [];
		//グラフィック関係
		this.editor = editor;
		//実行処理
    	this.timerID = null;
    	//その他
    	this.mode = Diagram.MODE_STOP;
		this.importer(model);
	}
	
	Diagram.MODE_STOP = 0;
	Diagram.MODE_RUN = 1;
	
	Diagram.prototype.create_node = function(n) {
    	this.nodes.push(n);
	}
	
	Diagram.prototype.connect = function() {
		new retro.Connection(this, this.start, this.end);
	}
	
	Diagram.prototype.clear = function() {
		var self = this;
		for(var i=0;i < self.nodes.length;i++) {
			var result = self.nodes[i].clear_execute();
		}

	}
	Diagram.prototype.stop = function() {
    	this.mode = Diagram.MODE_STOP;
		clearInterval(this.timerID);
	}

	Diagram.prototype.run = function() {
		var self = this;
    	this.mode = Diagram.MODE_RUN;
		stop();
		var current_node = this.button_node;
		/*
		this.timerID = setInterval(function(){
			//step();
		}, 700);
		*/
		//requestAnimationFrame(step);
		function step() {
			requestAnimationFrame(step);
			/*
			for(var i=0;i < self.nodes.length;i++) {
				var result = self.nodes[i].execute();
			}
			*/
			/*
			var n = current_node;
			circle.transform("translate("+(n.getX())+","+(n.getY())+")");
			n.color();
			for(var i=0;i < n.output.length;i++) {
				if(n.output[i].connection) {
					current_node = n.output[i].connection.target.parent;
				}
			}
			*/
		}
	}
	
	Diagram.prototype.getNode = function(id) {
		var self = this;
		for(var i=0;i < self.nodes.length;i++) {
			if(self.nodes[i].id == id) {
				return self.nodes[i];
			}
		}
		return null;
	}
	
	Diagram.prototype.getPort = function(uri) {
		var self = this;
		var ids = uri.split(".");
		for(var i=0;i < self.nodes.length;i++) {
			console.log(self.nodes[i].id, ids[0]);
			if(self.nodes[i].id == ids[0]) {
				return self.nodes[i].input[ids[1]];
			}
		}
		return null;
	}
	
	Diagram.prototype.importer = function(model) {
		var self = this;
    	var nodes = [];
    	if(model) {
        	_.each(model.nodes, function(node) {
        		var n = null;
        		if(node.meta == "Sensor") {
        			n = new retro.Input(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {});
        			n.value = node.value;
        		}else if(node.meta == "Actuator") {
        			n = new retro.Actuator(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {});
        		}else if(node.meta == "Logic") {
        			n = new retro.Logic(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}, node.logic_function_script, node.name);
        			//n.logic_function_script = node.logic_function_script;
        		}else if(node.meta == "Memory") {
        			n = new retro.Memory(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}, node.logic_function_script);
        			//n.logic_function_script = node.logic_function_script;
        		}else if(node.meta == "Primitive") {
        			n = new retro.Primitive(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {});
        		}else if(node.meta == "Device") {
        			n = new retro.Device(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {w:320,h:480,shape:"rect"});
        		}
    			self.nodes.push(n);
        	});
        	_.each(model.nodes, function(node) {
        		var n = self.getNode(node.id);
            	_.each(node.output, function(output) {
                	_.each(output.connections, function(uri) {
                		var target = self.getPort(uri);
                		if(target) {
                    		new retro.Connection(self, n.output[output.name], target);
                		}else{
                			alert("targetがnullだよ！こんなこともあるんだね！" + uri);
                		}
                	});
            	});
        	});
    	}else{
        	var button1 = new retro.Input(idgenerator.genNewId(), this, 400, 150, [],[{
        		name : "output",
        		type : "number"
        	}], "button");
        	var button2 = new retro.Input(idgenerator.genNewId(), this, 500, 150, [],[{
        		name : "output",
        		type : "number"
        	}], "button");
        	var button3 = new retro.Input(idgenerator.genNewId(), this, 500, 150, [],[{
        		name : "output",
        		type : "number"
        	}], "button");
        	var actuator = new retro.Actuator(idgenerator.genNewId(), this, 450, 200, [{
        		name : "string",
        		type : "number"
        	}],[], {});
        	var device = new retro.Device(idgenerator.genNewId(), this, 500, 150, [],[{
        		name : "output",
        		type : "number"
        	}], {w:320,h:480,shape:"rect",image:"tablet"});
        	var memory1 = new retro.Memory(idgenerator.genNewId(), this, 350, 300, [{
    			name : "enter",
    			type : "number"
    		},{
    			name : "flush",
    			type : "number"
    				}], [{
    	    			name : "output",
    	    			type : "number"
    				}], "memory", "if(enter) {"+
        			  "var v = new retro.Value(this.diagram.editor, enter.getValue());"+
        			  "v.setPosition((this.getX() + 120 - this.memories.length * 30), (this.getY() + 30));"+
        			  "this.memories.push(v);"+
        			"}else{"+
        			  "var flush = this.input.flush.getParam();"+
        			  "if(flush) {"+
        			    "var v = this.memories.shift();"+
        			    "if(v) {"+
        			      "return {output : v.getValue()}"+
        			    "}"+
        			  "}"+
        			"}");

        	this.nodes.push(button1);
        	this.nodes.push(button2);
        	this.nodes.push(button3);
        	this.nodes.push(actuator);
        	this.nodes.push(device);
        	this.nodes.push(memory1);
    	}
	}
	Diagram.prototype.exporter = function() {
    	var nodes = [];
    	_.each(this.nodes, function(node) {
    		console.log(node);
    		nodes.push(node.exporter());
    	});
    	return {nodes : nodes};
	}
	
	window.retro.Diagram = Diagram;
	
}())
