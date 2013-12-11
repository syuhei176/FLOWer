package retro.core;

import retro.pub.RetroType;
import retro.model.Value;
import retro.core.Input;

class Params {

	private var params:Array<Param>;
	
	public function new() {
		this.params = new Array<Param>();
	}
	public function get(name) {
		for(param in params) {
		if(param.name == name) {
			return param;
		}
		}
		return null;
	}
	public function add(name, value) {
		this.params.push(new Param(name, value));
	}
}

class Param {
	public var name:String;
	public var value:Value;
	
	public function new(name, value) {
		this.name = name;
		this.value = value;
	}
	
	public function isEmpty() {
		return value == null;
	}
	public function getValue() {
		return this.value.value;
	}
}