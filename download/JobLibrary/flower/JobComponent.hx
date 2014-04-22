package flower;

import externs.Inputs;
import externs.Outputs;
import externs.Params;

enum WorkEvent{
	AllRecieved;
	Recieved;
	Custom(name:String);
}

interface JobComponent{
	var name:String;
	var inputs:Inputs;
	var outputs:Outputs;
	var workEvent:WorkEvent;
	
	function onPlay(params:Params, cb : Result -> Void ) : Void;
	function work(params:Params, cb:Result->Void):Void;
	function getModuleName():String;
}