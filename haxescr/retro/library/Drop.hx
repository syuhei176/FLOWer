package retro.library;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.RetroType;

class Drop implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Drop";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input", RetroType.RNumber);
	}
	
	public function onInputRecieved(params:Params) {
		var input = params.get("input");
		if(input.isEmpty()) {
			return null;
		}
		var result = new Result();
		return result;
	}

	public function getModuleName() {
		return "core.Drop";
	}
}