package retro.pub;


enum RetroType{
	REmpty;
	RString;
	RNumber;
	RBool;
	RList(type:RetroType);
	RTuple(types : Array<RetroType>);
	RUnknown(id : Int);
}

class RetroTypeChecker{
	public static function check(type1 : RetroType, type2 : RetroType) : Bool{
		return true;
	}
}