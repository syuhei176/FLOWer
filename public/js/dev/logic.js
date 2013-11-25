(function(){
	function Logic(diagram, x, y, inputs, outputs, shape, logic_function) {
		yourcanvas.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length)
		for(var i=0;i < inputs.length;i++) {
			this.input[inputs[i].name] = new yourcanvas.Role(self, "input", -60 * Math.cos(th*i), 60 * Math.sin(th*i), inputs[i].name);
		}
		for(var i=0;i < outputs.length;i++) {
			var j = i + inputs.length;
			this.output.push(new yourcanvas.Role(self, "output", -60 * Math.cos(th*j), 60 * Math.sin(th*j)), this.output.name);
		}
		this.logic_function = logic_function;
	}
	Logic.prototype =  new yourcanvas.Node();
	
	Logic.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		
		var result = this.logic_function(this.input);
		if(result == null) {
			return false;
		}
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		
		
		console.log(result);
		//var output = new yourcanvas.Value(snap, result.value);
		
		for(var i=0;i < this.output.length;i++) {
			if(this.output[i]) this.output[i].setParam(result);
		}
	}

	
	window.yourcanvas.Logic = Logic;
	
}())