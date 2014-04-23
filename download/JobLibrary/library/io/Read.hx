package library.io;

import flower.JobComponent;
import externs.Inputs;
import externs.Outputs;
import flower.RetroType;

class Read implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = Custom("io.Read");
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "io.Read";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.outputs.add("read");
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void {
		var textarea  : js.html.TextAreaElement =cast js.Browser.document.getElementById("inputs");
		var button =  js.Browser.document.getElementById("read");
		button.onclick = function(event){ 
			fire("io.Read",["read" => textarea.value]); 
		};
	};
	
	public function work(params:Params, cb) {
		cb(["read"=>Msg(params.get("read"))]);
	}
	
	public function getModuleName() {
		return "io.Read";
	}
}