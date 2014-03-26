package flower;

import externs.Inputs;
import externs.Outputs;
import externs.Params;

interface JobComponent{
	var name:String;
	var inputs:Inputs;
	var outputs:Outputs;
	
	function onPlay(cb : Result -> Void ) : Void;
	function onInputRecieved(params:Params, cb:Result->Void):Void;
	function getModuleName():String;
}