package retro.library.system;

import retro.core.JobComponent;
import retro.core.Inputs;
import retro.core.Params;
import retro.core.Outputs;
import retro.core.Result;
import retro.pub.Editor;
import retro.pub.RetroType;

class Scan implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	private var editor:Editor;
	
	public function new(editor) {
		this.name = "Scan";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input", RetroType.RNumber);
		this.outputs.add("output", RetroType.RNumber);
		this.editor = editor;
	}
	
	public function onInputRecieved(params:Params, cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		#if js
		this.editor.consoleView.scan(function(str:String) {
			var result = new Result();
			result.set("output", str);
			cb(result);
		});
		#else 
    	Sys.print(input.getValue());
    	#end
	}

	public function getModuleName() {
		return "system.Scan";
	}
}
