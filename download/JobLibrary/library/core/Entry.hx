package library.core;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Entry implements JobComponent{
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;

	public function new() {
		this.name = "Entry";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.outputs.add("output");
	}
	
	public function onPlay(params:Params,cb : Result -> Void)
		cb( ["output"=>Msg(1)] );
	
	public function work(params:Params, cb) return;
	
	public function getModuleName() {
		return "core.Entry";
	}
}