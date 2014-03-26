package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Entry implements JobComponent{
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;

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