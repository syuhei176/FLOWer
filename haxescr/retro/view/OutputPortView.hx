package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.InputPort;
import retro.pub.OutputPort;

class OutputPortView{

	public var pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var jobView:JobView;
	public var views : Array<PathView>;
	
	public var port:OutputPort;
	private var editor:Editor;
	private var onConnectionListeners:Array<OutputPort->InputPort->Void>;
	private var onDisconnectionListeners:Array<OutputPort->InputPort->Void>;
	
	public function new(jobview, port) {
		this.views = new Array<PathView>();
		this.onConnectionListeners = new Array<OutputPort->InputPort->Void>();
		this.onDisconnectionListeners = new Array<OutputPort->InputPort->Void>();
		this.jobView = jobview;
		this.editor = this.jobView.editor;
		this.port = port;
		this.group = editor.snap.group();
		this.graphic = editor.snap.circle(0, 0, 30);
		var coll = editor.snap.circle(0, 0, 30);
		this.pos = new Point2D(0, 0);
		this.setPos(100, 100);
		coll.attr({
    		   fill: "#ffffff",
    		   "fill-opacity" : 0,
    	});
			this.graphic.attr({
    		    fill: this.editor.thema.output_color,
				stroke: editor.thema.line_color,
				strokeWidth: 4
			});
			coll.mousedown(function(e, x, y) {
				this.editor.setStart(this);
			});
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	public function onConnect(listener) {
		this.onConnectionListeners.push(listener);
	}
	public function onDisconnect(listener) {
		this.onDisconnectionListeners.push(listener);
	}
	public function fireOnConnection(s, e) {
		for(l in this.onConnectionListeners) {
			l(s, e);
		}
	}
	public function fireOnDisconnection(s, e) {
		for(l in this.onDisconnectionListeners) {
			l(s, e);
		}
	}
	public function connect(a) {
		var pathView = new PathView(this.editor, this, a);
		this.views.push(pathView);
		a.views.push(pathView);
		this.fireOnConnection(this.port, a.port);
		pathView.onRemove(function(pathView, a) {
			this.views.remove(pathView);
			this.fireOnDisconnection(this.port, a);
		});
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