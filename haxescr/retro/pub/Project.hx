package retro.pub;

class Project{
	public var diagram : Diagram;
	public function new(editor, ?model){
		trace(model);
		this.diagram = new Diagram(editor, model.model);
	}
}