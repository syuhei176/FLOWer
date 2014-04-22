package retro.core;

import retro.core.Inputs;
import retro.core.Outputs;
import retro.model.Job;
import snap.Snap;
import retro.model.Job;

enum WorkEvent{
	AllRecieved;
	Recieved;
	Custom(name:String);
}

typedef EventName = String;

interface JobComponent{
	var name:String;
	var inputs:Inputs;
	var outputs:Outputs;
	var workEvent:WorkEvent;
	var fire : EventName -> Params -> Void;
	
	function onPlay(params:Params, cb : Result -> Void ) : Void;
	function work(params:Params, cb:Result->Void):Void;
	function getModuleName():String;
}