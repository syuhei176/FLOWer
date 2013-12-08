package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.controller.DiagramController;

class InputPortView extends PortView{

	public var port:InputPort;
	
	public function new(diagramController, jobview, port, snap, thema) {
		super(diagramController, jobview, snap, thema);
		this.port = port;
		this.graphic.attr({
			fill: thema.input_color,
			stroke: thema.line_color,
			strokeWidth: 4
		});
		this.coll.mouseup(function(e, x, y) {
			this.diagramController.setRubberbandEnd(this.port);
		});
	}
	
	public function step() {
		if(this.views.length == 0) {
			return;
		}
		var force:Point2D = new Point2D(0, 0);
		for(pathView in views) {
			Point2D.addToSelf(force, Point2D.sub(pathView.source.getPos(), this.getPos()));
		}
		Point2D.timesToSelf(force, 0.01);
		var n = new Point2D(-Math.sin(this.th), Math.cos(this.th));
		//n.normalized();
		this.velocity += (force.getX() * n.getX() + force.getY() * n.getY()) / 100;
		
		if(this.velocity > Math.PI / 90) this.velocity = Math.PI / 90;
		if(this.velocity < -Math.PI / 90) this.velocity = -Math.PI / 90;
		this.th += this.velocity;
		this.setR(this.th);
	}
	
}
