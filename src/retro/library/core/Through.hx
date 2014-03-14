package retro.library.core;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.model.Job;
import retro.pub.RetroType;

class Through implements JobComponent{
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Through";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input", RetroType.RNumber);
		this.outputs.add("output", RetroType.RNumber);
	}
	
	public function onInputRecieved(params:Params, cb) {
		var input = params.get("input");
		cb(["output" => Msg(input)]);
	}

	public function getModuleName() {
		return "core.Through";
	}
}