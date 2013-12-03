package retro.pub;


enum PortType{
	Input;
	Output;
}

class Port{
	public var parent : Job;
	public var type : PortType;
	public var text : String;
	public var connection : Array<Port>;
	public var value : RetroTypeValue;

	public function new(parent, type, text){
		this.parent = parent;
		this.type = type;
		this.text = text;
		this.connection = [];
	}

	public function setParam(value){
		switch ( this.type) {
			case Input:
			
			case Output:
		}

	}

	public function getParam(value){
		return this.value;
	}

}