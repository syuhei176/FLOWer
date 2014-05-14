package library.core;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Not implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Not";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("input");
		this.outputs.add("output");
	}
	
	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var input = params.get("input");
		cb(["output" => Msg(!input) ]);
	}
	
	public function getModuleName() {
		return "core.Not";
	}
	

}