package retro.pub;

import retro.pub.IdGenerator;
import retro.view.Thema;
import snap.Snap;

class Editor{
	public var project : Project;
	public var IdGenerator : retro.pub.IDGenerator;
	public var snap:Snap;
	public var thema:Thema;
	
	public function new(id_header){
		this.thema = new Thema();
		this.snap = new Snap("#svg");
		this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
	}
	public function setProject(project) {
		this.project = project;
	}
	public static function create(editorkey, id_header){
		var client = new RetroClient(editorkey);
		client.init(function(data) {
			var editor = new Editor(id_header);
			var project = new Project(editor, data);
			editor.setProject(project);
		});
	}
}