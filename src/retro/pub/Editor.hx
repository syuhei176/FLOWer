package retro.pub;

import snap.Snap;
import retro.core.VirtualDevice;
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
	private var editorkey:String;
	public var projectController : ProjectController;
	public var projectView : ProjectView;
	public var IdGenerator : retro.pub.IDGenerator;
	public var snap:Snap;
	public var virtualDevice:VirtualDevice;
	
	private var runtime:Runtime;
	private var retroClient:RetroClient;
	
	public function new(?id_header, ?retroClient, ?editorkey){
		this.snap = new Snap("#svg");
		var rect = snap.rect(0,0, js.Browser.window.screen.width, js.Browser.window.screen.height);
		rect.attr({ fill: "#3498DB" });
		snap.append(rect);
		this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
		this.retroClient = retroClient;
		this.editorkey = editorkey;
	}
	
	public function getEditorKey() {
		return this.editorkey;
	}
	
	public function setProjectController(projectController) {
		this.projectController = projectController;
	}
	
	public function setProjectView(projectView) {
		this.projectView = projectView;
	}
	
	public function save_all(data) {
		#if raspi
		this.retroClient.save_all(data);
		#elseif browser
		var zip = new JSZip();
		zip.file("flower.json", haxe.Json.stringify(data));
		zip.file("flower.svg", snap.toString());
		var content = zip.generate();
		js.Browser.location.href = "data:application/zip;base64,"+content;
		#end
	}
	
	public function getRuntime() {
	  	this.runtime = new retro.vm.Runtime(this.projectController.getProject().getRootDiagram());
	  	return this.runtime;
	}

	public static function create(){
		Library.init();
		CreateJobDialog.init();
		var editor = new Editor();
		editor.IdGenerator = retro.pub.IDGenerator.getInstance("codeIQ");
		var project = new Project();
		var projectController = new ProjectController(editor, project);
		editor.setProjectController(projectController);
		var virtualDevice = new VirtualDevice();
		editor.virtualDevice = virtualDevice;
		var projectView = new ProjectView(projectController, new ExportController(editor, project), new ImportController(project, virtualDevice));
		editor.setProjectView(projectView);
		var consoleDevice = new ConsoleView(editor.snap);
		virtualDevice.setConsoleDevice(consoleDevice);
		var snap = new Snap();
		snap.attr({
			"id" : "sub_svg",
			"class" : "modal"
			});
		virtualDevice.setSVGDevice(snap);
		var diagram = new Diagram();
		project.setRootDiagram(diagram);
		var diagramController = new DiagramController(editor, diagram, virtualDevice);
	}
}
