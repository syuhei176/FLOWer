package retro.pub;

class Value{
	public var type : RetroType;
	private var value : Dynamic;

	public function new(?_type, ?_value){
		this.type = _type;
		this.value = _value;
	}
}