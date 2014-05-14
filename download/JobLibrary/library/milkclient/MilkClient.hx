package library.milkclient;

import milkcocoa.*;
import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class MilkClient implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	public static var milkcocoa : MilkCocoa;

	public function new() {
		this.name = "MlikCCocoa";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("host");
	}
	
	public function onPlay(params:Params, cb : Result -> Void) : Void{
		var host = params.get("host");
		trace(host);
		var milkcocoa = new MilkCocoa(host);
		MilkClient.milkcocoa = milkcocoa;
	}

	
	
	public function work(params:Params, cb) {
	}
	
	public function getModuleName() {
		return "milkcocoa.MilkCocoa";
	}
	

}