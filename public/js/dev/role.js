(function(){
	function Role(parent, type, x, y, text) {
		var self = this;
		this.bound = {
				x : x,
				y : y,
				w : 15,
				h : 15
		}
		this.parent = parent;
		this.type = type;
		this.connection = null;
		this.group = this.parent.diagram.snap.group();
		var snap = this.parent.diagram.snap;
    	var graphic = snap.circle(0, 0, 30);
    	this.graphic = graphic;
    	
    	this.group.append(snap.text(-20, 0, text));
    	this.group.append(graphic);
		this.group.transform("translate("+(self.bound.x)+","+(self.bound.y)+")");

    	
    	this.parent.group.append(this.group);
    	if(type == "input") {
        	graphic.attr({
        	    fill: "#ffffff",
        	    "fill-opacity" : 0.3,
        	    stroke: "#3297c9",
        	    strokeWidth: 1
        	});
    		graphic.mouseup(function(e, x, y){
    			self.parent.diagram.end = self;
    			self.parent.diagram.connect();
        	});
    	}else{
        	graphic.attr({
        	    fill: "#3297c9",
        	    stroke: "#ffffff",
        	    strokeWidth: 1
        	});
    		graphic.mousedown(function(e, x, y){
    			self.parent.diagram.start = self;
        	});
    	}
    	this.value = null;
	}
	Role.prototype.getX = function() {
		var self = this;
		return self.parent.getX() + self.bound.x;
	}
	Role.prototype.getY = function() {
		var self = this;
		return self.parent.getY() + self.bound.y;
	}
	Role.prototype.clearParam = function() {
		this.graphic.animate({stroke: "#000"}, 500);
		if(this.value) {
			this.value.removeSelf();
		}
		this.value = null;
		if(this.type == "output") {
			if(this.connection) {
				this.connection.clearParam();
			}
		}
	}
	Role.prototype.setParam = function(value) {
		var self = this;
		
		this.graphic.animate({stroke: "#8ec7e4"}, 500);
		if(this.type == "output") {
			value.setPosition(self.getX(), self.getY());
			if(this.connection) {
				this.connection.setParam(value);
				value.setDestination(self.connection.target.getX(), self.connection.target.getY(), function() {
					//相手のinputに届いたら
					self.connection.target.setParam(value);
				});
			}
		}
		console.log(self.getX()+","+self.getY());
		this.value = value;
	}
	Role.prototype.getParam = function() {
		return this.value;
	}
	window.yourcanvas.Role = Role;

}())