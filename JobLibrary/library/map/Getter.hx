package library.map;

import flower.JobComponent;
import externs.Inputs;
import externs.Params;
import externs.Outputs;
import flower.Result;
import flower.RetroType;

class Getter implements JobComponent {
    public var name:String;
    public var inputs:Inputs;
    public var outputs:Outputs;
    
    public function new() {
        this.name = "Getter";
        this.inputs = new Inputs();
        this.outputs = new Outputs();
        this.inputs.add("key", RetroType.RNumber);
        this.outputs.add("value", RetroType.RNumber);
        this.outputs.add("exists", RetroType.RNumber);
    }

    public function onPlay(cb : Result -> Void) : Void return;
    
    public function onInputRecieved(params:Params, cb) {
        var key = params.get("key");
        var exists = Pod.getInstance().exists(key);
        var value = Pod.getInstance().get(key);
        cb(["exists"=> Msg(exists), "value"=>Msg(value)]);
    }
    
    public function getModuleName() {
        return "map.Getter";
    }
    
}
