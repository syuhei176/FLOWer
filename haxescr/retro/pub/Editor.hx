package retro.pub;

import retro.pub.IdGenerator;
import retro.view.Thema;
import retro.view.PortView;
import snap.Snap;

class Editor{
	public var project : Project;
	public var IdGenerator : retro.pub.IDGenerator;
	public var snap:Snap;
	public var thema:Thema;
	//ラバーバンド
	public var start : PortView;
	public var end : PortView;
	
	public function new(id_header){
		this.thema = new Thema();
		this.snap = new Snap("#svg");
		this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
	}
	public function setProject(project) {
		this.project = project;
	}
	
	public function setStart(start) {
		this.start = start;
	}
	
	public function setEnd(end) {
		this.end = end;
		this.connect();
	}
	
	public function connect() {
		this.start.connect(this.end);
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