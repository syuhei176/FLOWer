package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;

class InputPortView{

	public var pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var jobView:JobView;
	public var views : Array<PathView>;
	
	public var port:InputPort;
	private var editor:Editor;
	private var onConnectionListeners:Array<OutputPort->InputPort->Void>;
	
	public function new(jobview, port, snap, thema) {
		this.views = new Array<PathView>();
		this.onConnectionListeners = new Array<OutputPort->InputPort->Void>();
		this.jobView = jobview;
		this.port = port;
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
    		    fill: thema.input_color,
				stroke: thema.line_color,
				strokeWidth: 4
			});
			coll.mouseup(function(e, x, y) {
				//this.editor.setEnd(this);
			});
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	public function onConnect(listener) {
		this.onConnectionListeners.push(listener);
	}
	public function fireOnConnection(s, e) {
		for(l in this.onConnectionListeners) {
			l(s, e);
		}
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