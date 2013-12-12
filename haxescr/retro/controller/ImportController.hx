package retro.controller;

import retro.pub.Editor;
import retro.model.Project;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.EntryJob;
import retro.model.Logic;
import retro.model.SymbolicLink;
import retro.core.JobComponent;
import retro.library.Add;
import retro.library.Through;
import retro.library.Times;
import retro.library.Filter;

/*
	ImportController
*/
class ImportController implements Controller {
	
	private var editor:Editor;
	private var project:Project;
	private var modules:Array<JobComponent>;
	
	public function new(editor, project){
		this.editor = editor;
		this.project = project;
		this.modules = new Array<JobComponent>();
		this.modules.push(new Add());
		this.modules.push(new Through());
		this.modules.push(new Times());
		this.modules.push(new Filter());
	}
	
	public function getProject() {
		return this.project;
	}
	
	public function do_import(model:Dynamic) {
		var diagram = new Diagram();
		var diagramController = new DiagramController(this.editor, diagram);
		this.project.setRootDiagram(diagram);
		if(model.model.diagram) {
			this.import_diagram(diagramController, model.model.diagram);
		}else{
			//初めてエディタを開いた場合
			diagramController.addJobFromLibrary_Add();
			diagramController.addJobFromLibrary_Through();
			diagramController.addJobFromLibrary_Through();
			diagramController.addEntryJob();
			diagramController.addEntryJob();
		}
	}
	
	public function import_diagram(diagramController:DiagramController, diagram:Dynamic) {
		var jobs : Array<Dynamic> = diagram.jobs;
		for( j in jobs ) {
			if(j.meta == "retro.model.EntryJob") {
				var entry = new EntryJob(j.id);
				diagramController.addEntryJobByJob(entry);
				entry.setPos(j.pos.x, j.pos.y);
			}else if(j.meta == "retro.model.SymbolicLink"){
				var jobComponent = this.getModule(j.ref);
				var job = new SymbolicLink(j.id, jobComponent);
				diagramController.addJobByJob(job);
				job.setPos(j.pos.x, j.pos.y);
			}
		}
		for( j in jobs ) {
			this.import_job(j, diagramController.getDiagram());
		}
	}
	
	public function import_job(model:Dynamic, diagram:Diagram) {
		var ops:Array<Dynamic> = model.outputports;
		for(op in ops) {
			var start = diagram.getOutputPort(model.id + "." + op.name);
			var cons:Array<Dynamic> = op.connections;
			for(con in cons) {
				var end = diagram.getInputPort(con);
				start.connectToInputPort(end);
			}
		}
	}
	
	public function getModule(name) {
		for(m in this.modules) {
			if(m.getModuleName() == name) {
				return m;
			}
		}
		return null;
	}
	
}
