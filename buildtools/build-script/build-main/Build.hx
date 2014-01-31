

class Build{
	public static function main(){
		var args = Sys.args();
		if( args[0] == null ){
			trace("building all");
			Sys.command("cp", ["-rf", "images", "codeiq/"]);
			Sys.command("cp", ["-rf", "images", "raspberrypi/public/"]);
			Sys.command("cp", ["-f", "css/editor.css", "codeiq/css/editor.css"]);
			Sys.command("cp", ["-f", "css/editor.css", "raspberrypi/public/stylesheets/editor.css"]);
			Sys.command("neko", ["buildtools/MakeDialog.n", "codeiq-flower-modules.json", "codeiq/js/dialog.js"]);
			Sys.command("neko", ["buildtools/MakeDialog.n", "raspi-flower-modules.json", "raspberrypi/public/js/dev/dialog.js"]);
			Sys.command("haxe", ["hxmls/build.hxml"]);
		}else if( args[0] == "codeiq" ){
			trace("building codeiq");
			Sys.command("cp", ["-rf", "images", "codeiq/"]);
			Sys.command("cp", ["-f", "css/editor.css", "codeiq/css/editor.css"]);
			Sys.command("neko", ["buildtools/MakeDialog.n", "codeiq-flower-modules.json", "codeiq/js/dialog.js"]);
			Sys.command("haxe", ["hxmls/build-codeiq.hxml"]);
		}else if( args[0] == "raspberrypi" ){
			trace("building raspberrypi");
			Sys.command("cp", ["-rf", "images", "raspberrypi/public/"]);
			Sys.command("cp", ["-f", "css/editor.css", "raspberrypi/public/stylesheets/editor.css"]);
			Sys.command("neko", ["buildtools/MakeDialog.n", "raspi-flower-modules.json", "raspberrypi/public/js/dev/dialog.js"]);
			Sys.command("haxe", ["hxmls/build_raspberrypi.hxml"]);
		}
		trace("building end");
	}
}