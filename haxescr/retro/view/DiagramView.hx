package retro.view;

import haxe.Timer;
import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Job;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.controller.DiagramController;
import retro.controller.JobController;

class DiagramView{
	public var group:SnapElement;
	private var diagramController:DiagramController;
	private var onButtonListeners:Array<Int->Void>;
	private var jobViews:Array<JobView>;
	private var control_group:SnapElement;
	
	//力学
	private var timer:Timer = null;
	private var energy:Float = 0;
	
	public function new(diagramController) {
		this.jobViews = new Array<JobView>();
		this.diagramController = diagramController;
		var diagram = this.diagramController.getDiagram();
		//モデルの変更を監視
		diagram.onJobAdded(this.OnJobAdded);
		/*
		this.control_group = snap.group();
		Snap.load("/images/create.svg", function (f) {
    		var g:SnapElement = f.select("g");
    		g.transform("translate("+100+","+0+")");
        	g.click(function(e){
        		
        	});
        	this.control_group.append(g);
    	});
    	*/
		
	}
	
	public function start_step() {
		if(this.timer == null) {
			this.timer = new Timer(80);
			this.timer.run = function() {
				var energy = this.step();
				trace(energy);
				if(energy < 1) {
					this.timer.stop();
					this.timer = null;
				}
			};
		}
	}
	
	public function step() {
		var energy:Float = 0;
		for(jv in this.jobViews) {
			energy += jv.step();
		}
		return energy;
	}
	
	//モデルが変更されたときに呼ばれるリスナー
	public function OnJobAdded(job:Job) {
		this.jobViews.push(
			new JobView(
				this.diagramController,
				new JobController(
					this.diagramController.getEditor(),
					job),
				this));
	}
	
	public function getOutputPortView(port:OutputPort) {
		for(jv in this.jobViews) {
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) {
				continue;
			}
			var opv = jv.getOutputPortView(port);
			if(opv != null) {
				return opv;
			}
		}
		return null;
	}
	
	public function getInputPortView(port:InputPort) {
		for(jv in this.jobViews) {
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) {
				continue;
			}
			var opv = jv.getInputPortView(port);
			if(opv != null) {
				return opv;
			}
		}
		return null;
	}
	
}
