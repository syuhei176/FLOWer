package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Times implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Times";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input1", RetroType.RNumber);
		this.inputs.add("input2", RetroType.RNumber);
		this.outputs.add("output", RetroType.RNumber);
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