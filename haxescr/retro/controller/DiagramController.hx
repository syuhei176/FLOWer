package retro.controller;

import retro.pub.Editor;
import retro.pub.RetroType;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.Logic;
import retro.model.InputPort;
import retro.model.OutputPort;

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
	public function addLogic(logic:Logic) {
		diagram.jobs.push(logic);
	}
	public function removeJob(job:Job) {
		diagram.jobs.remove(job);
	}
	
	public function setRubberbandStart(port:OutputPort) {
		this.start = port;
	}
	public function setRubberbandEnd(port:InputPort) {
		this.end = port;
		this.start.connectToInputPort(this.end);
	}
	//ポートの接続解除
	static public function disconnect(oport:OutputPort, iport:InputPort) {
		oport.disconnectToInputPort(iport);
	}
}