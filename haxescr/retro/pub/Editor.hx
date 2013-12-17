package retro.pub;

import snap.Snap;
import retro.pub.IdGenerator;
import retro.model.Project;
import retro.model.Diagram;
import retro.view.Thema;
import retro.view.InputPortView;
import retro.view.OutputPortView;
import retro.view.ProjectView;
import retro.view.ConsoleView;
import retro.controller.ProjectController;
import retro.controller.DiagramController;
import retro.controller.ImportController;
import retro.controller.ExportController;
import retro.vm.Runtime;

class Editor{
	public var projectController : ProjectController;
	public var projectView : ProjectView;
	public var IdGenerator : retro.pub.IDGenerator;
	public var snap:Snap;
	public var thema:Thema;
	
	private var runtime:Runtime;
	private var retroClient:RetroClient;
	public var consoleView:ConsoleView;
	
	public function new(id_header, retroClient){
		this.thema = new Thema();
		this.snap = new Snap("#svg");
		this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
		this.retroClient = retroClient;
	}
	
	public function setProjectController(projectController) {
		this.projectController = projectController;
	}
	
	public function setProjectView(projectView) {
		this.projectView = projectView;
	}
	
	public function save_all(data) {
		this.retroClient.save_all(data);
	}
	
	public function getRuntime() {
	  	this.runtime = new retro.vm.Runtime(this.projectController.getProject().getRootDiagram());
	  	return this.runtime;
	}
	public static function create(editorkey, id_header){
		var retroClient = new RetroClient(editorkey);
		retroClient.init(function(data) {
			var editor = new Editor(id_header, retroClient);
			var project = new Project();
			//コントローラを作成
			var projectController = new ProjectController(editor, project);
			editor.setProjectController(projectController);
			//ビューを作成
			var projectView = new ProjectView(projectController, new ExportController(editor, project));
			editor.setProjectView(projectView);
			//インポートを実行
			if(data.model.diagram) {
				var importController = new ImportController(project, editor);
				importController.do_import(data);
			}else{
				var diagram = new Diagram();
				project.setRootDiagram(diagram);
				var diagramController = new DiagramController(editor, diagram);
				diagramController.addEntryJob();
			}
			editor.consoleView = new ConsoleView(editor);
		});
	}
}
