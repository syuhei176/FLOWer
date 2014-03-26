package retro.library.core;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.model.Job;
import retro.pub.RetroType;

class Entry implements JobComponent{
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var ready : Bool;

	public function new() {
		this.name = "Entry";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.outputs.add("output", RetroType.RNumber);
	}
	
	public function onPlay(cb : Result -> Void)
		cb( ["output"=>Msg(1)] );
	
	public function onInputRecieved(params:Params, cb) return;
	
	public function getModuleName() {
		return "core.Entry";
	}
}