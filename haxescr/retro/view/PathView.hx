package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.InputPort;
import retro.pub.OutputPort;

class PathView{

	public var graphic:SnapElement;
	
	public var source:OutputPortView;
	public var target:InputPortView;
	private var editor:Editor;
	
	private var onRemoveListeners:Array<PathView->InputPort->Void>;
	
	public function new(editor, source_port, target_port) {
		this.onRemoveListeners = new Array<PathView->InputPort->Void>();
		this.editor = editor;
		this.source = source_port;
		this.target = target_port;
		this.graphic = editor.snap.line(0, 0, 0, 0);
		
		this.graphic.attr({
    	    fill: "#bada55",
    	    stroke: "#000",
    	    strokeWidth: 5
    	});
    	
    	this.graphic.drag(function(dx, dy, x, y) {
    		if(dx + dy > 3) {
		    	this.fireOnRemove(this, this.target.port);
    			this.graphic.remove();
    		}
    	});
    	
    	this.refresh();
    	
	}
	
	public function onRemove(listener) {
		this.onRemoveListeners.push(listener);
	}
	public function fireOnRemove(a, b) {
		for(l in this.onRemoveListeners) {
			l(a, b);
		}
	}
	
	public function refresh() {
		trace('r');
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