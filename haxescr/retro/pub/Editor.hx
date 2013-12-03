package retro.pub;

class Editor{
	public var view : EditorView;
	public var diagram : Diagram;

	public function new(diagram){
		this.diagram = diagram;
	}

	public function run(){
		this.diagram.run();
	}

	public function stop(){
		this.diagram.stop();
	}
}