package library.core;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Filter implements JobComponent {
	public var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function new() {
		this.name = "Filter";
		this.inputs = new Inputs();
		this.outputs = new Outputs();
		this.inputs.add("value", RetroType.RNumber);
		this.inputs.add("comparison", RetroType.RNumber);
		this.inputs.add("operator", RetroType.RString);
		this.outputs.add("pass", RetroType.RNumber);
	}

	public function onPlay(params:Params,cb : Result -> Void) : Void return;
	
	public function work(params:Params, cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var operator = params.get("operator");
		var pass = false;
		switch(operator) {
			case "eq","==":
				pass = (value == comparison);
			case "ne","!=":
				pass = (value != comparison);
			case "gt",">":
				pass = (value > comparison);
			case "lt","<":
				pass = (value < comparison);
			case "ge",">=":
				pass = (value >= comparison);
			case "le","<=":
				pass = (value <= comparison);
			default:
				cb(null);
				return;
		}
		if(pass == false) {
			cb(null);
			return;
		}
		cb(["pass"=>Msg(value)]);
	}

	public function getModuleName() {
		return "core.Filter";
	}
}