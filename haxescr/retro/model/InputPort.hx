package retro.model;

import retro.model.Value;

class InputPort extends Port {
	//model
	public var connection : Array<OutputPort>;
	private var value : ValueCarrier;
	private var constantValue : Value;
	//listeners
	private var onSetValueListeners:Array<ValueCarrier->Void>;
	private var onUseValueListeners:Array<Void->Void>;
	private var onSetConstantValueListeners:Array<Value->Void>;
	
	public function new(parent, type, name){
		super(parent, type, name);
		this.onSetValueListeners = new Array<ValueCarrier->Void>();
		this.onUseValueListeners = new Array<Void->Void>();
		this.onSetConstantValueListeners = new Array<Value->Void>();
	}
	
	public function setValueCarrier(value:ValueCarrier) {
		this.value = value;
		this.fireOnSetValueListeners(this.value);
	}
	
	public function getValueCarrier():ValueCarrier {
		return this.value;
	}
	
	public function getValue():Value {
		if(this.constantValue != null) {
			return this.constantValue;
		}else{
			if(this.value == null) {
				return null;
			}
			return this.value.getValue();
		}
	}
	
	public function useValueCarrier() {
		var v = this.value;
		this.value = null;
		this.fireOnUseValueListeners();
		return v;
	}
	
	//定数を設定
	public function setConstant(value:Value) {
		this.constantValue = value;
		this.fireOnSetConstantValueListeners(this.constantValue);
	}
	
	public function onSetValue(listener) {
		this.onSetValueListeners.push(listener);
	}
	
	public function onUseValue(listener) {
		this.onUseValueListeners.push(listener);
	}
	
	public function onSetConstantValue(listener) {
		this.onSetConstantValueListeners.push(listener);
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
	private function fireOnSetConstantValueListeners(v) {
		for(l in this.onSetConstantValueListeners) {
			l(v);
		}
	}
}