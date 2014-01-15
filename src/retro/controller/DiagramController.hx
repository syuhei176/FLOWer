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
		this.modules.push(new retro.library.data.Stack());
		this.modules.push(new retro.library.sphero.SetBackLED());
		this.modules.push(new retro.library.sphero.SetHeading());
		this.modules.push(new retro.library.sphero.Roll());
		this.modules.push(new retro.library.string.Split());
		this.modules.push(new retro.library.string.IndexOf());
		this.modules.push(new retro.library.string.ChatAt());
		this.modules.push(new retro.library.string.Substr());
		this.modules.push(new retro.library.string.Length());
		this.modules.push(new retro.library.string.LastIndexOf());
		this.modules.push(new retro.library.point2d.Add());
		this.modules.push(new retro.library.point2d.Sub());
		this.modules.push(new retro.library.point2d.Create());
		this.modules.push(new retro.library.point2d.Distance());
		this.modules.push(new retro.library.http.Post());
		this.modules.push(new retro.library.http.Get());
		this.modules.push(new retro.library.line2d.Create());
		this.modules.push(new retro.library.line2d.Distance());
		this.modules.push(new retro.library.list.Length());
		this.modules.push(new retro.library.list.Add());
		this.modules.push(new retro.library.list.Clear());
		this.modules.push(new retro.library.list.First());
		this.modules.push(new retro.library.list.IsEmpty());
		this.modules.push(new retro.library.list.Join());
		this.modules.push(new retro.library.list.Last());
		this.modules.push(new retro.library.list.Pop());
		this.modules.push(new retro.library.list.Push());
		this.modules.push(new retro.library.list.Remove());
		this.modules.push(new retro.library.math.Abs());
		this.modules.push(new retro.library.math.Acos());
		this.modules.push(new retro.library.math.Asin());
		this.modules.push(new retro.library.math.Atan());
		this.modules.push(new retro.library.math.Atan2());
		this.modules.push(new retro.library.math.Cos());
		this.modules.push(new retro.library.math.Sin());
		this.modules.push(new retro.library.math.Floor());
		this.modules.push(new retro.library.math.Log());
		this.modules.push(new retro.library.math.Max());
		this.modules.push(new retro.library.math.Min());
		this.modules.push(new retro.library.math.Pow());
		this.modules.push(new retro.library.math.Random());
		this.modules.push(new retro.library.math.Sqrt());
		this.modules.push(new retro.library.snapsvg.Rect(virtualDevice));
		this.modules.push(new retro.library.snapsvg.Circle());
		this.modules.push(new retro.library.snapelement.Translate());
		this.modules.push(new retro.library.snapelement.Fill());
		this.modules.push(new retro.library.jquery.Find());
		this.modules.push(new retro.library.jquery.Html());
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
		return job;
	}
	public function addLogic(id) {
		var job = new Logic(id);
		diagram.addJob(job);
	}
	public function removeJob(job:Job) {
		diagram.removeJob(job);
	}
	
	public function setRubberbandStart(port:OutputPort) {
		if( this.start != null ) this.start.onNormal();
		this.start = port;
		this.start.onSelected();
	}

	public function setRubberbandEnd(port:InputPort) {
		if(this.start == null) {
			return false;
		}else{
			this.end = port;
			this.start.onNormal();
			this.start.connectToInputPort(this.end);
			return true;
		}
	}
	public function clearRubberband() {
		if( this.start != null ) this.start.onNormal();
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
