package retro.model;

class InputPort extends Port {
	public var connection : Array<OutputPort>;
	
	public function new(parent, type, name){
		super(parent, type, name);
	}
	
	public function setValue(value) {
		this.value = value;
		//this.parent.act();
	}
}