package retro.view;

import snap.Snap;

class JobView{
	public var x : Int;
	public var y : Int;

	public static function main(){
		var load = function(_){
			var s = new Snap("#svg");
			trace(s);
			var bigCircle = s.circle(150, 150, 100);
			bigCircle.attr({
				fill: "#bada55",
				stroke: "#000",
				strokeWidth: 5
				});
		};
		js.Browser.window.onload = cast load;
	}
}