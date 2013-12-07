package retro.view;

import snap.Snap;
import retro.pub.Point2D;

class JobView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	
	
	
	public function new(editor) {
		this.group = editor.snap.group();
		this.graphic = editor.snap.circle(0, 0, 80);
		var coll = editor.snap.circle(0, 0, 80);
		this.graphic.attr({
				fill: editor.thema.main_color,
				stroke: editor.thema.line_color,
				strokeWidth: 4
				});
		this.pos = new Point2D(0, 0);
		this.prev_pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    	    fill: "#ffff00",
    	    "fill-opacity" : 0.1,
    	});
		coll.drag(function(dx, dy, x, y){
        	this.addPos(dx - this.prev_pos.getX(), dy - this.prev_pos.getY());
        	this.prev_pos.setX(dx);
        	this.prev_pos.setY(dy);
    	}, function(x, y) {
    		this.prev_pos.setX(0);
    		this.prev_pos.setY(0);
    	}, function(x, y) {
    	
    	});
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	public function addPos(x, y) {
		pos.setX(pos.getX() + x);
		pos.setY(pos.getY() + y);
		this.group.transform("translate(" + pos.getX() + "," + pos.getY() + ")");
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