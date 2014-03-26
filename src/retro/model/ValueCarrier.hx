package retro.model;

import haxe.Timer;

class ValueCarrier {
	public var value:Value;
	public var srcPort : OutputPort;
	public var destPort : InputPort;
	//listeners
	private var onStepListeners:Array<(Void->Void)->Void>;
	
	public var count = 0;
	
	public function new(value, src, dest) {
		this.value = value;
		this.srcPort = src;
		this.destPort = dest;
		this.count = 0;
		this.onStepListeners = new Array<(Void->Void)->Void>();
	}
	
	public function step( callback : InputPort -> Void ) {
		this.fireOnStepListeners(function(){
			callback(this.destPort);
			});
	}
	
	public function getValue() {
		return this.value;
	}
	
	public function onStep(listener) {
		this.onStepListeners.push(listener);
	}
	
	private function fireOnStepListeners(callback : Void -> Void) {
		for(l in this.onStepListeners) {
			l(callback);
		}
	}
}