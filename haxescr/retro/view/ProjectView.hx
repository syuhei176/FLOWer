package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.model.Diagram;
import retro.controller.ProjectController;
import retro.controller.DiagramController;

class ProjectView{
	public var group:SnapElement;
	private var projectController:ProjectController;
	private var onButtonListeners:Array<Int->Void>;
	private var diagramView : DiagramView;
	private var control_group : SnapElement;
	public function new(projectController) {
		this.projectController = projectController;
		var snap = this.projectController.getEditor().snap;
		var project = this.projectController.getProject();
		project.onDiagramAdded(this.OnDiagramAdded);
		
		this.control_group = snap.group();
    	Snap.load("/images/play.svg", function (f) {
    		var g:SnapElement = f.select("svg");
        	g.click(function(e){
        	});
        	this.control_group.append(g);
    	});
    	Snap.load("/images/create.svg", function (f) {
    		var g:SnapElement = f.select("g");
    		g.transform("translate("+100+","+0+")");
        	g.click(function(e){
        	});
        	this.control_group.append(g);
    	});
    	Snap.load("/images/save.svg", function (f) {
    		var g:SnapElement = f.select("g");
    		g.transform("translate("+200+","+0+")");
        	g.click(function(e){
        	});
        	this.control_group.append(g);
    	});
	}
	
	public function OnDiagramAdded(diagram:Diagram) {
		this.diagramView = new DiagramView(new DiagramController(this.projectController.getEditor(), diagram));
	}
	
}