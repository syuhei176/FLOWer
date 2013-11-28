(function(){
	function Value(snap, value) {
		var self = this;
		this.snap = snap;
		this.group = snap.group();
		this.graphic = snap.circle(0, 0, 20);
		this.graphic.attr({
    	    fill: "#77ffff",
    	    stroke: "#fff",
    	    strokeWidth: 5
    	});
		this.text = snap.text(-5, 5, value);
		
		this.group.append(this.graphic);
		this.group.append(this.text);
		this.value = value;
		this.pos = {x:0,y:0};
		this.dest = {x:0,y:0};
		this.vec = {x:0,y:0};
		this.setPosition(0, 0);
	}
	Value.prototype.clone = function(v) {
		return new Value(this.snap, this.value);
	}
	Value.prototype.removeSelf = function(v) {
		this.group.remove();
	}
	Value.prototype.getValue = function(v) {
		return this.value;
	}
	Value.prototype.setValue = function(v) {
		this.value = v;
		this.text.attr({
			text : v,
			'font-family' : 'Comic Sans MS'
		});
	}
	Value.prototype.setPosition = function(x, y) {
		this.pos.x = x;
		this.pos.y = y;
		this.group.transform("translate("+(x)+","+(y)+")");
	}
	Value.prototype.setDestination = function(x, y, cb, i) {
		var self = this;
		this.dest.x = x;
		this.dest.y = y;
		this.vec.x = this.dest.x - this.pos.x;
		this.vec.y = this.dest.y - this.pos.y;
		var len = cal_len(this.pos, this.dest);
		this.vec.x *= 0.1;
		this.vec.y *= 0.1;
		var timerID = setInterval(function() {
			var a = self.pos.x + self.vec.x;
			var b = self.pos.y + self.vec.y;
			self.setPosition(a, b);
			if(cal_len(self.pos, self.dest) < 10) {
				clearInterval(timerID);
				cb(i);
			}
		}, 1000 / 20);
		function cal_len(p1, p2) {
			var xx = p2.x - p1.x;
			var yy = p2.y - p1.y;
			return Math.sqrt(xx*xx + yy*yy);
		}
	}
	
	window.retro.Value = Value;

}())