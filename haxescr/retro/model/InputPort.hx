package retro.model;

import retro.model.Value;

class InputPort extends Port {
	//model
	public var connection : Array<OutputPort>;
	private var value : ValueCarrier;
	//listeners
	private var onSetValueListeners:Array<ValueCarrier->Void>;
	private var onUseValueListeners:Array<Void->Void>;
	
	public function new(parent, type, name){
		super(parent, type, name);
		this.onSetValueListeners = new Array<ValueCarrier->Void>();
		this.onUseValueListeners = new Array<Void->Void>();
	}
	
	public function setValueCarrier(value:ValueCarrier) {
		this.value = value;
		this.fireOnSetValueListeners(this.value);
	}
	
	public function getValueCarrier():ValueCarrier {
		return this.value;
	}
	
	public function useValueCarrier() {
		var v = this.value;
		this.value = null;
		this.fireOnUseValueListeners();
		return v;
	}
	
	public function onSetValue(listener) {
		this.onSetValueListeners.push(listener);
	}
	
	public function onUseValue(listener) {
		this.onUseValueListeners.push(listener);
	}
	
	private function fireOnSetValueListeners(v) {
		for(l in this.onSetValueListeners) {
			l(v);
		}
	}
	
	private function fireOnUseValueListeners() {
		for(l in this.onUseValueListeners) {
			l();
		}
	}
}