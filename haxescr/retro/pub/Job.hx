package retro.pub;

import retro.view.NodeView;

typedef ID = Int;

class Job{
	public var id : ID;
	public var inputPorts : Array<Port>;
	public var outputPorts : Array<Port>;
	public var view : JobView;
	// 実行を移譲
	public var worker : Worker;

	public function new(id, diagram, inputPorts, outputPorts){
		this.id = id;
		this.diagram = diagram;
		this.inputPorts = inputPorts;
		this.outputPorts = outputPorts;
	}

	public function clearExecute(){
		for( inputPort in this.inputPorts ){
			inputPort.clearParam();
		}

		for( output in this.outputPort ){
			outputPort.clearParam();
		}
	}

}