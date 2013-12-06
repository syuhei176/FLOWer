package retro.pub;

import retro.pub.IdGenerator;

class Job{
	public var id : ID;
	public var type : RetroType;
	public var inputPorts : Array<InputPort>;
	public var outputPorts : Array<OutputPort>;
	// 実行を移譲
	public var worker : Worker;

	public function new(editor, ?id){
		if(id != null) {
			this.id = id;
		}else{
			this.id = editor.IdGenerator.genID();
		}
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