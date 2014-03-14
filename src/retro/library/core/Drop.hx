package retro.library.core;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.model.Job;
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
	
	public function onInputRecieved(params:Params, cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		cb();
	}

	public function getModuleName() {
		return "core.Drop";
	}
}