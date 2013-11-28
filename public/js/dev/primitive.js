(function(){
	function Primitive(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length)
		for(var i=0;i < outputs.length;i++) {
			this.output.push(new retro.Role(self, "output", 0, 60));
		}
		this.value = true;
		this.timerID = setInterval(function(){
			self.execute();
		}, 1000);
	}
	Primitive.prototype = new retro.Node();
	
	Primitive.prototype.dblclick = function() {
		this.value = window.prompt();
	}
	
	Primitive.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		for(var i=0;i < self.output.length;i++) {
			self.output[i].setParam(new retro.Value(snap, this.value));
		}
	}
	
	Primitive.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Primitive";
		return exported;
	}
	
	window.retro.Primitive = Primitive;
	
}())