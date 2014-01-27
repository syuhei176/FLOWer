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
using Lambda;

/*
	Class Name:JobView
	
	Event
	Method
	-addInputPortView:入力ポートを追加する
	-addOutputPortView:出力ポートを追加する
	-getPos:グローバル座標を取得
*/
class JobView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	private var config_graphic:SnapElement;
	private var config_timer:Timer;
	
	public var diagramController:DiagramController;
	public var jobController:JobController;
	
	public var diagramView:DiagramView;
	private var inputportviews:Array<InputPortView>;
	private var outputportviews:Array<OutputPortView>;
	
	private var setted_value:String;

	
	public function new(diagramController, jobController, diagramView) {
		this.inputportviews = new Array<InputPortView>();
		this.outputportviews = new Array<OutputPortView>();
		this.diagramController = diagramController;
		this.jobController = jobController;
		this.diagramView = diagramView;
		
		//modelの変更を監視
		var job = this.jobController.getJob();
		job.onInputPortAdded(OnAddInputPortView);
		job.onOutputPortAdded(OnAddOutputPortView);
		job.onPosChanged(OnPosChanged);
		
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		this.group = snap.group();
		if(Type.getClassName(Type.getClass(this.jobController.getJob())) == "retro.model.EntryJob") {
			this.graphic = snap.rect(0, 0, 216, 89, 5, 5);
			this.graphic.attr({
				strokeWidth : 1,
				stroke : thema.stroke_color,
				fill : thema.bg_color,
				});
			this.coll = snap.rect(0, 0, 216, 89);
		}else{
			this.graphic = snap.rect(0, 0, 216, 89, 5, 5);
			this.graphic.attr({
				strokeWidth : 1,
				stroke : thema.stroke_color,
				fill : thema.bg_color,
				});
			this.coll = snap.rect(0, 0, 216, 89);
		}
		var text = snap.text(12, 24, job.getName());
		text.attr({
			"font-size" : "12px",
			fill : thema.font_color,
			"font-family" : "MyriadPro-Regular"
		});
		var line = snap.line(0, 36, 216, 36);
		line.attr({
			strokeWidth : 1,
			stroke : thema.stroke_color,
			});

		this.pos = new Point2D(0, 0);
		this.prev_pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
    	});
		coll.mousedown(function(e, x, y){
			this.visible_config_btn();
		});
		coll.drag(function(dx, dy, x, y){
        	this.addPos(dx - this.prev_pos.getX(), dy - this.prev_pos.getY());
        	this.prev_pos.setX(dx);
        	this.prev_pos.setY(dy);
        	this.refresh();
    	}, function(x, y) {
    		this.prev_pos.setX(0);
    		this.prev_pos.setY(0);
    	}, function(x, y) {
    		this.refresh();
			//this.diagramView.start_step();
    		this.jobController.changePos(this.pos.getX(), this.pos.getY());
    		var right = js.Browser.document.body.clientWidth;
    		if(right - 150 < this.pos.getX() && this.pos.getX() < right && this.pos.getY() < 150) {
	    		this.diagramController.removeJob(this.jobController.getJob());
    		}
    	});
		
		this.group.append(this.graphic);
		this.group.append(text);
		this.group.append(line);
		this.group.append(coll);
	}
	
	public function removeSelf() {
		this.group.remove();
		this.config_timer.stop();
	}
	
	private function visible_config_btn() {
		this.config_timer = new Timer(3000);
		this.config_timer.run = function() {
    		this.config_timer.stop();
	    	this.config_graphic.attr({
    			"visibility" : "hidden"
    		});
		}
    	this.config_graphic.attr({
    		"visibility" : "visible"
    	});
	}
	
	//Model変更時に呼ばれるリスナー
	public function OnAddInputPortView(port : InputPort) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new InputPortView(this.diagramController, this, port, snap, thema);
		this.group.append(portView.group);
		this.inputportviews.push(portView);
		this.cal2();
		return portView;
	}
	
	//Model変更時に呼ばれるリスナー
	public function OnAddOutputPortView(port : OutputPort) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new OutputPortView(this.diagramController, this, port, snap, thema);
		this.group.append(portView.group);
		this.outputportviews.push(portView);
		this.cal2();
		return portView;
	}
	
	public function cal() {
		var th = 2*Math.PI / (this.inputportviews.length + this.outputportviews.length);
		var thh:Float = 0;
		for(pv in this.inputportviews) {
			pv.setR(thh);
			thh += th;
		}
		for(pv in this.outputportviews) {
			pv.setR(thh);
			thh += th;
		}
	}
	public function cal2() {
		var h:Int = 63;
		for(pv in this.inputportviews) {
			pv.setPos(0, h);
			h += 53;
		}
		h = 63;
		for(pv in this.outputportviews) {
			pv.setPos(216, h);
			h += 53;
		}
		this.graphic.attr({
			height : this.inputportviews.length > this.outputportviews.length 
			? this.inputportviews.length*53+36 : this.outputportviews.length*53+36
		});
		this.coll.attr({
			height : this.inputportviews.length > this.outputportviews.length 
			? this.inputportviews.length*53+36 : this.outputportviews.length*53+36
		});
	}
	
	public function step() {
		var energy:Float = 0;
		for(portView in this.inputportviews) {
			energy += portView.step();
		}
		for(portView in this.outputportviews) {
			energy += portView.step();
		}
		return energy;
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
	
	public function getOutputPortView(port:OutputPort) {
		for(opv in this.outputportviews) {
			if(opv.port.getName() == port.getName()) {
				return opv;
			}
		}
		return null;
	}
	
	public function getInputPortView(port:InputPort) {
		for(ipv in this.inputportviews) {
			if(ipv.port.getName() == port.getName()) {
				return ipv;
			}
		}
		return null;
	}
	
	public function getInputPortViews() {
		return this.inputportviews;
	}
	public function getOutputPortViews() {
		return this.outputportviews;
	}
	public function getPortViews() {
		var portViews = new Array<PortView>();
		for(ipv in this.inputportviews) {
			portViews.push(ipv);
		}
		for(opv in this.outputportviews) {
			portViews.push(opv);
		}
		return portViews;
	}
	
	public function OnPosChanged(x:Float, y:Float) {
		this.setPos(x, y);
	}
	
}
