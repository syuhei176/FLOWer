package library.messages;

import flower.JobComponent;
import externs.Inputs;
import externs.Outputs;
import flower.RetroType;

class Recieve implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = Custom("messages");
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "message.Recieve";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("from");
		this.outputs.add("message");
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var port = params.get("port");
		var from = params.get("from");
		var message = params.get("message");
		if( from == port ){
			cb(["message" => Msg(message)]);
		}
	}
	
	public function getModuleName() {
		return "message.Recieve";
	}
}