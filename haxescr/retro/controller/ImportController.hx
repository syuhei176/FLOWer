package retro.controller;

import retro.pub.Editor;
import retro.model.Project;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.EntryJob;
import retro.model.Logic;
import retro.model.SymbolicLink;
import retro.model.Value;
import retro.core.JobComponent;

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
				var jobComponent = diagramController.getModule(j.ref);
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
		var ips:Array<Dynamic> = model.inputports;
		for(op in ops) {
			var start = diagram.getOutputPort(model.id + "." + op.name);
			var cons:Array<Dynamic> = op.connections;
			for(con in cons) {
				var end = diagram.getInputPort(con);
				start.connectToInputPort(end);
			}
		}
		for(ip in ips) {
			var inputPort = diagram.getInputPort(model.id + "." + ip.name);
			if(ip.constant) {
				inputPort.setConstant(new Value(ip.constant.type, ip.constant.value));
			}
		}
	}
	
}
