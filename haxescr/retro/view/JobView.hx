package retro.view;

import snap.Snap;
import retro.pub.Point2D;

class JobView{
	public var pos : Point2D;
	public var group:SnapElement;
	public var graphic:SnapElement;
	public function new(editor) {
		this.group = editor.snap.group();
		this.graphic = editor.snap.circle(150, 150, 100);
		this.graphic.attr({
				fill: "#bada55",
				stroke: "#000",
				strokeWidth: 5
				});
		this.pos = new Point2D(0, 0);
		this.setPos(0, 0);
		this.graphic.drag();
		this.group.append(this.graphic);
	}
	public function setPos(x, y) {
		pos.setX(x);
		pos.setY(y);
		this.group.transform("translate(" + pos.getX() + "," + pos.getY() + ")");
	}
	
	public static function main(){
		var load = function(_){
		};
		js.Browser.window.onload = cast load;
	}
}