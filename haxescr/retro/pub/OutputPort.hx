package retro.pub;

import haxe.Timer;
import retro.view.PathView;

class OutputPort extends retro.pub.Port {
	public var connection : Array<InputPort>;
	
	public function new(parent, type, name){
		super(parent, type, name);
	}
	
	public function connectToInputPort(port:InputPort) {
		this.connection.push(port);
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

