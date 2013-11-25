(function(){
   	function Connection(diagram, source, target) {
   		this.diagram = diagram;
		this.source = source;
		this.target = target;
		this.source.connection = this;
		this.target.connection = this;
		
		this.graphic = this.diagram.snap.line(0, 0, 0, 0);
		this.graphic.attr({
    	    fill: "#bada55",
    	    stroke: "#000",
    	    strokeWidth: 5
    	});
    	this.refresh();
	}
	Connection.prototype.refresh = function() {
		this.graphic.attr({
			x1 : this.source.getX(),
			y1 : this.source.getY(),
			x2 : this.target.getX(),
			y2 : this.target.getY()
		});
	}
	
	Connection.prototype.clearParam = function() {
		this.graphic.animate({stroke: "#000"}, 500);
	}
	Connection.prototype.setParam = function() {
		this.graphic.animate({stroke: "#0ff"}, 500);
	}
	
	window.yourcanvas.Connection = Connection;

}())