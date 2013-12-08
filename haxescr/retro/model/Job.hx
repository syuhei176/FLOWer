package retro.model;

import retro.pub.IdGenerator;
import retro.view.JobView;
import retro.pub.Editor;
import retro.pub.RetroType;
import retro.pub.Worker;

class Job{
	public var id : ID;
	public var type : RetroType;
	public var inputPorts : Array<InputPort>;
	public var outputPorts : Array<OutputPort>;
	
	private var onInputPortAddedListeners:Array<InputPort->Void>;
	private var onOutputPortAddedListeners:Array<OutputPort->Void>;
	private var onInputPortRemovedListeners:Array<InputPort->Void>;
	private var onOutputPortRemovedListeners:Array<OutputPort->Void>;
	
	// 実行を移譲
	public var worker : Worker;
	public var jobView : JobView;
	
	public function new(id){
		this.id = id;
		this.inputPorts = new Array<InputPort>();
		this.outputPorts = new Array<OutputPort>();
		this.onInputPortAddedListeners = new Array<InputPort->Void>();
		this.onOutputPortAddedListeners = new Array<OutputPort->Void>();
		this.onInputPortRemovedListeners = new Array<InputPort->Void>();
		this.onOutputPortRemovedListeners = new Array<OutputPort->Void>();
	}
	
	public function getId() {
		return this.id;
	}
	
	public function addInputPort(port : InputPort) {
		this.fireOnInputPortAddedListeners(port);
		this.inputPorts.push(port);
	}
	public function addOutputPort(port : OutputPort) {
		this.fireOnOutputPortAddedListeners(port);
		this.outputPorts.push(port);
	}
	public function removeInputPort(port : InputPort) {
		this.fireOnInputPortRemovedListeners(port);
		this.inputPorts.remove(port);
	}
	public function removeOutputPort(port : OutputPort) {
		this.fireOnOutputPortRemovedListeners(port);
		this.outputPorts.remove(port);
	}
	
	public function act(cb){
		if(this.worker == null) {
			this.worker = new Worker(this);
		}
		this.worker.act(cb);
	}
	
	public function getInputPort(name:String) {
		for(p in inputPorts) {
			if(name == p.name) {
				return p;
			}
		}
		return null;
	}
	
	public function onInputPortAdded(listener) {
		this.onInputPortAddedListeners.push(listener);
	}
	
	private function fireOnInputPortAddedListeners(j) {
		for(l in this.onInputPortAddedListeners) {
			l(j);
		}
	}
	
	public function onOutputPortAdded(listener) {
		this.onOutputPortAddedListeners.push(listener);
	}
	
	private function fireOnOutputPortAddedListeners(j) {
		for(l in this.onOutputPortAddedListeners) {
			l(j);
		}
	}
	
	public function onInputPortRemoved(listener) {
		this.onInputPortRemovedListeners.push(listener);
	}
	
	private function fireOnInputPortRemovedListeners(j) {
		for(l in this.onInputPortRemovedListeners) {
			l(j);
		}
	}
	
	public function onOutputPortRemoved(listener) {
		this.onOutputPortRemovedListeners.push(listener);
	}
	
	private function fireOnOutputPortRemovedListeners(j) {
		for(l in this.onOutputPortRemovedListeners) {
			l(j);
		}
	}
}