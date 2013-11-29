(function(){
   	function Connection(diagram, source, target) {
   		var self = this;
		for(var i=0;i < source.connection.length;i++) {
			if(source.connection[i].target.getURI() == target.getURI()) {
				return;
			}
		}
   		this.diagram = diagram;
		this.source = source;
		this.target = target;
		this.source.connection.push(this);
		this.target.connection.push(this);
		
		var snap = this.diagram.editor.getGraphicContext();
		this.graphic = snap.line(0, 0, 0, 0);
		this.graphic.attr({
    	    fill: "#bada55",
    	    stroke: "#000",
    	    strokeWidth: 5
    	});
    	this.refresh();
    	
    	this.graphic.drag(function(dx, dy) {
    		if(dx + dy > 3) {
    			self.removeSelf();
    		}
    	});
	}
	Connection.prototype.removeSelf = function() {
		for(var i=0;i < this.source.connection.length;i++) {
			if(this.source.connection[i] == this) {
				this.source.connection.splice(i, 1);
				break;
			}
		}
		for(var i=0;i < this.target.connection.length;i++) {
			if(this.target.connection[i] == this) {
				this.target.connection.splice(i, 1);
				break;
			}
		}
		this.graphic.remove();
	}
	Connection.prototype.refresh = function() {
		var xx = this.target.getX() - this.source.getX();
		var yy = this.target.getY() - this.source.getY();
		var len = Math.sqrt(xx * xx + yy * yy);
		xx = xx / len;
		yy = yy / len;
		this.graphic.attr({
			x1 : this.source.getX() + xx*30,
			y1 : this.source.getY() + yy*30,
			x2 : this.target.getX() - xx*30,
			y2 : this.target.getY() - yy*30
		});
	}
	
	Connection.prototype.clearParam = function() {
		this.graphic.animate({stroke: "#000"}, 500);
	}
	Connection.prototype.setParam = function() {
		this.graphic.animate({stroke: "#0ff"}, 500);
	}
	
	window.retro.Connection = Connection;

}())