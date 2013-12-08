package retro.controller;

import retro.pub.Editor;
import retro.model.Project;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.Logic;

/*
	ImportController
*/
class ImportController implements Controller {
	
	private var editor:Editor;
	private var project:Project;
	
	public function new(editor, project){
		this.editor = editor;
		this.project = project;
	}
	
	public function getProject() {
		return this.project;
	}
	
	public function do_import(model:Dynamic) {
		var diagram = new Diagram();
		var diagramController = new DiagramController(this.editor, diagram);
		this.project.setRootDiagram(diagram);
		if(model.model.nodes) {
			this.import_diagram(diagramController, model.model);
		}else{
			//初めてエディタを開いた場合
			diagramController.addJob_1i1o();
			diagramController.addJob_1i1o();
			diagramController.addJob_1i1o();
		}
	}
	
	public function import_diagram(diagramController:DiagramController, model:Dynamic) {
		var nodes : Array<Dynamic> = model.nodes;
		for( i in nodes ) {
			diagramController.addJob();
		}
	}
	
	public function import_job(model:Dynamic) {
	
	}
	
}