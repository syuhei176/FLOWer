package retro.pub;

import retro.pub.IdGenerator;
import retro.view.JobView;

class Job{
	public var id : ID;
	public var type : RetroType;
	public var inputPorts : Array<InputPort>;
	public var outputPorts : Array<OutputPort>;
	// 実行を移譲
	public var worker : Worker;
	public var jobView : JobView;
	
	public function new(editor:Editor, ?id){
		if(id != null) {
			this.id = id;
		}else{
			this.id = editor.IdGenerator.genID();
		}
		this.inputPorts = new Array<InputPort>();
		this.outputPorts = new Array<OutputPort>();
		this.jobView = new JobView(editor, this);
		this.addInputPort(new InputPort(this, RetroType.RString, "input1"));
		this.addInputPort(new InputPort(this, RetroType.RString, "input2"));
		this.addOutputPort(new OutputPort(this, RetroType.RString, "output2"));
	}
	
	public function addInputPort(port : InputPort) {
		this.inputPorts.push(port);
		this.jobView.addPortView(port);
	}
	public function addOutputPort(port : OutputPort) {
		this.outputPorts.push(port);
		this.jobView.addPortView(port);
	}
	
	public function act(cb){
		if(this.worker == null) {
			this.worker = new Worker(this);
		}
		this.worker.act(cb);
	}
	
	public function getInputPort(name:String) {
		for(p in inputPorts) {
			if(name == p.name) {
				return p;
			}
		}
		return null;
	}
}