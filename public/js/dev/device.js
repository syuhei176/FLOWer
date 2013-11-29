(function(){
	function Device(id, diagram, x, y, inputs, outputs, shape) {
		retro.Node.apply( this, arguments );
		var self = this;
		this.input["render"] = new retro.Role(self, "input", 0, 30, "render");
		this.output["touch"] = new retro.Role(self, "output", 0, 90, "touch");
		this.tablet_render_base = null;
    	Snap.load("/images/tablet.svg", function (f) {
    		var g = f.select("g");
    		//g.transform("translate("+200+","+0+")");
        	g.click(function(){
        		
        	});
    		self.graphic_group.append(g);
    		self.tablet_render_base = g;
    	});
    	this.renderObject = {};
	}
	
	Device.prototype =  new retro.Node();
	
	Device.prototype.dblclick = function() {
		this.value = JSON.parse(window.prompt("値を入力してください。",this.value));
		if(this.value) {
			this.label.attr({
				text : this.value
			});
		}else{
			
		}
	}
	
	Device.prototype.mouseup = function(e, x, y) {
		var self = this;
		if(self.diagram.mode == retro.Diagram.MODE_RUN) {
			/*
			self.output["touch"].setParam(new retro.Value(self.diagram.editor, {
				event : e,
				x : x,
				y : y
			}));
			*/
		}
	}
	Device.prototype.mousedown = function(e, x, y) {
		var self = this;
		console.log(x - self.getX(), y - self.getY(), e);
		if(self.diagram.mode == retro.Diagram.MODE_RUN) {
			for(var i in self.output) {
				self.output[i].setParam(new retro.Value(self.diagram.editor, {
					event : e,
					x : x - self.getX(),
					y : y - self.getY()
				}));
			}
		}
	}
	Device.prototype.execute2 = function() {
		var render = this.input["render"].getParam();
		if(render) {
			var renderCommand = render.getValue();
			var snap = this.diagram.editor.getGraphicContext();
			if(renderCommand.cmd == "create") {
				var rect = snap.rect(0, 0, renderCommand.w, renderCommand.h);
				rect.transform("translate("+renderCommand.x+","+renderCommand.y+")");
				rect.attr({
					fill : renderCommand.fill ? renderCommand.fill : "black";
				});
				this.renderObject[renderCommand.id] = rect;
				this.tablet_render_base.append(rect);
			}else if(renderCommand.cmd == "remove") {
				this.renderObject[renderCommand.id].remove();
			}else if(renderCommand.cmd == "update") {
				this.renderObject[renderCommand.id].transform("translate("+renderCommand.x+","+renderCommand.y+")");
			}
		}
	}
	Device.prototype.exporter = function() {
		var exported = retro.Node.prototype.exporter.call( this, arguments );
		exported.meta = "Device";
		return exported;
	}

	
	window.retro.Device = Device;
	
}())