package retro.view;

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
	
	public function new(diagramController) {
		this.jobViews = new Array<JobView>();
		this.diagramController = diagramController;
		var diagram = this.diagramController.getDiagram();
		//モデルの変更を監視
		diagram.onJobAdded(this.OnJobAdded);
	}
	
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