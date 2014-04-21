package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Gate implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Gate";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input", RetroType.RNumber);
		this.inputs.add("gate", RetroType.RNumber);
		this.outputs.add("true", RetroType.RNumber);
		this.outputs.add("false", RetroType.RNumber);
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function onInputRecieved(params:Params, cb) {
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