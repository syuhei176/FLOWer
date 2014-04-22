package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Equal implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Equal";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("value", RetroType.RNumber);
		this.inputs.add("comparison", RetroType.RNumber);
		this.outputs.add("result", RetroType.RNumber);
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var result = new Result();
		cb(["result" => Msg(value == comparison) ]);
	}

	public function getModuleName() {
		return "core.Equal";
	}
}