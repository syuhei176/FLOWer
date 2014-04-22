package library.milkclient;

import milkcocoa.*;
import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class MilkClient implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "MlikCCocoa";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("host", RetroType.RNumber);
	}
	
	public function onPlay(params:Params, cb : Result -> Void) : Void{
		var host = params.get("host");
		var milkcocoa = new MilkCocoa(host);
	}

	
	
	public function work(params:Params, cb) {
	}
	
	public function getModuleName() {
		return "milkcocoa.MilkCocoa";
	}
	

}