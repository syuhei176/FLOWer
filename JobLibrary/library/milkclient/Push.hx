package library.milkclient;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Push implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Push";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("milkcocoa", RetroType.RNumber);
		this.inputs.add("path", RetroType.RNumber);
		this.inputs.add("value", RetroType.RNumber);
	}
	
	public function onPlay(params:Params, cb : Result -> Void) : Void return;
	
	public function onInputRecieved(params:Params, cb) {
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