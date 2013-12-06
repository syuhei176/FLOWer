package retro.pub;

import retro.pub.IdGenerator;

class Editor{
	public var diagram : Diagram;
	public var IdGenerator : retro.pub.IDGenerator;
	public function new(diagram){
		this.diagram = diagram;
		this.IdGenerator = retro.pub.IDGenerator.getInstance("a");
	}
}