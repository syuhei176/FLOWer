package retro.view;

import haxe.Timer;
import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.RetroType;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.model.Job;
import retro.model.Value;
import retro.controller.DiagramController;
import retro.controller.JobController;

/*
	Class Name:JobView
	
	Event
	Method
	-addInputPortView:入力ポートを追加する
	-addOutputPortView:出力ポートを追加する
	-getPos:グローバル座標を取得
*/
class ConsoleView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	private var texts:Array<SnapElement>;
	private var current_line:Int = 0;
	private var buffer:String = "";
	
	public function new(editor:Editor) {
		var snap = editor.snap;
		var thema = editor.thema;
		this.group = snap.group();
		this.graphic = snap.rect(0, 0, 220, 200);
		var coll = snap.rect(0, 0, 220, 200);
		
		this.current_line = 0;
		this.texts = new Array<SnapElement>();
		this.texts.push(snap.text(10, 20, ""));
		this.texts.push(snap.text(10, 40, ""));
		this.texts.push(snap.text(10, 60, ""));
		this.texts.push(snap.text(10, 80, ""));
		this.texts.push(snap.text(10, 100, ""));
		for(t in this.texts) {
			t.attr({
				"font-size" : "18px",
				fill : "#f0f0ff"
			});
		}
		this.graphic.attr({
				fill: "#202020",
				stroke: "#707070",
				strokeWidth: 5
				});
		this.pos = new Point2D(0, 0);
		this.prev_pos = new Point2D(0, 0);
		this.setPos(200, 80);
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
		for(t in this.texts) {
			this.group.append(t);
		}
		this.group.append(coll);
	}
	
	public function print(str) {
		buffer += str;
		this.texts[0].attr({
			text : buffer
		});
		
	}
	public function println(str) {
		buffer += str + "\n";
		this.texts[this.current_line].attr({
			text : buffer
		});
		this.current_line++;
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
	
	public function OnPosChanged(x:Float, y:Float) {
		this.setPos(x, y);
	}
	
}
