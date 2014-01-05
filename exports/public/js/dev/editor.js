(function(){
	function Editor(selector, model) {
		var self = this;
		this.snap = Snap(selector);
    	this.diagram = new retro.Diagram(self, model);
    	this.values = [];
    	self.control_group = this.snap.g();
    	self.mode = "edit";
    	Snap.load("/images/play.svg", function (f) {
    		var g = f.select("svg");
        	g.click(function(){
        		if(self.mode == "edit") {
        			self.mode = "run";
        			self.run();
        			g.select("polygon[fill='#ffffff']").attr({
                	    fill: "#ff0000"
                	});
        		}else{
        			self.mode = "edit";
        			self.stop();
        			g.select("polygon[fill='#ff0000']").attr({
                	    fill: "#ffffff"
                	});
        		}
        	});
        	self.control_group.append(g);
    	});
    	Snap.load("/images/create.svg", function (f) {
    		var g = f.select("g");
    		g.transform("translate("+100+","+0+")");
        	g.click(function(){
        		var id = idgenerator.genNewId();
        		self.diagram.create_node(new retro.Logic(id, self.diagram, 200, 200, [{
            		name : "input",
            		type : "number"
            	}],[{
            		name : "output",
            		type : "number"
            	}], "logic", function(input){
        			if(input) {
        				return {output : input.getValue()}
        			}
            	}, "そのまま"));
        	});
        	self.control_group.append(g);
    	});
    	Snap.load("/images/save.svg", function (f) {
    		var g = f.select("g");
    		g.transform("translate("+200+","+0+")");
        	g.click(function(){
        		window.retroClient.exporter();
        	});
        	self.control_group.append(g);
    	});
    	$(window).scroll(function(){
    		self.control_group.transform("translate("+0+","+$(window).scrollTop()+")");
    	});
	}
	Editor.prototype.addValue = function(v) {
		var self = this;
		self.values.push(v);
	}
	Editor.prototype.run = function() {
		var self = this;
		self.diagram.run();
	}
	Editor.prototype.stop = function() {
		var self = this;
		self.diagram.clear();
		self.diagram.stop();
		for(var i=0;i < self.values.length;i++) {
			self.values[i].removeSelf();
		}
	}
	Editor.prototype.getGraphicContext = function() {
		return this.snap;
	}
	
	window.retro.Editor = Editor;

}())
