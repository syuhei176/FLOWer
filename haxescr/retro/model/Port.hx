package retro.model;

import retro.pub.RetroType;

class Port{
	public var parent : Job;
	public var type : RetroType;
	public var value : Dynamic;
	public var name : String;

	public function new(parent, type, name){
		this.parent = parent;
		this.type = type;
		this.name = name;
	}
	
	public function getName() {
		return this.name;
	}
	public function getParentJob() {
		return this.parent;
	}
}