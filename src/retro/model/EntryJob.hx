package retro.model;

import retro.model.Job;

class EntryJob extends Job{

	public function new(id){
		super(id);
	}
	
	override public function getName() {
		return "Entry";
	}
	
	override public function work(cb)
		return cb([ "output" => Msg(1) ]);
}