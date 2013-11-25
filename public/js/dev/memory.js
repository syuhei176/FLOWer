(function(){
	function Memory(diagram, x, y, inputs, outputs, shape) {
		yourcanvas.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length)
		for(var i=0;i < inputs.length;i++) {
			this.input[inputs[i].name] = new yourcanvas.Role(self, "input", -60 * Math.cos(th*i), 60 * Math.sin(th*i), inputs[i].name);
		}
		for(var i=0;i < outputs.length;i++) {
			var j = i + inputs.length;
			this.output.push(new yourcanvas.Role(self, "output", -60 * Math.cos(th*j), 60 * Math.sin(th*j)));
		}

		this.memories = [];
	}
	Memory.prototype =  new yourcanvas.Node();
	
	Memory.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		var _can_exe = true;
		for(var i in this.input) {
			if(this.input[i].getParam() == null) {
				_can_exe = false;
			}
		}
		if(_can_exe == false || this.input.length == 0) {
			return false;
		}
		var param = this.input.enter.getParam();
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		var group = snap.group();
		var circle = snap.circle(0, 0, 20);
		circle.attr({
    	    fill: "#77ffff",
    	    stroke: "#fff",
    	    strokeWidth: 5
    	});
		var text = snap.text(-10, 0, param.value);
		group.append(circle);
		group.append(text);
		
		group.transform("translate("+(self.getX() + 150 - this.memories.length * 30)+","+(self.getY())+")");
		
		this.memories.push({
			value : param.value,
			group : group
		})
		
		/*
		var output = {
				value : true,
				group : group
		}
		for(var i=0;i < this.output.length;i++) {
			this.output[i].setParam(output);
		}
		*/
	}

	
	window.yourcanvas.Memory = Memory;
	
}())