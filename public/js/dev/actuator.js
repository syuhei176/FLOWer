(function(){
	function Actuator(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length);
		var offset =  - Math.PI / 2;
		for(var i=0;i < inputs.length;i++) {
			this.input[inputs[i].name] = new retro.Role(self, "input", 60 * Math.cos(th*i + offset), 60 * Math.sin(th*i + offset), inputs[i].name);
		}
	}
	
	Actuator.prototype =  new retro.Node();
	//Actuator.extend(retro.Node);
	
	Actuator.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		
		
		var result = this.input.string.getParam();
		if(result == null) {
			return false;
		}
		
		this.label.attr({
			text : result.getValue()
		});
		
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		
		for(var i=0;i < this.output.length;i++) {
			if(this.output[i]) this.output[i].setParam(result);
		}
	}
	
	Actuator.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Actuator";
		return exported;
	}
	
	window.retro.Actuator = Actuator;
	
}())