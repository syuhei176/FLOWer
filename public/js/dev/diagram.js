(function(){
	function Diagram(snap, model) {
		this.snap = snap;
		this.nodes = [];
		this.importer(model);
		/*
    	var node1 = new retro.Logic(this, 150, 150, [{
    		name : "input1",
    		type : "number"
    	},{
    		name : "input2",
    		type : "number"
    	}],[{
    		name : "output",
    		type : "number"
    	}], {
    		w : 60,
    		h : 60
    	}, function(input){
    		var p1 = input["input1"].getParam();
    		var p2 = input["input2"].getParam();
    		if(p1 && p2) {
        		return {output : new retro.Value(snap, Number(p1.getValue()) + Number(p2.getValue()))};
    		}else{
    			return null;
    		}
    	}, "+");
    	var node2 = new retro.Logic(this, 150, 300, [{
    		name : "input",
    		type : "number"
    	}],[{
    		name : "output",
    		type : "number"
    	}], "logic", function(input){
    		var p = input["input"].getParam();
    		if(p) {
        		return {output : new retro.Value(snap, Number(p.getValue()) * 2)};
    		}else{
    			return null;
    		}
    	}, "×２");
    	var button1 = new retro.Input(this, 400, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var button2 = new retro.Input(this, 500, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var button3 = new retro.Input(this, 500, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var button4 = new retro.Input(this, 500, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var button5 = new retro.Input(this, 500, 150, [],[{
    		name : "output",
    		type : "number"
    	}], "button");
    	var node3 = new retro.Logic(this, 300, 300, [{
    		name : "triger",
    		type : "number"
    	},{
    		name : "source",
    		type : "number"
    	}],[{
    		name : "dest1",
    		type : "number"
    	},{
    		name : "dest2",
    		type : "number"
    	}], "logic", function(input) {
    		var triger = input["triger"].getParam();
    		var source = input["source"].getParam();
    		if(source) {
        		if(triger) {
        			return {dest1 : source.clone()};
        		}else{
        			return {dest2 : source.clone()};
        		}
    		}else{
    			return null;
    		}
    	});
    	var hub1 = new retro.Logic(this, 300, 300, [{
    		name : "dx",
    		type : "number"
    	},{
    		name : "dy",
    		type : "number"
    	}],[], "logic", function(input, snap) {
    		var param_dx = input["dx"].getParam();
    		var param_dy = input["dy"].getParam();
    		if(param_dx && param_dy) {
    			this.move_add_force(Number(param_dx.getValue()), Number(param_dy.getValue()));
        		return {"dammy" : new retro.Value(snap, null)};
    		}else{
    			return null;
    		}
    	});
    	var primitive1 = new retro.Primitive(this, 320, 120, [], [{
    		name : "output",
    		type : "number"
    			}], "primitive");
    	var memory1 = new retro.Memory(this, 350, 300, [{
    			name : "enter",
    			type : "number"
    		},{
    			name : "flush",
    			type : "number"
    				}], [{
    	    			name : "output",
    	    			type : "number"
    				}], "memory", function(input) {
    		if(input["flush"].getParam()) {
    			return input["source"].getParam();
    		}else{
        		if(input["enter"].getParam()) {
        			
        		}
    			return null;
    		}
    	});
    	var memory2 = new retro.Memory(this, 350, 300, [{
			name : "enter",
			type : "number"
		},{
			name : "flush",
			type : "number"
				}], [{
	    			name : "output",
	    			type : "number"
				}], "memory", function(input) {
		if(input["flush"].getParam()) {
			return input["source"].getParam();
		}else{
    		if(input["enter"].getParam()) {
    			
    		}
			return null;
		}
		});
		*/
    	/*
    	var and1 = new retro.Logic(this, 400, 300, [{
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
        		return new retro.Value(snap, Number(p1.getValue()) & Number(p2.getValue()));
    		}else{
    			return null;
    		}
    	}, "and");
    	var or1 = new retro.Logic(this, 400, 320, [{
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
        		return new retro.Value(snap, Number(p1.getValue()) | Number(p2.getValue()));
    		}else{
    			return null;
    		}
    	}, "or");
    	var not1 = new retro.Logic(this, 400, 320, [{
    		name : "input1",
    		type : "number"
    	}],[{
    		name : "output",
    		type : "number"
    	}], "logic", function(input){
    		var p1 = input["input1"].getParam();
    		if(p1) {
        		return new retro.Value(snap, !Number(p1.getValue()));
    		}else{
    			return null;
    		}
    	}, "not");
    	*/
		/*
    	var display = new retro.Actuator(this, 320, 120, [{
    		name : "string",
    		type : "number"
    	}], [], "display");
    	this.nodes.push(node1);
    	this.nodes.push(node2);
    	this.nodes.push(node3);
    	this.nodes.push(hub1);
    	this.nodes.push(button1);
    	this.nodes.push(button2);
    	this.nodes.push(button3);
    	this.nodes.push(button4);
    	this.nodes.push(button5);
    	this.nodes.push(primitive1);
    	this.nodes.push(memory1);
    	this.nodes.push(memory2);
    	this.nodes.push(display);
    	//this.nodes.push(and1);
    	//this.nodes.push(or1);
    	//this.nodes.push(not1);
    	this.button_node = node3;
    	*/
    	this.start = null;
    	this.end = null;
    	this.timerID = null;
    	this.mode = Diagram.MODE_STOP;
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
		this.timerID = setInterval(function(){
			//step();
		}, 700);
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

	Diagram.prototype.importer = function(model) {
		var self = this;
    	var nodes = [];
    	if(model) {
        	_.each(model.nodes, function(node) {
        		if(node.meta == "Sensor") {
        			self.nodes.push(new retro.Input(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}));
        		}else if(node.meta == "Actuator") {
        			self.nodes.push(new retro.Actuator(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}));
        		}else if(node.meta == "Logic") {
        			var l = new retro.Logic(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}, new Function("input", "snap", node.logic_function_script), node.name);
        			l.logic_function_script = node.logic_function_script;
        			self.nodes.push(l);
        		}else if(node.meta == "Memory") {
        			var l = new retro.Memory(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}, new Function("input", "snap", node.logic_function_script));
        			l.logic_function_script = node.logic_function_script;
        			self.nodes.push(l);
        		}else if(node.meta == "Primitive") {
        			self.nodes.push(new retro.Primitive(node.id, self, node.bound.x, node.bound.y, node.input, node.output, {}));
        		}
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
        	var memory1 = new retro.Memory(idgenerator.genNewId(), this, 350, 300, [{
    			name : "enter",
    			type : "number"
    		},{
    			name : "flush",
    			type : "number"
    				}], [{
    	    			name : "output",
    	    			type : "number"
    				}], "memory", function(input) {
    		if(input["flush"].getParam()) {
    			return input["source"].getParam();
    		}else{
        		if(input["enter"].getParam()) {
        			
        		}
    			return null;
    		}
    	});

        	this.nodes.push(button1);
        	this.nodes.push(button2);
        	this.nodes.push(button3);
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
