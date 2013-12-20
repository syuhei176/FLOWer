

package retro.library.snapsvg;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.RetroType;

class Circle implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Circle";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("snapsvg", RetroType.RNumber);
    		this.inputs.add("x", RetroType.RNumber);
		this.inputs.add("y", RetroType.RNumber);
		this.inputs.add("r", RetroType.RNumber);
		this.outputs.add("output", RetroType.RNumber);
	}
	
	public function onInputRecieved(params:Params, cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new Result();
		result.set("output", (input.getValue()));
		cb(result);
	}

	public function getModuleName() {
		return "snapsvg.Circle";
	}
}
