(function(){
	function Input(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		for(var i=0;i < outputs.length;i++) {
			this.output[outputs[i].name] = new retro.Role(self, "output", 60, 60);
		}
		this.value = null;
		this.label = diagram.editor.snap.text(0, 0, "");
		this.group.append(this.label);
	}
	
	Input.prototype =  new retro.Node();
	
	Input.prototype.dblclick = function() {
		this.value = JSON.parse(window.prompt("値を入力してください。", JSON.stringify(this.value)));
		if(this.value) {
			this.label.attr({
				text : this.value
			});
		}else{
			
		}
	}
	
	Input.prototype.mouseup = function() {
		var self = this;
		if(self.diagram.mode == retro.Diagram.MODE_RUN) {
			for(var i in self.output) {
				self.output[i].setParam(new retro.Value(self.diagram.editor, this.value));
			}

		}

	}
	Input.prototype.execute2 = function() {
	}
	Input.prototype.clone = function(id) {
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
		return new retro.Input(id, this.diagram, this.bound.x, this.bound.y, inputs, outputs, {});
	}
	Input.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Sensor";
		exported.value = this.value;
		return exported;
	}

	
	window.retro.Input = Input;
	
}())
