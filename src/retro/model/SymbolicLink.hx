package retro.model;

import retro.core.JobComponent;
import retro.pub.RetroType;
import retro.core.Params;
import retro.model.Job;

class SymbolicLink extends Job{

	private var prototype : JobComponent;
	
	public function new(id, jobComponent) {
		super(id);
		this.prototype = jobComponent;
		this.customDraw = Reflect.getProperty(jobComponent,"customDraw");
		this.onPlay = function(){
			var onPlay = Reflect.getProperty(this.prototype, "onPlay");
			if( onPlay != null) Reflect.callMethod(this.prototype, onPlay, []);
		}
		this.onStop = function(){
			var onPlay = Reflect.getProperty(this.prototype, "onStop");
			if( onPlay != null) Reflect.callMethod(this.prototype, onStop, []);
		}

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
	
	override function getName() {
		return this.prototype.getModuleName();
	}
	
	override function work(cb : Result -> Void) : Void 
		this.prototype.onInputRecieved(this.getParams(), cb);


	override function isReady(){
		var protoReady = Reflect.getProperty(this.prototype, "isReady");
		return super.isReady() && if(protoReady != null) Reflect.callMethod(this.prototype, protoReady, []) else true;
	}
	
	
	
	override function getJSON() {
		var json:Dynamic = {};
		json.id = this.getId();
		json.ref = this.getName();
		return json;
	}
	
}