package retro.core;

import retro.core.Inputs;
import retro.core.Outputs;
import retro.core.Result;

interface JobComponent {
	private var name:String;
	private var inputs:Inputs;
	private var outputs:Outputs;
	
	public function onInputRecieved(params:Params):Result;
}