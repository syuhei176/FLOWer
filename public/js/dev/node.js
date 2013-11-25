(function(){
	function Node(diagram, x, y, inputs, outputs, shape) {
		var self = this;
		if(!diagram) {
			return;
		}
		this.diagram = diagram;
		this.input = {};
		this.output = [];
		
		this.bound = {
				x : x,
				y : y,
				w : 60,
				h : 60
		}
		var snap = this.diagram.snap;
		this.group = snap.group();
		
    	var graphic = null;
    	this.shape = shape;
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
    	}else{
    		graphic = snap.circle(0, 0, 60);
    	}
    	this.group.append(graphic);
    	
		this.move(x, y);
    	graphic.attr({
    	    fill: "#ffffff",
    	    stroke: "#3297c9",
    	    strokeWidth: 5
    	});
    	var prev_pos = {x:0,y:0}
    	graphic.drag(function(dx, dy, x, y){
    		console.log(dx, dy);
        	self.move_add(dx - prev_pos.x, dy - prev_pos.y);
        	prev_pos.x = dx;
        	prev_pos.y = dy;
    	}, function(x, y) {
        	prev_pos.x = 0;
        	prev_pos.y = 0;
    	});
    	graphic.dblclick(function(e, x, y) {
    		if(self.dblclick) self.dblclick();
    	});
    	graphic.mouseup(function(e, x, y) {
    		for(var i=0;i < self.input.length;i++) {
    			if(self.input[i].connection) {
    				self.input[i].connection.refresh();
    			}
    		}
    		for(var i=0;i < self.output.length;i++) {
    			if(self.output[i].connection) {
        			self.output[i].connection.refresh();
    			}
    		}
    		if(self.mouseup) self.mouseup();
    	});
	}
	
	Node.prototype.color = function() {
		this.group.attr({
    	    fill: "#ffffff",
    	    stroke: "#000",
    	    strokeWidth: 5
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
	Node.prototype.execute = function(params) {
		var self = this;
		self.execute2();
		return true;
	}
	Node.prototype.refresh = function() {
		
	}
	Node.prototype.getX = function() {
		var self = this;
		return self.bound.x - self.bound.w/2;
	}
	Node.prototype.getY = function() {
		var self = this;
		return self.bound.y - self.bound.h/2;
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
	
	window.yourcanvas.Node = Node;
	
}())