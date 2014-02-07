package retro.library.core;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.RetroType;

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
	
	public function onInputRecieved(params:Params, cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		if(value.isEmpty() || comparison.isEmpty()) {
			cb(null);
			return;
		}
		var result = new Result();
		result.set("result", value.getValue() == comparison.getValue() );
		cb(result);
	}

	public function getModuleName() {
		return "core.Equal";
	}
}