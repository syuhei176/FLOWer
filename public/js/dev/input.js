(function(){
	function Input(diagram, x, y, inputs, outputs, shape) {
		yourcanvas.Node.apply( this, arguments );
		var self = this;
		for(var i=0;i < outputs.length;i++) {
			this.output.push(new yourcanvas.Role(self, "output", 60, 60));
		}
		this.value = null;
		this.label = diagram.snap.text(0, 0, "");
		this.group.append(this.label);
	}
	
	Input.prototype =  new yourcanvas.Node();
	
	Input.prototype.dblclick = function() {
		this.value = window.prompt("値を入力してください。",this.value);
		this.label.attr({
			text : this.value
		});
	}

	Input.prototype.mouseup = function() {
		var self = this;
		var snap = this.diagram.snap;
		if(self.diagram.mode == yourcanvas.Diagram.MODE_RUN) {
			for(var i=0;i < self.output.length;i++) {
				self.output[i].setParam(new yourcanvas.Value(snap, this.value));
			}

		}

	}
	Input.prototype.execute2 = function() {
	}
	
	window.yourcanvas.Input = Input;
	
}())