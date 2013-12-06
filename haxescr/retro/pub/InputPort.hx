package retro.pub;

class InputPort extends retro.pub.Port {
	public var connection : Array<OutputPort>;
	
	public function new(port:retro.pub.Port){
		super(port.parent, port.type, port.name);
	}
	
	public function setValue(value) {
		this.value = value;
		//this.parent.act();
	}
}