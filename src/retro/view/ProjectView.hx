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
		var thema = this.projectController.getEditor().thema;
		project.onDiagramAdded(this.OnDiagramAdded);
		
		this.control_group = snap.group();
		var rect = snap.rect(5, 5, 140, 61, 5, 5);
		rect.attr({
				strokeWidth : 1,
				stroke : thema.stroke_color,
				fill : "#F4F4F4",
				});
		var coll = snap.rect(5,5,70,61);
		coll.attr({
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
    	});
		var line = snap.line(75,5,75,66);
		line.attr({
				strokeWidth : 1,
				stroke : thema.stroke_color,
				});

    	Snap.load("images/play.svg", function (f) {
    		var g:SnapElement = f.select("svg");
    		var path : SnapElement = g.select("path");
    		path.transform("translate("+8+","+5+")");
    		path.attr({
    			fill : "#ffffff",
    			stroke : thema.stroke_color
    			});
        	coll.click(function(e){
        		if(this.mode == RunMode.Stop) {
	        		this.projectController.run();
	        		this.mode = RunMode.Run;
	        		path.attr({
	        			fill : "#FF39A6"
	        		});
        		}else if(this.mode == RunMode.Run) {
    	    		this.projectController.stop();
    	    		this.mode = RunMode.Stop;
	        		path.attr({
	        			fill : "#ffffff",
	        			stroke : thema.stroke_color
	        		});
        		}
        	});
        	this.control_group.append(rect);
        	this.control_group.append(g);
        	this.group.append(coll);
    	});
	}
	
	public function OnDiagramAdded(diagram:Diagram) {
		this.diagramView = new DiagramView(new DiagramController(this.projectController.getEditor(), diagram, this.projectController.getEditor().virtualDevice));
	}
	
}