package library.core;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Times implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Times";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input1");
		this.inputs.add("input2");
		this.outputs.add("output");
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb(["output" => Msg(input1 * input2) ]);
	}

	public function getModuleName() {
		return "core.Times";
	}
}