package retro.pub;

@:native("JSZip")
extern class JSZip{
	public function new();
	public function file(filename : String, data:String, ?option : Dynamic):Void;
	public function generate():String;
}