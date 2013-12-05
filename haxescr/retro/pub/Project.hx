package retro.pub;

class Project{
	public var diagram : Diagram;
	public function new(){
	}

	public static function newOpen(){
		var project = new Project();
		var diagram = new Diagram();
		project.diagram = diagram;

		var job = new Job();


	}
}