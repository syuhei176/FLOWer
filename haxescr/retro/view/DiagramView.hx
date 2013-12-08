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
	private var timer:Timer = null;
	
	public function new(diagramController) {
		this.jobViews = new Array<JobView>();
		this.diagramController = diagramController;
		var diagram = this.diagramController.getDiagram();
		//モデルの変更を監視
		diagram.onJobAdded(this.OnJobAdded);
	}
	
	public function start_step() {
		if(this.timer == null) {
			this.timer = new Timer(80);
			var counter = 0;
			this.timer.run = function() {
				this.step();
				counter++;
				if(counter > 1000) {
					this.timer.stop();
					this.timer = null;
				}
			};
		}
	}
	
	public function step() {
		for(jv in this.jobViews) {
			jv.step();
		}
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
