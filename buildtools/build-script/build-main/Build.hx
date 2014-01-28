

class Build{
	public static function main(){
		var args = Sys.args();
		if( args[0] == null ){
			trace("building all");
			Sys.command("neko", ["buildtools/MakeDialog.n", "codeiq-flower-modules.json", "codeiq/js/dialog.js"]);
			Sys.command("neko", ["buildtools/MakeDialog.n", "raspi-flower-modules.json", "raspberrypi/public/js/dev/dialog.js"]);
			Sys.command("haxe", ["hxmls/build.hxml"]);
		}else if( args[0] == "codeiq" ){
			trace("building codeiq");
			Sys.command("neko", ["buildtools/MakeDialog.n", "codeiq-flower-modules.json", "codeiq/js/dialog.js"]);
			Sys.command("haxe", ["hxmls/build-codeiq.hxml"]);
		}else if( args[0] == "raspberrypi" ){
			trace("building raspberrypi");
			Sys.command("neko", ["buildtools/MakeDialog.n", "raspi-flower-modules.json", "raspberrypi/public/js/dev/dialog.js"]);
			Sys.command("haxe", ["hxmls/build_raspberrypi.hxml"]);
		}
		trace("building end");
	}
}