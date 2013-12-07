package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.InputPort;
import retro.pub.OutputPort;

class PathView{

	public var graphic:SnapElement;
	
	public var source:PortView;
	public var target:PortView;
	private var editor:Editor;
	
	public function new(editor, source_port, target_port) {
		this.editor = editor;
		this.source = source_port;
		this.target = target_port;
		this.graphic = editor.snap.line(0, 0, 0, 0);
		
		this.graphic.attr({
    	    fill: "#bada55",
    	    stroke: "#000",
    	    strokeWidth: 5
    	});
    	
    	this.refresh();
    	
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