(function(){
	function Subsystem(id, diagram, x, y, inputs, outputs, shape, name) {
		retro.Node.apply( this, arguments );
		var self = this;
		var th = 2 * Math.PI / (inputs.length + outputs.length);
		var offset =  - Math.PI / 2;
		for(var i=0;i < inputs.length;i++) {
			this.input[inputs[i].name] = new retro.Role(self, "input", 60 * Math.cos(th*i + offset), 60 * Math.sin(th*i + offset), inputs[i].name);
		}
		for(var i=0;i < outputs.length;i++) {
			var j = i + inputs.length;
			this.output[outputs[i].name] = new retro.Role(self, "output", 60 * Math.cos(th*j + offset), 60 * Math.sin(th*j + offset), outputs[i].name);
		}
		
		if(name) {
			self.label.attr({
				"text" : name
			});
		}
	}
	Subsystem.prototype =  new retro.Node();
	
	Subsystem.prototype.dblclick = function() {
		var self = this;
		this.preview_win = window.open("","neww","width="+window.screen.width+",height="+window.screen.height+",menubar=no,toolbar=no,location=no,status=no");
		this.preview_win.document.write('<svg id="svg" width="1024px" height="1024px" style="font-family:arial black; user-select: none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"></svg>');
    	var snap = Snap($(this.preview_win).find("#svg"));
    	var diagram = new retro.Diagram(snap, null);
	}
	
	Subsystem.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		/*
		var params = [snap];
		for(var key in this.input) {
			params.push(this.input[key].getParam());
		}
		var result = this.logic_function.apply(this, params);
		if(result == null) {
			return false;
		}
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		for(var key in result) {
			this.output[key].setParam(new retro.Value(snap, result[key]));
		}
		*/
	}
	
	Subsystem.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.name = this.name;
		exported.meta = "Subsystem";
		return exported;
	}
	
	window.retro.Subsystem = Subsystem;
	
}())