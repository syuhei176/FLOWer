package library.core;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Transistor implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Transistor";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("emitter");
		this.inputs.add("base");
		this.outputs.add("collector");
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