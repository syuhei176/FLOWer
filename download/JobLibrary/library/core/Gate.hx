package library.core;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Gate implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Gate";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input");
		this.inputs.add("gate");
		this.outputs.add("true");
		this.outputs.add("false");
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var input = params.get("input");
		var gate = params.get("gate");
		if( gate ){
			cb(["true" => Msg(input), "false" => NoMsg]);
		}else{
			cb(["true" => NoMsg, "false" => Msg(input)]);
		};
	}
	
	public function getModuleName() {
		return "core.Gate";
	}
	

}