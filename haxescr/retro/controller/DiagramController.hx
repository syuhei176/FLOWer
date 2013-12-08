package retro.controller;

import retro.pub.Editor;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.Logic;

/*
	DiagramController
*/
class DiagramController implements Controller{

	private var editor:Editor;
	private var diagram:Diagram;
	
	public function new(editor, diagram){
		this.editor = editor;
		this.diagram = diagram;
	}
	
	public function getEditor() {
		return this.editor;
	}
	
	public function getDiagram() {
		return diagram;
	}
	
	public function addJob() {
		var id = this.editor.IdGenerator.genID();
		var job = new Job(id);
		diagram.addJob(job);
	}
	public function addLogic(logic:Logic) {
		diagram.jobs.push(logic);
	}
	public function removeJob(job:Job) {
		diagram.jobs.remove(job);
	}
}