package retro.core;

import retro.core.Inputs;
import retro.core.Outputs;
import retro.model.Job;
import snap.Snap;

interface JobComponent{
	var name:String;
	var inputs:Inputs;
	var outputs:Outputs;
	
	function onPlay(params:Params, cb : Result -> Void ) : Void;
	function work(params:Params, cb:Result->Void):Void;
	function getModuleName():String;
}