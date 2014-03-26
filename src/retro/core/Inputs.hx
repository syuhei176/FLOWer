package retro.core;

import retro.pub.RetroType;

@:expose("externs.Inputs")
class Inputs {

	private var inputs:Array<Input>;
	
	public function new() {
		this.inputs = new Array<Input>();
	}
	
	public function add(name:String, type:RetroType) {
		inputs.push(new Input(name, type));
	}

	public function get(name) {
		for(input in inputs) {
		if(input.name == name) {
			return input;
		}
		}
		return null;
	}
	
	public function getArray() {
		return this.inputs;
	}
}

class Input {
	public var name:String;
	public var type:RetroType;
	
	public function new(name, type) {
		this.name = name;
		this.type = type;
	}
	
	public function getName() {
		return this.name;
	}
	public function getType() {
		return this.type;
	}
}
