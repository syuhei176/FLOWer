package retro.controller;

import retro.pub.Editor;
import retro.model.Project;
import retro.model.Diagram;
import retro.view.DiagramView;

class ProjectController implements Controller{
	private var editor:Editor;
	private var project:Project;
	public function new(editor, project){
		this.editor = editor;
		this.project = project;
	}
	
	public function getEditor() {
		return this.editor;
	}
	public function getProject() {
		return this.project;
	}
	
	//Project Controller
	public function addDiagram() {
		var diagram = new Diagram();
		var diagramController = new DiagramController(this.editor, diagram);
		var diagramView = new DiagramView(diagramController);
		this.project.setRootDiagram(diagram);
	}
	
	//Diagram Controller
	
	//Job Controller
	
}