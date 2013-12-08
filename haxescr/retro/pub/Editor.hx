package retro.pub;

import retro.pub.IdGenerator;
import retro.model.Project;
import retro.view.Thema;
import retro.view.InputPortView;
import retro.view.OutputPortView;
import retro.view.ProjectView;
import retro.controller.ProjectController;
import retro.controller.ImportController;
import snap.Snap;

class Editor{
	public var projectController : ProjectController;
	public var projectView : ProjectView;
	public var IdGenerator : retro.pub.IDGenerator;
	public var snap:Snap;
	public var thema:Thema;
	
	public function new(id_header){
		this.thema = new Thema();
		this.snap = new Snap("#svg");
		this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
	}
	
	public function setProjectController(projectController) {
		this.projectController = projectController;
	}
	
	public function setProjectView(projectView) {
		this.projectView = projectView;
	}
	
	public static function create(editorkey, id_header){
		var client = new RetroClient(editorkey);
		client.init(function(data) {
			var editor = new Editor(id_header);
			var project = new Project();
			//コントローラを作成
			var projectController = new ProjectController(editor, project);
			editor.setProjectController(projectController);
			//ビューを作成
			var projectView = new ProjectView(projectController);
			editor.setProjectView(projectView);
			//インポートを実行
			var importController = new ImportController(editor, project);
			importController.do_import(data);
		});
	}
}