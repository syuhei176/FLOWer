package library.io;

import flower.JobComponent;
import externs.Inputs;
import externs.Outputs;
import flower.RetroType;

class Print implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "io.Print";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("print");
		this.outputs.add("outputs");
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var print = params.get("print");
		var textarea  : js.html.TextAreaElement = cast js.Browser.document.getElementById("outputs");
		textarea.textContent += print;
		cb(["outputs" => Msg(print)]);
	}
	
	public function getModuleName() {
		return "io.Print";
	}
}