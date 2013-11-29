(function(){
	function Actuator(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length);
		var offset =  - Math.PI / 2;
		for(var i=0;i < inputs.length;i++) {
			this.input[inputs[i].name] = new retro.Role(self, "input", 60 * Math.cos(th*i + offset), 60 * Math.sin(th*i + offset), inputs[i].name);
		}
		this.stdout_group = diagram.editor.getGraphicContext().g();
		this.group.append(this.stdout_group);
	}
	
	Actuator.prototype =  new retro.Node();
	//Actuator.extend(retro.Node);
	
	Actuator.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.editor.getGraphicContext();
		
		var result = this.input.string.getParam();
		if(result == null) {
			return false;
		}
		
		if(this.stdout_group) {
			this.stdout_group.remove();
		}
		this.stdout_group = this.diagram.editor.getGraphicContext().g();
		this.group.append(this.stdout_group);
		
		var lines = result.getValue().split("\n");
		for(var i=0;i < lines.length;i++) {
			var line_text = snap.text(0, i * 20, lines[i]);
			this.stdout_group.append(line_text);
		}
		
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		
		for(var i=0;i < this.output.length;i++) {
			if(this.output[i]) this.output[i].setParam(result);
		}
	}
	
	Actuator.prototype.clone = function(id) {
		var inputs = [];
		var outputs = [];
		for(var key in this.input) {
			inputs.push({
				name : key
			});
		}
		for(var key in this.output) {
			outputs.push({
				name : key
			});
		}
		return new retro.Actuator(id, this.diagram, this.bound.x, this.bound.y, inputs, outputs, {});
	}
	
	Actuator.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Actuator";
		return exported;
	}
	
	window.retro.Actuator = Actuator;
	
}())