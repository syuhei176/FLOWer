(function(){
	function Logic(id, diagram, x, y, inputs, outputs, shape, logic_function, name) {
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

		this.logic_function = logic_function;
		this.logic_function_script = cut_first_and_last_line(this.logic_function.toString());
		function cut_first_and_last_line(str) {
			var lines = str.split("\n");
			return lines.slice(1, lines.length - 1).join("\n");
		}
	}
	Logic.prototype =  new retro.Node();
	
	Logic.prototype.dblclick = function() {
		var self = this;
		var input_html = [];
		var output_html = [];
		for(var key in this.input) {
			input_html.push('<input name="input-name" type="text" value="'+key+'"/>');
		}
		input_html.push('<div id="space-input"></div>')
		for(var key in this.output) {
			output_html.push('<input name="output-name" type="text" value="'+key+'"/>');
		}
		output_html.push('<div id="space-output"></div>')
		w2popup.open({
			title   : 'Logic',
			body    : '<textarea id="script" cols="50" rows="10" >'+this.logic_function_script+'</textarea><br>' +
			'<input id="title" type="text" value="'+this.label.attr('text')+'"/><br>' +
			input_html.join('<br>') +"<br>"+ output_html.join('<br>'),
			buttons : '<button id="addinput">input</button><button id="addoutput">output</button><button id="button">OK</button>'
		});
		$("#addinput").click(function() {
			var key = "test";
			$("#space-input").append('<input name="input-name" type="text" value="'+key+'"/>')
		});
		$("#addoutput").click(function() {
			var key = "test";
			$("#space-output").append('<input name="output-name" type="text" value="'+key+'"/>')
		});
		$("#button").click(function() {
			var script = $("#script").val();
			var title = $("#title").val();
			self.name = title;
			self.label.attr({
				"text" : title
			});
			if(script) {
				self.logic_function_script = script;
				self.logic_function = new Function("input", "snap", script);
			}else{
				
			}
			
			for(var i in self.input) {
				self.input[i].removeSelf();
			}
			self.input = {};
			for(var i in self.output) {
				self.output[i].removeSelf();
			}
			self.output = {};
			
			var input_names = $('[name="input-name"]');
			var output_names = $('[name="output-name"]');
			
			var th = 2 * Math.PI / (input_names.length + output_names.length);
			var offset =  - Math.PI / 2;
			
			for(var i=0;i < input_names.length;i++) {
				if(input_names[i].value.match(/^\w+$/)) {
					self.input[input_names[i].value] = new retro.Role(self, "input", 60 * Math.cos(th*i + offset), 60 * Math.sin(th*i + offset), input_names[i].value);
				}else{
					
				}
			}
			for(var i=0;i < output_names.length;i++) {
				if(output_names[i].value.match(/^\w+$/)) {
					var j = i + input_names.length;
					self.output[output_names[i].value] = new retro.Role(self, "output", 60 * Math.cos(th*j + offset), 60 * Math.sin(th*j + offset), output_names[i].value);
				}else{
					
				}
			}
		});
	}
	
	Logic.prototype.execute2 = function() {
		var self = this;
		var snap = this.diagram.snap;
		
		var result = this.logic_function(this.input, snap);
		if(result == null) {
			return false;
		}
		for(var i in this.input) {
			this.input[i].clearParam();
		}
		for(var key in result) {
			if(this.output[key]) {
				this.output[key].setParam(result[key]);
			}
		}
	}
	
	Logic.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.logic_function_script = this.logic_function_script;
		exported.name = this.name;
		exported.meta = "Logic";
		return exported;
	}
	
	window.retro.Logic = Logic;
	
}())