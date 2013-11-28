(function(){
	
	function Node(id, diagram, x, y, inputs, outputs, _option) {
		var self = this;
		if(!diagram) {
			return;
		}
		this.id = id;
		this.diagram = diagram;
		this.input = {};
		this.output = [];
		var option = _option || {};
		
		this.bound = {
				x : x,
				y : y,
				w : option.w ? option.w : 60,
				h : option.h ? option.h : 60
		}
		var snap = this.diagram.snap;
		this.group = snap.g();
		var coll = snap.circle(0, 0, this.bound.w);
    	var graphic = null;
    	this.shape = option.shape;
    	/*
    	if(shape == "button") {
    		graphic = snap.rect(0, 0, 120, 60, 12, 12);
    	}else if(shape == "logic") {
    		graphic = snap.circle(0, 0, 60);
    	}else if(shape == "output") {
    		graphic = snap.circle(0, 0, 60);
    	}else if(shape == "primitive") {
    		graphic = snap.circle(0, 0, 50);
    	}else if(shape == "memory") {
    		graphic = snap.rect(0, 0, 150, 60, 2, 2);
    	}else if(shape == "display") {
    		graphic = snap.rect(0, 0, 150, 80);
    	}else{
    		graphic = snap.circle(0, 0, 60);
    	}
    	*/
		graphic = snap.circle(0, 0, this.bound.w);
    	coll.attr({
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
    	});
		this.label = diagram.snap.text(0, 0, "");
		this.label.attr({
			"font-size" : "36px"
		});
    	this.group.append(graphic);
		this.group.append(this.label);
    	this.group.append(coll);
    	
		this.move(x, y);
    	graphic.attr({
    	    fill: "#ffffff",
    	    stroke: "#3297c9",
    	    strokeWidth: 5
    	});
    	var prev_pos = {x:0,y:0}
    	coll.drag(function(dx, dy, x, y){
        	self.move_add(dx - prev_pos.x, dy - prev_pos.y);
        	prev_pos.x = dx;
        	prev_pos.y = dy;
    	}, function(x, y) {
        	prev_pos.x = 0;
        	prev_pos.y = 0;
    	}, function() {
        	self.fireOnMoved({
        		bound : self.bound
        	});
    	});
    	coll.dblclick(function(e, x, y) {
    		if(self.dblclick) self.dblclick();
    	});
    	coll.mouseup(function(e, x, y) {
    		self.refresh();
    		if(self.mouseup) self.mouseup();
    		self.config_btn.attr({
    			"visibility" : "visible"
    		});
    		setTimeout(function() {
        		self.config_btn.attr({
        			"visibility" : "hidden"
        		});
    		}, 3000)
    	});
    	
    	Snap.load("/images/config.svg", function (f) {
    		var g = f.select("g");
        	self.group.append(g);
        	g.mouseup(function(e, x, y) {
        		if(self.dblclick) self.dblclick();
        	});
    		g.attr({
    			"visibility" : "hidden"
    		});
    		g.transform("translate("+60+","+-30+")");
    		self.config_btn = g;
    	});
	}
	
	Node.prototype.clear_execute = function(params) {
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		for(var i=0;i < this.output.length;i++) {
			if(this.output[i]) this.output[i].clearParam();
		}
		
	}
	Node.prototype.execute = function() {
		var self = this;
		self.execute2();
		return true;
	}
	Node.prototype.refresh = function() {
		var self = this;
		for(var i in self.input) {
			for(var j=0;j < self.input[i].connection.length;j++) {
				self.input[i].connection[j].refresh();
			}
		}
		for(var i in self.output) {
			if(self.output[i]) {
    			for(var j=0;j < self.output[i].connection.length;j++) {
    				self.output[i].connection[j].refresh();
    			}
			}
		}

	}
	Node.prototype.getX = function() {
		var self = this;
		return self.bound.x - self.bound.w/2;
	}
	Node.prototype.getY = function() {
		var self = this;
		return self.bound.y - self.bound.h/2;
	}
	Node.prototype.move_add_force = function(dx, dy) {
		var self = this;
		self.move_add(dx, dy);
		self.refresh();
	}
	Node.prototype.move_add = function(dx, dy) {
		var self = this;
		self.bound.x += dx;
		self.bound.y += dy;
		self.group.transform("translate("+(self.bound.x - self.bound.w/2)+","+(self.bound.y - self.bound.h/2)+")");
	}
	Node.prototype.move = function(x, y) {
		var self = this;
		self.bound.x = x;
		self.bound.y = y;
		self.group.transform("translate("+(self.bound.x - self.bound.w/2)+","+(self.bound.y - self.bound.h/2)+")");
	}
	Node.prototype.fireOnMoved = function(e) {
		console.log("fireOnMoved", e);
	}
	Node.prototype.exporter = function() {
		var self = this;
		var inputs = [];
		var outputs = [];
		for(var i in self.input) {
			inputs.push(self.input[i].exporter());
		}
		for(var i in self.output) {
			outputs.push(self.output[i].exporter());
		}
		return {
			id : this.id,
			bound : this.bound,
			//見た目
			input : inputs,
			output : outputs
			//logic
		}
	}
	
	window.retro.Node = Node;
	
}())