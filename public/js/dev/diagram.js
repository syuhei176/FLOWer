(function(){
	function Diagram(snap) {
		this.snap = snap;
		this.nodes = [];
    	var node1 = new yourcanvas.Logic(this, 150, 150, [{
    		name : "input1",
    		type : "number"
    	},{
    		name : "input2",
    		type : "number"
    	}],[{
    		name : "output",
    		type : "number"
    	}], "logic", function(input){
    		var p1 = input["input1"].getParam();
    		var p2 = input["input2"].getParam();
    		if(p1 && p2) {
    			console.log(p1, p2);
        		return new yourcanvas.Value(snap, p1.getValue() + p2.getValue());
    		}else{
    			return null;
    		}
    	});
    	var node2 = new yourcanvas.Logic(this, 150, 300, [{
    		name : "input",
    		type : "number"
    	}],[{
    		name : "output",
    		type : "number"
    	}], "logic", function(input){
    		return input["input"].getParam();
    	});
    	var node3 = new yourcanvas.Input(this, 400, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var node5 = new yourcanvas.Input(this, 500, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var node4 = new yourcanvas.Logic(this, 300, 300, [{
    		name : "triger",
    		type : "number"
    	},{
    		name : "source",
    		type : "number"
    	}],[{
    		name : "dest",
    		type : "number"
    	}], "logic", function(input) {
    		if(input["triger"].getParam()) {
    			return input["source"].getParam();
    		}else{
    			return null;
    		}
    	});
    	var primitive1 = new yourcanvas.Primitive(this, 320, 120, [], [{
    		name : "output",
    		type : "number"
    			}], "primitive");
    	var memory1 = new yourcanvas.Memory(this, 350, 300, [{
    			name : "enter",
    			type : "number"
    		},{
    			name : "flush",
    			type : "number"
    				}], [], "memory", function(input) {
    		if(input["flush"].getParam()) {
    			return input["source"].getParam();
    		}else{
        		if(input["enter"].getParam()) {
        			
        		}
    			return null;
    		}
    	});
    	this.nodes.push(node1);
    	this.nodes.push(node2);
    	this.nodes.push(node3);
    	this.nodes.push(node4);
    	this.nodes.push(node5);
    	this.nodes.push(primitive1);
    	this.nodes.push(memory1);
    	this.button_node = node3;
    	this.start = null;
    	this.end = null;
    	this.timerID = null;
    	this.mode = Diagram.MODE_STOP;
	}
	Diagram.MODE_STOP = 0;
	Diagram.MODE_RUN = 1;
	
	Diagram.prototype.connect = function() {
		new yourcanvas.Connection(this, this.start, this.end);
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
		this.timerID = setInterval(function(){
			step();
		}, 1000);
		function step() {
			for(var i=0;i < self.nodes.length;i++) {
				var result = self.nodes[i].execute();
			}
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

	
	window.yourcanvas.Diagram = Diagram;

}())