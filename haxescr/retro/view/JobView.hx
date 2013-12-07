package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.Job;

class JobView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	
	public var job:Job;
	private var editor:Editor;
	private var portviews:Array<PortView>;
	
	public function new(editor, job) {
		this.portviews = new Array<PortView>();
		this.editor = editor;
		this.job = job;
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
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
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
	
	//ポートビューを作成
	public function addPortView(port : Port) {
		var portView = new PortView(this.editor, port);
		this.group.append(portView.group);
		this.portviews.push(portView);
		this.cal();
	}
	
	public function cal() {
		var th = 2*Math.PI / this.portviews.length;
		var thh:Float = 0;
		for(pv in this.portviews) {
			pv.setPos(60*Math.cos(thh), 60*Math.sin(thh));
			thh += th;
		}
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