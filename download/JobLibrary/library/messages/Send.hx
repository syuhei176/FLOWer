package library.messages;

import flower.JobComponent;
import externs.Inputs;
import externs.Outputs;
import flower.RetroType;

class Send implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Send";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("to");
		this.inputs.add("message");
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var port = params.get("to");
		var message = params.get("message");
		fire("messages",["port" => port, "message" => message ]);
		cb(null);
	}
	
	public function getModuleName() {
		return "message.Send";
	}
	

}