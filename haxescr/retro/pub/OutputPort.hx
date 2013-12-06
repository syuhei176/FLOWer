package retro.pub;

import haxe.Timer;

class OutputPort extends retro.pub.Port {
	public var connection : Array<InputPort>;
	
	public function new(port:retro.pub.Port){
		super(port.parent, port.type, port.name);
	}
	
	public function setValue(value) {
		var timer:Timer = new Timer(1000);
		timer.run = function() {
			for(c in this.connection) {
				c.setValue(value);
			}
		}
		return;
	}
}

