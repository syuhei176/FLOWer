package retro.view;

import haxe.Timer;
import snap.Snap;
import retro.model.ValueCarrier;
import retro.pub.Point2D;

class ValueCarrierView {
	public var valueCarrier : ValueCarrier;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var diagramView:DiagramView;
	
	public var pos : Point2D;
	public var vec : Point2D;
	var timer:Timer;
	var count:Int;
	
	public function new(editor, valueCarrier, diagramView) {
		this.valueCarrier = valueCarrier;
		this.diagramView = diagramView;
		this.valueCarrier.onStep(OnStep);
		this.valueCarrier.onStep(OnStep);
		this.count = 0;
		
		var snap = editor.snap;
		var thema = editor.thema;
		this.pos = new Point2D(0, 0);
		this.group = snap.group();
		this.graphic = snap.circle(0, 0, 24);
		var text = snap.text(0, 0, valueCarrier.getValue().value);
		this.graphic.attr({
				fill: thema.contrast1_color,
				stroke: thema.contrast2_color,
				strokeWidth: 4
				});
		this.group.append(this.graphic);
		this.group.append(text);
		
		this.startPosition();
	}
	
	public function OnUsed() {
		this.remove();
	}
	public function OnStep() {
		this.addPos(this.vec.getX(), this.vec.getY());
	}
	
	public function remove() {
		this.group.remove();
	}
	
	public function startPosition() {
		var outputPortView = this.diagramView.getOutputPortView(this.valueCarrier.srcPort);
		var inputPortView = this.diagramView.getInputPortView(this.valueCarrier.destPort);
		this.vec = Point2D.sub(inputPortView.getPos(), outputPortView.getPos());
		Point2D.timesToSelf(this.vec, 0.05);
		this.setPos(outputPortView.getPos().getX(), outputPortView.getPos().getY());
	}
	public function addPos(x, y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	public function setPos(x, y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	public function endPosition() {
	
	}
	public function start(cb) {
		this.timer = new Timer(100);
		this.timer.run = function() {
			this.count++;
			if(this.count > 10) {
				this.timer.stop();
				this.count = 0;
				cb();
			}
		}
	}
}