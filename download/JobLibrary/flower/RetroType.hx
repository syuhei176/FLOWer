package flower;

enum RetroType{
	REmpty;
	RString;
	RNumber;
	RBool;
	RList(type:RetroType);
	RTuple(types : Array<RetroType>);
	RUnknown(id : Int);
}