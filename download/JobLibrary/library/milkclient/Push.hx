package library.milkclient;

import milkcocoa.*;
import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Push implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "Push";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("milkcocoa");
		this.inputs.add("path");
		this.inputs.add("value");
	}
	
	public function onPlay(params:Params, cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var milkcocoa : MilkCocoa = params.get("milkcocoa");
		var path = params.get("path");
		var value = params.get("value");
		var dataStore : DataStore = milkcocoa.dataStore(path);
		dataStore.push(value);
	}
	
	public function getModuleName() {
		return "milkcocoa.Push";
	}
	

}