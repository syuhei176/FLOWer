package retro.pub;


enum RetroType<T>{
	REmpty;
	RString;
	RNumber;
	RBool;
	RList(type:RetroType);
	RTuple(types : Array<RetroType>);
	RData(tag : String, type : RetroType);
}




class Value{
	private var type : RetroType;
	private var valueExpr : String;

	public function new(?_type, ?_value){
		this.type = type;
		this.value = value;
	}

	public function checkType() : Bool{
		return switch (this.type) {
			case REmpty:
			this.value = "";
			case RString:

			case RNumber:
			
		};
	}
}