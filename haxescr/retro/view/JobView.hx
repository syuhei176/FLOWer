package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.model.Job;
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
class JobView{

	public var pos : Point2D;
	public var prev_pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	
	public var diagramController:DiagramController;
	public var jobController:JobController;
	
	public var diagramView:DiagramView;
	private var inputportviews:Array<InputPortView>;
	private var outputportviews:Array<OutputPortView>;
	
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
		this.graphic = snap.circle(0, 0, 60);
		var coll = snap.circle(0, 0, 60);
		this.graphic.attr({
				fill: thema.main_color,
				stroke: thema.line_color,
				strokeWidth: 4
				});
		this.pos = new Point2D(0, 0);
		this.prev_pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
    	});
		coll.mousedown(function(e, x, y){
			var runTime = this.jobController.getEditor().getRuntime();
			runTime.invoke_entry(this.jobController.getJob());
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
			this.diagramView.start_step();
    		this.jobController.changePos(this.pos.getX(), this.pos.getY());
    	});
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	
	//Model変更時に呼ばれるリスナー
	public function OnAddInputPortView(port : InputPort) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new InputPortView(this.diagramController, this, port, snap, thema);
		this.group.append(portView.group);
		this.inputportviews.push(portView);
		this.cal();
		return portView;
	}
	
	//Model変更時に呼ばれるリスナー
	public function OnAddOutputPortView(port : OutputPort) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new OutputPortView(this.diagramController, this, port, snap, thema);
		this.group.append(portView.group);
		this.outputportviews.push(portView);
		this.cal();
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
	
	public function OnPosChanged(x:Float, y:Float) {
		this.setPos(x, y);
	}
	
}
