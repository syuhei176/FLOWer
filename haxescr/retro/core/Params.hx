package retro.core;

import retro.pub.RetroType;
import retro.core.Input;

class Params {

	private var params:Array<Param>;
	
	public function new() {
		this.params = new Array<Param>();
	}
	public function get(name) {
		for(param in params) {
		if(param.input.name == name) {
			return param;
		}
		}
		return null;
	}
}

class Param {
	public var input:Input;
	public var value:Dynamic;
	
	public function new() {
	}
	
	public function isEmpty() {
		return false;
	}
	public function getValue() {
		return this.value;
	}
}