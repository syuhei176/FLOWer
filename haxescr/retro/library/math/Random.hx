

package retro.library.math;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.RetroType;

class Random implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Random";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("v", RetroType.RNumber);
    	this.outputs.add("output", RetroType.RNumber);
	}
	
	public function onInputRecieved(params:Params, cb) {
		var v = params.get("v");
		if(v.isEmpty()) {
			cb(null);
			return;
		}
		var result = new Result();
		result.set("output", v.getValue() * Math.random());
		cb(result);
	}

	public function getModuleName() {
		return "math.Random";
	}
}
