package ;

import haxe.macro.Expr;
import retro.pub.Editor;
import retro.controller.DiagramController;
import retro.view.ValueCarrierView;

@:expose
class FLOWer{
	private var diagramController : DiagramController;

	public function new(svgID,headerID,view){
		this.diagramController = Editor.create(svgID,headerID,view);
		ValueCarrierView.speed = 1000;
	}

	public function setSpeed(s:Int){
		ValueCarrierView.speed = s;
	}

	public function getSpeed():Int{
		return ValueCarrierView.speed;
	}

	public function setJob(pkg, cmp, x, y){
		var jobComponent = this.diagramController.getModule(pkg + "." + cmp);
		var job = this.diagramController.addJob(jobComponent);
		job.setPos(x, y);
	}

	public function setModelData(data:Dynamic){
		var diagram = this.diagramController.getDiagram();
		this.diagramController.getEditor().importController.import_diagram(diagram,data.diagram);
	}

	public function getModelData() : String{
		var data = this.diagramController.getEditor().exportController.do_export();
		return haxe.Json.stringify(data);
	}

	public function clear(){
		var diagram = this.diagramController.getDiagram();
		diagram.removeAllJob();
	}
}


