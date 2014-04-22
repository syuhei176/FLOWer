package library.map;

import flower.JobComponent;
import externs.Inputs;

import externs.Outputs;

import flower.RetroType;

class Getter implements JobComponent {
    public var name:String;
    public var inputs:Inputs;
    public var outputs:Outputs;
	public var workEvent:WorkEvent = AllRecieved;
	public var fire : EventName -> Params -> Void;
    
    public function new() {
        this.name = "Getter";
        this.inputs = new Inputs();
        this.outputs = new Outputs();
        this.inputs.add("key");
        this.outputs.add("value");
        this.outputs.add("exists");
    }

    public function onPlay(params:Params,cb : Result -> Void) : Void return;
    
    public function work(params:Params, cb) {
        var key = params.get("key");
        var exists = Pod.getInstance().exists(key);
        var value = Pod.getInstance().get(key);
        cb(["exists"=> Msg(exists), "value"=>Msg(value)]);
    }
    
    public function getModuleName() {
        return "map.Getter";
    }
    
}
