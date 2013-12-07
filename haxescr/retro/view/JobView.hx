package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.InputPort;
import retro.pub.OutputPort;
import retro.pub.Job;

class JobView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	
	public var job:Job;
	public var editor:Editor;
	private var inputportviews:Array<InputPortView>;
	private var outputportviews:Array<OutputPortView>;
	
	public function new(editor, job) {
		this.inputportviews = new Array<InputPortView>();
		this.outputportviews = new Array<OutputPortView>();
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
    		this.refresh();
    	});
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	
	//ポートビューを作成
	public function addInputPortView(port : InputPort) {
		var portView = new InputPortView(this, port);
		this.group.append(portView.group);
		this.inputportviews.push(portView);
		this.cal();
		return portView;
	}
	public function addOutputPortView(port : OutputPort) {
		var portView = new OutputPortView(this, port);
		this.group.append(portView.group);
		this.outputportviews.push(portView);
		this.cal();
		return portView;
	}
	
	public function cal() {
		var th = 2*Math.PI / (this.inputportviews.length + this.outputportviews.length);
		var thh:Float = 0;
		for(pv in this.inputportviews) {
			pv.setPos(60*Math.cos(thh), 60*Math.sin(thh));
			thh += th;
		}
		for(pv in this.outputportviews) {
			pv.setPos(60*Math.cos(thh), 60*Math.sin(thh));
			thh += th;
		}
	}
	
	public function refresh() {
		for(portView in this.inputportviews) {
			portView.refresh();
		}
		for(portView in this.outputportviews) {
			portView.refresh();
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
	
	public function getPos() {
		return pos;
	}
	
	public static function main(){
		var load = function(_){
		};
		js.Browser.window.onload = cast load;
	}
}