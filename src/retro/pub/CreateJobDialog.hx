package retro.pub;

import js.html.*;

@:native("CreateJobDialog")
extern class CreateJobDialog {
	public function new();
	public function on(cb:String->String->Int->Int->Void):Void;
	public function onClose(cb:Void->Void) : Void;
	public function open():Void;
}
