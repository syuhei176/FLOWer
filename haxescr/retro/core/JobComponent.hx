package retro.core;

import retro.core.Inputs;
import retro.core.Outputs;
import retro.core.Result;

interface JobComponent {
	private var name:String;
	public var inputs:Inputs;
	public var outputs:Outputs;
	
	public function onInputRecieved(params:Params):Result;
}