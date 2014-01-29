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
		var rect = snap.rect(5, 5, 140, 61, 5, 5);
		rect.attr({
				strokeWidth : Thema.buttonBackgroundStrokeWidth,
				stroke : Thema.buttonBackgroundStroke,
				fill :  Thema.buttonBackgroundFill,
				});
		var coll = snap.rect(5,5,70,61);
		coll.attr({
    	    fill: "#ffffff",
    	    "fill-opacity" : 0,
    	});
		var line = snap.line(75,5,75,66);
		line.attr({
				strokeWidth : Thema.buttonBackgroundStrokeWidth,
				stroke : Thema.buttonBackgroundStroke,
				});

    	Snap.load(#if codeiq "images/play.svg" #else "/images/play.svg" #end, function (f) {
    		var g:SnapElement = f.select("svg");
    		var path : SnapElement = g.select("path");
    		path.transform("translate("+8+","+5+")");
    		path.attr({
    			fill : Thema.playSvgFill,
    			stroke : Thema.playSvgStroke,
    			strokeWidth : Thema.playSvgStrokeWidth
    			});
        	coll.click(function(e){
        		if(this.mode == RunMode.Stop) {
	        		this.projectController.run();
	        		this.mode = RunMode.Run;
	        		path.attr({
	        			fill : Thema.playModeFill,
	        			stroke : Thema.playModeStroke,
	        			strokeWidth : Thema.playModeStrokeWidth
	        		});
        		}else if(this.mode == RunMode.Run) {
    	    		this.projectController.stop();
    	    		this.mode = RunMode.Stop;
	        		path.attr({
	        			fill : Thema.playSvgFill,
	        			stroke : Thema.playSvgStroke,
	        			strokeWidth : Thema.playSvgStrokeWidth
	        		});
        		}
        	});
        #if raspi
        Snap.load("/images/save.svg", function (f) {
    		var g:SnapElement = f.select("g");
    		g.transform("translate("+160+","+5+")");
        	g.click(function(e){
        		var exported = this.exportController.do_export();
        		trace(exported);
        		this.projectController.getEditor().save_all(exported);
        	});
        	this.control_group.append(g);
    	});
    	#end
        	
        	this.control_group.append(rect);
        	this.control_group.append(g);
        	this.control_group.append(coll);
    	});
	}
	
	public function OnDiagramAdded(diagram:Diagram) {
		this.diagramView = new DiagramView(new DiagramController(this.projectController.getEditor(), diagram, this.projectController.getEditor().virtualDevice));
	}
	
}