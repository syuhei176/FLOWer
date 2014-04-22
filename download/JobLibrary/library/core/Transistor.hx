package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Transistor implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Transistor";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("emitter", RetroType.RNumber);
		this.inputs.add("base", RetroType.RNumber);
		this.outputs.add("collector", RetroType.RNumber);
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var emitter = params.get("emitter");
		cb(["collector" => Msg(emitter)]);
	}
	
	public function getModuleName() {
		return "core.Transistor";
	}
	

}