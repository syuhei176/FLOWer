package retro.view;

import haxe.Json.*;
import js.Browser.*;
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
		this.port.onRemoveConstantValue(OnRemoveConstant);
		
		this.graphic.attr({
			fill: thema.bg_color,
			stroke: thema.base_color,
			strokeWidth: 3
		});
		
		var text = snap.text(26, 0, port.getName());
		text.attr({
			"font-size" : "12px",
			fill : thema.font_color
		});
		this.group.append(text);
		
		
		this.coll.mouseup(function(e, x, y) {
			if(this.diagramController.setRubberbandEnd(this.port)) {
				this.diagramController.clearRubberband();
			}else{
				//set constant
				/*var v = window.prompt("","");
				if(v != null) {
					this.port.setConstant(new Value(RetroType.RNumber, haxe.Json.parse(v)));
				}*/
			}
		});
		this.setPos(0, 0);
	}
	
	public function step():Float {
		if(this.views.length == 0) {
			//return 0;
		}
		var force:Point2D = new Point2D(0, 0);
		for(opv in this.jobView.getPortViews()) {
			var coulomb = Point2D.sub(this.getPos(), opv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.01;
			Point2D.timesToSelf(coulomb, 1/r*100);
			Point2D.addToSelf(force, coulomb);
		}
		for(pathView in this.views) {
			var attraction = Point2D.sub(pathView.source.getPos(), this.getPos());
			var r = attraction.distance();
			if(r > 1000) r = 1000;
			Point2D.timesToSelf(attraction, r/120);
			Point2D.addToSelf(force, attraction);
		}
		Point2D.timesToSelf(force, 1);
		this.step_by_force(force);
		return this.velocity * this.velocity * 100;
	}
	
	public function OnSetConstant(v) {
		this.constantValueGraphic = this.snap.group();
		var graphic = this.snap.circle(0, 0, 18);
		var text = this.snap.text(-5, 5, haxe.Json.stringify(v.value));
		graphic.attr({
				fill: this.thema.contrast1_color,
				stroke: this.thema.contrast2_color,
				strokeWidth: 4
				});
		this.constantValueGraphic.append(graphic);
		this.constantValueGraphic.append(text);
		this.group.append(this.constantValueGraphic);
		graphic.click(function(e) {
			this.port.removeConstant();
		});
	}
	
	public function OnRemoveConstant() {
		this.constantValueGraphic.remove();
	}
	
}
