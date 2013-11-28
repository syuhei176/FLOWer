(function(){
	function Memory(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		this.input["enter"] = new retro.Role(self, "input", 0, 30, "enter");
		this.input["flush"] = new retro.Role(self, "input", 60, 0, "flush");
		
		this.output.push(new retro.Role(self, "output", 150, 30));

		this.memories = [];
	}
	Memory.prototype =  new retro.Node();
	
	Memory.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		
		var param = this.input.enter.getParam();
		if(param) {
			var v = new retro.Value(snap, param.value);
			this.input.enter.clearParam();
			v.setPosition((self.getX() + 120 - this.memories.length * 30), (self.getY() + 30));
			this.memories.push(v);
		}else{
			var flush = this.input.flush.getParam();
			if(flush) {
				var v = this.memories.shift();
				if(v) {
					for(var i=0;i < this.output.length;i++) {
						if(this.output[i]) this.output[i].setParam(v);
					}
					this.input.flush.clearParam();
				}
			}
		}
		
		
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
	
	Memory.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Memory";
		return exported;
	}


	
	window.retro.Memory = Memory;
	
}())