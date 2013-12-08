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
	private var jobView:Array<JobView>;
	
	public function new(diagramController) {
		this.jobView = new Array<JobView>();
		this.diagramController = diagramController;
		var diagram = this.diagramController.getDiagram();
		diagram.onJobAdded(this.OnJobAdded);
	}
	
	public function OnJobAdded(job:Job) {
		this.jobView.push(new JobView(new JobController(this.diagramController.getEditor(), job)));
	}

}