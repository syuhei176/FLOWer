package retro.pub;

import js.html.*;

@:native("RetroClient")
extern class RetroClient {
	public function new(editor_key:Dynamic);
	public function init(cb:Dynamic):Void;
	public function save_all(data:Dynamic):Void;
}
