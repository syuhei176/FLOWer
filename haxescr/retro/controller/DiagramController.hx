package retro.controller;

import retro.pub.Editor;
import retro.pub.RetroType;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.EntryJob;
import retro.model.Logic;
import retro.model.SymbolicLink;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.core.JobComponent;
import retro.library.Add;
import retro.library.Through;

/*
	DiagramController
*/
class DiagramController implements Controller{

	private var editor:Editor;
	private var diagram:Diagram;
	
	//ラバーバンド
	public var start : OutputPort;
	public var end : InputPort;
	
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
	
	//Jobを追加
	public function addJob() {
		var id = this.editor.IdGenerator.genID();
		var job = new Job(id);
		diagram.addJob(job);
	}
	
	//始めから入出力ポートがあるJobを追加
	public function addJob_1i1o() {
		var id = this.editor.IdGenerator.genID();
		var job = new Job(id);
		diagram.addJob(job);
		job.addInputPort(new InputPort(job, RetroType.RString, "input"));
		job.addOutputPort(new OutputPort(job, RetroType.RString, "output"));
	}
	public function addLogic_1i1o() {
		var id = this.editor.IdGenerator.genID();
		var job = new Logic(id);
		diagram.addJob(job);
		job.addInputPort(new InputPort(job, RetroType.RString, "input"));
		job.addOutputPort(new OutputPort(job, RetroType.RString, "output"));
	}
	private function base_addJob(jobComponent:JobComponent) {
		diagram.addJob(new SymbolicLink(this.editor.IdGenerator.genID(), jobComponent));
	}
	public function addJobFromLibrary_Add() {
		this.base_addJob(new Add());
	}
	public function addJobFromLibrary_Through() {
		this.base_addJob(new Through());
	}
	
	public function addEntryJob() {
		var id = this.editor.IdGenerator.genID();
		var job = new EntryJob(id);
		diagram.addJob(job);
		job.addOutputPort(new OutputPort(job, RetroType.RString, "output"));
	}
	public function addLogic(id) {
		var job = new Logic(id);
		diagram.addJob(job);
	}
	public function removeJob(job:Job) {
		diagram.getJobs().remove(job);
	}
	
	public function setRubberbandStart(port:OutputPort) {
		this.start = port;
	}
	public function setRubberbandEnd(port:InputPort) {
		this.end = port;
		this.start.connectToInputPort(this.end);
		trace(this.start);
		trace(this.end);
	}
	//ポートの接続解除
	static public function disconnect(oport:OutputPort, iport:InputPort) {
		oport.disconnectToInputPort(iport);
	}
}
