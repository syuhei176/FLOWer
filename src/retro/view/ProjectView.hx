package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.model.Diagram;
import retro.controller.ProjectController;
import retro.controller.DiagramController;
import retro.controller.ExportController;

enum RunMode{
	Stop;
	Run;
}

class ProjectView{
	public var group:SnapElement;
	private var projectController:ProjectController;
	private var onButtonListeners:Array<Int->Void>;
	private var diagramView : DiagramView;
	private var control_group : SnapElement;
	private var exportController : ExportController;
	private var mode:RunMode;
	
	public function new(projectController, exportController) {
		this.projectController = projectController;
		this.exportController = exportController;
		this.mode = RunMode.Stop;
		var snap = this.projectController.getEditor().snap;
		var project = this.projectController.getProject();
		project.onDiagramAdded(this.OnDiagramAdded);
		
		this.control_group = snap.group();
    	Snap.load("images/play.svg", function (f) {
    		var g:SnapElement = f.select("svg");
        	g.click(function(e){
        		if(this.mode == RunMode.Stop) {
	        		this.projectController.run();
	        		this.mode = RunMode.Run;
	        		g.select("polygon").attr({
	        			fill : "#ff0000"
	        		});
        		}else if(this.mode == RunMode.Run) {
    	    		this.projectController.stop();
    	    		this.mode = RunMode.Stop;
	        		g.select("polygon").attr({
	        			fill : "#ffffff"
	        		});
        		}
        	});
        	this.control_group.append(g);
    	});
	}
	
	public function OnDiagramAdded(diagram:Diagram) {
		this.diagramView = new DiagramView(new DiagramController(this.projectController.getEditor(), diagram, this.projectController.getEditor().virtualDevice));
	}
	
}