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
class OutputPortView{

	public var pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var jobView:JobView;
	public var views : Array<PathView>;
	
	public var diagramController:DiagramController;
	public var port:OutputPort;
	private var editor:Editor;
	private var snap:Snap;
	private var thema:Thema;
	
	public function new(diagramController, jobview, port, snap, thema) {
		this.diagramController = diagramController;
		this.views = new Array<PathView>();
		this.jobView = jobview;
		this.port = port;
		this.snap = snap;
		this.thema = thema;
		
		//モデルの変更を監視
		this.port.onConnected(this.OnConnected);
		
		this.group = snap.group();
		this.graphic = snap.circle(0, 0, 30);
		var coll = snap.circle(0, 0, 30);
		this.pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    		   fill: "#ffffff",
    		   "fill-opacity" : 0,
    	});
			this.graphic.attr({
    		    fill: thema.output_color,
				stroke: thema.line_color,
				strokeWidth: 4
			});
			coll.mousedown(function(e, x, y) {
				this.diagramController.setRubberbandStart(this.port);
			});
		
		this.group.append(this.graphic);
		this.group.append(coll);
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
	public function refresh() {
		for(pathView in this.views) {
			pathView.refresh();
		}
	}
	public function addPos(x, y) {
		pos.setX(pos.getX() + x);
		pos.setY(pos.getY() + y);
		this.group.transform("translate(" + pos.getX() + "," + pos.getY() + ")");
	}
	public function setPos(x, y) {
		pos.setX(x);
		pos.setY(y);
		this.group.transform("translate(" + pos.getX() + "," + pos.getY() + ")");
	}
	public function getPos() {
		return Point2D.add(pos, this.jobView.getPos());
	}
	public function getLocalPos() {
		return pos;
	}
}