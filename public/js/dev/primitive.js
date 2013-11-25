(function(){
	function Primitive(diagram, x, y, inputs, outputs, shape) {
		yourcanvas.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length)
		for(var i=0;i < outputs.length;i++) {
			this.output.push(new yourcanvas.Role(self, "output", 0, 60));
		}
		this.value = true;
	}
	Primitive.prototype = new yourcanvas.Node();
	
	Primitive.prototype.dblclick = function() {
		this.value = window.prompt();
	}
	
	Primitive.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		for(var i=0;i < self.output.length;i++) {
			self.output[i].setParam(new yourcanvas.Value(snap, this.value));
		}
	}
	
	window.yourcanvas.Primitive = Primitive;
	
}())