package library.map;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Setter implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Setter";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("key", RetroType.RNumber);
		this.inputs.add("value", RetroType.RNumber);
		this.outputs.add("result", RetroType.RNumber);
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function onInputRecieved(params:Params, cb) {
		var input1 = params.get("key");
		var input2 = params.get("value");
		Pod.getInstance().set(input1, input2);
		cb(["result" => Msg(true)]);
	}
	
	public function getModuleName() {
		return "map.Setter";
	}
	

}