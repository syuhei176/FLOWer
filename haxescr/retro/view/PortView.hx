package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;

class PortView{

	public var pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var jobView:JobView;
	
	public var port:Port;
	private var editor:Editor;
	
	public function new(editor, port) {
		this.editor = editor;
		this.port = port;
		this.group = editor.snap.group();
		this.graphic = editor.snap.circle(0, 0, 30);
		var coll = editor.snap.circle(0, 0, 30);
		this.graphic.attr({
				fill: editor.thema.main_color,
				stroke: editor.thema.line_color,
				strokeWidth: 4
				});
		this.pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    	    fill: "#ffff00",
    	    "fill-opacity" : 0.1,
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
	public function getPos() {
		return pos;
	}
}