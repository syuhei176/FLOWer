package;

import retro.pub.Editor;

@:expose
class Main{
	public static function main(){
		var load = function(editorkey, id_header){
			Editor.create(editorkey, id_header);
		};
	}
	public static function init(editorkey, id_header){
			Editor.create(editorkey, id_header);
	}
}

