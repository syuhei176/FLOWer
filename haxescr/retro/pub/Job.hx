package retro.pub;

import retro.pub.IdGenerator;

class Job{
	public var id : ID;
	public var type : RetroType;
	public var inputPorts : Array<Port>;
	public var outputPorts : Array<Port>;
	// 実行を移譲
	public var worker : Worker;

	public function new(){
		this.id = IdGenerator.getInstance.genID();
	}

	public function act(){
		this.worker.act();
	}
}