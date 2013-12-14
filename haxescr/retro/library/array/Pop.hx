package retro.library.array;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.RetroType;

class Pop implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Pop";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input", RetroType.RNumber);
		this.outputs.add("array", RetroType.RNumber);
		this.outputs.add("value", RetroType.RNumber);
	}
	
	public function onInputRecieved(params:Params, cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new Result();
		result.set("array", (input.getValue().pop()));
		result.set("value", (input.getValue()));
		cb(result);
	}
	
	public function getModuleName() {
		return "array.Pop";
	}
	

}