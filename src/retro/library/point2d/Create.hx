

package retro.library.point2d;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.model.Job;
import retro.pub.RetroType;

class Create implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Create";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("point2d", RetroType.RNumber);
    		this.inputs.add("x", RetroType.RNumber);
		this.inputs.add("y", RetroType.RNumber);
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
		return "point2d.Create";
	}
}
