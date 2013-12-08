package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.controller.DiagramController;

/*
	Class Name:OutputPortView
	
	Method
	-getPos:グローバル座標を取得
	-getLocalPos:ローカル座標を取得
*/
class OutputPortView extends PortView{
	public var port:OutputPort;
	
	public function new(diagramController, jobview, port, snap, thema) {
		super(diagramController, jobview, snap, thema);
		this.port = port;
		//モデルの変更を監視
		this.port.onConnected(this.OnConnected);
		this.graphic.attr({
			fill: thema.output_color,
			stroke: thema.line_color,
			strokeWidth: 4
		});
		this.coll.mousedown(function(e, x, y) {
			this.diagramController.setRubberbandStart(this.port);
		});
	}
	
	/*
		OutputPortからInputPortまで接続されたときに呼ばれる
	*/
	public function OnConnected(o:OutputPort, i:InputPort) {
		var inputView = this.jobView.diagramView.getInputPortView(i);
		var pathView = new PathView(this.diagramController, this, inputView, this.snap, this.thema);
		this.views.push(pathView);
		inputView.views.push(pathView);
	}
	
	public function step() {
		if(this.views.length == 0) {
			return;
		}
		var force:Point2D = new Point2D(0, 0);
		for(pathView in this.views) {
			Point2D.addToSelf(force, Point2D.sub(pathView.target.getPos(), this.getPos()));
		}
		Point2D.timesToSelf(force, 0.01);
		var n = new Point2D(-Math.sin(this.th), Math.cos(this.th));
		//n.normalized();
		this.velocity += (force.getX() * n.getX() + force.getY() * n.getY()) / 100;
		
		if(this.velocity > Math.PI / 90) this.velocity = Math.PI / 90;
		if(this.velocity < -Math.PI / 90) this.velocity = -Math.PI / 90;
		this.th += this.velocity;
		this.setR(this.th);
		this.refresh();
	}

}
