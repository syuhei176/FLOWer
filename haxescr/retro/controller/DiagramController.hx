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

/*
	DiagramController
*/
class DiagramController implements Controller{

	private var editor:Editor;
	private var diagram:Diagram;
	
	//ラバーバンド
	public var start : OutputPort;
	public var end : InputPort;
	
	private var modules:Array<JobComponent>;
	
	public function new(editor, diagram, virtualDevice){
		this.editor = editor;
		this.diagram = diagram;
		this.modules = new Array<JobComponent>();
		this.modules.push(new retro.library.core.Through());
		this.modules.push(new retro.library.core.Add());
		this.modules.push(new retro.library.core.Times());
		this.modules.push(new retro.library.core.Remainder());
		this.modules.push(new retro.library.core.Filter());
		this.modules.push(new retro.library.core.Drop());
		this.modules.push(new retro.library.core.Compare());
		this.modules.push(new retro.library.core.And());
		this.modules.push(new retro.library.core.Or());
		this.modules.push(new retro.library.core.Not());
		this.modules.push(new retro.library.core.Transistor());
		this.modules.push(new retro.library.system.Print(virtualDevice));
		this.modules.push(new retro.library.system.Scan(virtualDevice));
		this.modules.push(new retro.library.array.Create());
		this.modules.push(new retro.library.array.Length());
		this.modules.push(new retro.library.array.Push());
		this.modules.push(new retro.library.array.Pop());
		this.modules.push(new retro.library.array.Get());
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
	public function addSymbolicLink(jobComponent) {
		var id = this.editor.IdGenerator.genID();
		var job = new SymbolicLink(id, jobComponent);
		diagram.addJob(job);
		return job;
	}
	
	public function addEntryJob() {
		var id = this.editor.IdGenerator.genID();
		var job = new EntryJob(id);
		diagram.setEntryPoint(job);
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
		if(this.start == null) {
			return false;
		}else{
			this.end = port;
			this.start.connectToInputPort(this.end);
			return true;
		}
	}
	public function clearRubberband() {
		this.start = null;
		this.end = null;
	}
	//ポートの接続解除
	static public function disconnect(oport:OutputPort, iport:InputPort) {
		oport.disconnectToInputPort(iport);
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
