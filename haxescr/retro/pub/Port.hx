package retro.pub;

class Port{
	public var parent : Job;
	public var type : RetroType;
	public var value : Dynamic;
	public var name : String;
	public var connection : Array<Port>;

	public function new(parent, type, name){
		this.parent = parent;
		this.type = type;
		this.name = name;
	}
}