package retro.model;

/*
	OutputPortクラス（Model）
	Event
	-onConnected:入力ポートとコネクトされたときに呼ばれるハンドラ
	-onDisconnected:入力ポートとディスコネクトされたときに呼ばれるハンドラ
*/
class OutputPort extends Port {
	public var connection : Array<InputPort>;
	
	private var onConnectedListeners:Array<OutputPort->InputPort->Void>;
	private var onDisconnectedListeners:Array<OutputPort->InputPort->Void>;
	
	public function new(parent, type, name){
		super(parent, type, name);
		this.connection = new Array<InputPort>();
		this.onConnectedListeners = new Array<OutputPort->InputPort->Void>();
		this.onDisconnectedListeners = new Array<OutputPort->InputPort->Void>();
	}
	
	public function getConnections() {
		return this.connection;
	}
	
	public function connectToInputPort(port:InputPort) {
		this.fireOnConnectedListeners(this, port);
		this.connection.push(port);
	}
	public function disconnectToInputPort(port:InputPort) {
		this.fireOnDisconnectedListeners(this, port);
		this.connection.remove(port);
	}
	
	public function onConnected(listener) {
		this.onConnectedListeners.push(listener);
	}
	
	public function onDisconnected(listener) {
		this.onDisconnectedListeners.push(listener);
	}
	
	private function fireOnConnectedListeners(o,i) {
		for(l in this.onConnectedListeners) {
			l(o,i);
		}
	}
	
	private function fireOnDisconnectedListeners(o,i) {
		for(l in this.onDisconnectedListeners) {
			l(o,i);
		}
	}
	
}

