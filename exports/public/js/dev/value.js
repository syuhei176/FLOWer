(function(){
	function Value(editor, value) {
		var self = this;
		this.editor = editor;
		this.snap = editor.getGraphicContext();
		this.group = this.snap.group();
		this.graphic = this.snap.circle(0, 0, 20);
		this.graphic.attr({
    	    fill: "#77ffff",
    	    stroke: "#fff",
    	    strokeWidth: 5
    	});
		this.text = this.snap.text(-5, 5, value);
		this.setValue(value);
		
		this.group.append(this.graphic);
		this.group.append(this.text);
		this.value = value;
		this.pos = {x:0,y:0};
		this.dest = {x:0,y:0};
		this.vec = {x:0,y:0};
		this.setPosition(0, 0);
		this.editor.addValue(this);
	}
	Value.prototype.clone = function() {
		return new Value(this.editor, this.value);
	}
	Value.prototype.removeSelf = function() {
		if(this.timerID) {
			clearInterval(this.timerID);
		}
		this.group.remove();
	}
	Value.prototype.getValue = function() {
		return this.value;
	}
	Value.prototype.setValue = function(v) {
		this.value = v;
		var text = "";
		if(typeof v == "string") {
			text = v;
		}else if(typeof v == "number") {
			text = v;
		}else if(typeof v == "bool") {
			text = v;
		}else{
			text = JSON.stringify(v);
		}
		this.text.attr({
			text : text,
			'font-family' : 'Comic Sans MS'
		});
	}
	Value.prototype.setPosition = function(x, y) {
		this.pos.x = x;
		this.pos.y = y;
		this.group.transform("translate("+(this.pos.x)+","+(this.pos.y)+")");
	}
	Value.prototype.refreshAnimation = function() {
	}
	Value.prototype.setDestination = function(x, y, target_port) {
		var self = this;
		this.dest.x = x;
		this.dest.y = y;
		this.vec.x = this.dest.x - this.pos.x;
		this.vec.y = this.dest.y - this.pos.y;
		var len = cal_len(this.pos, this.dest);
		this.vec.x *= 0.1;
		this.vec.y *= 0.1;
		this.timerID = setInterval(function() {
			var a = self.pos.x + self.vec.x;
			var b = self.pos.y + self.vec.y;
			self.setPosition(a, b);
			if(cal_len(self.pos, self.dest) < 10) {
				clearInterval(self.timerID);
				target_port.setParam(self);
			}
		}, 1000 / 10);
		function cal_len(p1, p2) {
			var xx = p2.x - p1.x;
			var yy = p2.y - p1.y;
			return Math.sqrt(xx*xx + yy*yy);
		}
	}
	
	window.retro.Value = Value;

}())
