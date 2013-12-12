package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.RetroType;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.model.Value;
import retro.model.ValueCarrier;
import retro.controller.DiagramController;

class InputPortView extends PortView{

	public var port:InputPort;
	private var constantValueGraphic:SnapElement;
	
	public function new(diagramController, jobview, port, snap, thema) {
		super(diagramController, jobview, snap, thema);
		this.port = port;
		this.port.onSetConstantValue(OnSetConstant);
		
		this.graphic.attr({
			fill: thema.bg_color,
			stroke: thema.base_color,
			strokeWidth: 4
		});
		
		this.coll.mouseup(function(e, x, y) {
			if(this.diagramController.setRubberbandEnd(this.port)) {
			
			}else{
				//set constant
				port.setConstant(new Value(RetroType.RNumber, 1));
			}
		});
	}
	
	public function step():Float {
		if(this.views.length == 0) {
			return 0;
		}
		var force:Point2D = new Point2D(0, 0);
		/*
		for(ipv in this.jobView.getInputPortViews()) {
			Point2D.addToSelf(force, Point2D.sub(this.getPos(), ipv.getPos()));
		}
		*/
		for(opv in this.jobView.getOutputPortViews()) {
			var coulomb = Point2D.sub(this.getPos(), opv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.1;
			Point2D.timesToSelf(coulomb, 1/r*140);
			Point2D.addToSelf(force, coulomb);
		}
		for(pathView in views) {
			var attraction = Point2D.sub(pathView.source.getPos(), this.getPos());
			var r = attraction.distance();
			if(r > 100) r = 100;
			Point2D.timesToSelf(attraction, r/120);
			Point2D.addToSelf(force, attraction);
		}
		Point2D.timesToSelf(force, 1);
		this.step_by_force(force);
		return this.velocity * this.velocity * 100;
	}
	
	public function OnSetConstant(v) {
		this.constantValueGraphic = this.snap.circle(0, 0, 24);
		var text = this.snap.text(0, 0, v.value);
		this.constantValueGraphic.attr({
				fill: this.thema.contrast1_color,
				stroke: this.thema.contrast2_color,
				strokeWidth: 4
				});
		this.group.append(this.constantValueGraphic);
		this.group.append(text);
	}
	
}
