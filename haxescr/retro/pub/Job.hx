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
	
	public function new(editor, ?id){
		if(id != null) {
			this.id = id;
		}else{
			this.id = editor.IdGenerator.genID();
		}
		this.jobView = new JobView(editor);
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