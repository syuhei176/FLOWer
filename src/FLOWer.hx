package ;

import haxe.macro.Expr;
import retro.pub.Editor;
import retro.controller.DiagramController;

@:expose
class FLOWer{
	private var diagramController : DiagramController;
	public function new(){
		this.diagramController = Editor.create();
	}

	public function setJob(pkg, cmp, x, y){
		var jobComponent = this.diagramController.getModule(pkg + "." + cmp);
		var job = this.diagramController.addSymbolicLink(jobComponent);
		job.setPos(x, y);
	}
}

