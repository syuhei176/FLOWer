package retro.model;

import retro.core.JobComponent;
import retro.pub.RetroType;

class SymbolicLink extends Job{

	private var prototype : JobComponent;
	
	public function new(id, jobComponent) {
		super(id);
		this.prototype = jobComponent;
		for(ip in this.prototype.inputs.getArray()) {
			this.addInputPort(new InputPort(this, ip.getType(), ip.getName()));
		}
		for(op in this.prototype.outputs.getArray()) {
			this.addOutputPort(new OutputPort(this, op.getType(), op.getName()));
		}
	}
	
	public function getPrototype() {
		return this.prototype;
	}
}