package library.milkclient;

import milkcocoa.*;
import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class On implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	public var workEvent:WorkEvent;
	public var fire : EventName -> Params -> Void;
	
	public function new() {
		this.name = "On";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("event");
		this.inputs.add("path");
		this.outputs.add("outputs");
	}
	
	public function onPlay(params:Params, cb : Result -> Void) : Void{
		var event = params.get("event");
		var path = params.get("path");
		trace(path);
		this.workEvent = Custom("milkcocoa.push." + event + path);
		var dataStore = MilkClient.milkcocoa.dataStore(path);
		dataStore.on(event,function(data){
			fire("milkcocoa.push." + event + path, ["outputs" => data.value]);
			});
	};
	
	public function work(params:Params, cb) {
		var data = params.get("outpus");
		cb(["outputs" => Msg(data)]);
	}
	
	public function getModuleName() {
		return "milkcocoa.On";
	}
	

}