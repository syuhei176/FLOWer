(function(){
	function Role(parent, type, x, y, text) {
		var self = this;
		this.bound = {
				x : x,
				y : y,
				w : 15,
				h : 15
		}
		this.name = text;
		this.parent = parent;
		this.type = type;
		this.connection = [];
		this.group = this.parent.diagram.snap.group();
		var snap = this.parent.diagram.snap;
    	var graphic = snap.circle(0, 0, 30);
    	this.graphic = graphic;
    	var text_element = snap.text(-20, 0, text);
    	var coll = snap.circle(0, 0, 30);
    	this.group.append(graphic);
    	this.group.append(text_element);
    	this.group.append(coll);
		this.group.transform("translate("+(self.bound.x)+","+(self.bound.y)+")");
    	
    	this.parent.group.append(this.group);
    	if(type == "input") {
        	graphic.attr({
        	    fill: "#ffffff",
        	    stroke: "#3297c9",
        	    strokeWidth: 1
        	});
        	coll.attr({
        	    fill: "#ffffff",
        	    "fill-opacity" : 0,
        	});
        	coll.mouseup(function(e, x, y){
    			self.parent.diagram.end = self;
    			self.parent.diagram.connect();
        	});
    	}else{
        	graphic.attr({
        	    fill: "#3297c9",
        	    stroke: "#ffffff",
        	    strokeWidth: 1
        	});
        	coll.attr({
        	    fill: "#ffffff",
        	    "fill-opacity" : 0,
        	});
        	coll.mousedown(function(e, x, y){
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
			for(var i=0;i < this.connection.length;i++) {
				this.connection[i].clearParam();
			}
		}
	}
	Role.prototype.setParam = function(value) {
		var self = this;
		this.graphic.animate({stroke: "#8ec7e4"}, 500);
		if(this.type == "output") {
			value.setPosition(self.getX(), self.getY());
			for(var i=0;i < this.connection.length;i++) {
				var v = value.clone();
				v.setPosition(self.getX(), self.getY());
				this.connection[i].setParam(v);
				v.setDestination(self.connection[i].target.getX(), self.connection[i].target.getY(), function(i) {
					//相手のinputに届いたら
					self.connection[i].target.setParam(v);
				}, i);
			}
			value.removeSelf();
		}else if(this.type == "input"){
			if(this.value) {
				this.value.removeSelf();
			}
			this.value = value;
			//wake node up
			this.parent.execute();
		}
	}
	Role.prototype.getParam = function() {
		return this.value;
	}
	Role.prototype.removeSelf = function() {
		for(var i=0;i < this.connection.length;i++) {
			this.connection[i].removeSelf();
		}
		if(this.value) {
			this.value.removeSelf();
		}
		this.group.remove();
	}
	
	Role.prototype.exporter = function() {
		
		return {
			name : this.name
		}
	}
	
	window.retro.Role = Role;

}())