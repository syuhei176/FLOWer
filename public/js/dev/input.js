(function(){
	function Input(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		for(var i=0;i < outputs.length;i++) {
			this.output.push(new retro.Role(self, "output", 60, 60));
		}
		this.value = null;
		this.label = diagram.snap.text(0, 0, "");
		this.group.append(this.label);
	}
	
	Input.prototype =  new retro.Node();
	
	Input.prototype.dblclick = function() {
		this.value = window.prompt("値を入力してください。",this.value);
		if(this.value) {
			this.label.attr({
				text : this.value
			});
		}else{
			
		}
	}
	
	Input.prototype.mouseup = function() {
		var self = this;
		var snap = this.diagram.snap;
		if(self.diagram.mode == retro.Diagram.MODE_RUN) {
			for(var i=0;i < self.output.length;i++) {
				self.output[i].setParam(new retro.Value(snap, this.value));
			}

		}

	}
	Input.prototype.execute2 = function() {
	}
	Input.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Sensor";
		return exported;
	}

	
	window.retro.Input = Input;
	
}())