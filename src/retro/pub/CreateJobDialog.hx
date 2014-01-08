package retro.pub;

import js.html.*;

@:native("CreateJobDialog")
extern class CreateJobDialog {
	public function new();
	public function on(cb:String->String->Void):Void;
	public function open():Void;
}
