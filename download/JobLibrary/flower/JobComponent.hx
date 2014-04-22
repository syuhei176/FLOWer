package flower;

import externs.Inputs;
import externs.Outputs;

enum WorkEvent{
	AllRecieved;
	Recieved;
	Custom(name:String);
}

enum Message{
	NoMsg;
	Msg(i:Dynamic);
}

typedef EventName = String;

typedef Result = Map<String,Message>;
typedef Params = Map<String, Dynamic>;

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