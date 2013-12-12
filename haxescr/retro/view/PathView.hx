package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.controller.DiagramController;

/*
	Class Name:PathView
	
	Event
	-onRemove:パスが削除されたときに呼ばれる
	Method
*/
class PathView{

	public var graphic:SnapElement;
	
	public var source:OutputPortView;
	public var target:InputPortView;
	
	private var diagramController:DiagramController;
	private var snap:Snap;
	private var thema:Thema;
	
	private var onRemoveListeners:Array<PathView->InputPort->Void>;
	
	public function new(diagramController, source_port, target_port, snap, thema) {
		this.onRemoveListeners = new Array<PathView->InputPort->Void>();
		this.diagramController = diagramController;
		this.source = source_port;
		this.target = target_port;
		this.snap = snap;
		this.thema = thema;
		//モデルの変更を監視
		this.source.port.onDisconnected(this.onDisconnect);
		
		this.graphic = this.snap.line(0, 0, 0, 0);
		
		this.graphic.attr({
    	    stroke: thema.path_color,
    	    strokeWidth: 5
    	});
    	
    	this.graphic.drag(function(dx, dy, x, y) {
    		if(dx + dy > 3) {
    			DiagramController.disconnect(this.source.port, this.target.port);
    		}
    	});
    	
    	this.refresh();
    	
	}
	
	public function onDisconnect(o, i) {
		if(this.target.port != i) return;
    	this.graphic.remove();
    	this.source.views.remove(this);
    	this.target.views.remove(this);
	}
	
	public function refresh() {
		var xx = this.target.getPos().getX() - this.source.getPos().getX();
		var yy = this.target.getPos().getY() - this.source.getPos().getY();
		var len = Math.sqrt(xx * xx + yy * yy);
		xx = xx / len;
		yy = yy / len;
		this.graphic.attr({
			x1 : this.source.getPos().getX() + xx*30,
			y1 : this.source.getPos().getY() + yy*30,
			x2 : this.target.getPos().getX() - xx*30,
			y2 : this.target.getPos().getY() - yy*30
		});
	}
}
