package retro.view;

import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.pub.Port;
import retro.pub.InputPort;
import retro.pub.OutputPort;

class PortView{

	public var pos : Point2D;
	
	public var group:SnapElement;
	public var graphic:SnapElement;
	public var coll:SnapElement;
	public var jobView:JobView;
	public var views : Array<PathView>;
	
	public var port:Port;
	private var editor:Editor;
	
	public function new(jobview, port) {
		this.views = new Array<PathView>();
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
		if(Type.getClassName(Type.getClass(this.port)) == "retro.pub.InputPort") {
			this.graphic.attr({
    		    fill: this.editor.thema.input_color,
				stroke: editor.thema.line_color,
				strokeWidth: 4
			});
			coll.mouseup(function(e, x, y) {
				this.editor.setEnd(this);
			});
		}else if(Type.getClassName(Type.getClass(this.port)) == "retro.pub.OutputPort") {
			this.graphic.attr({
    		    fill: this.editor.thema.output_color,
				stroke: editor.thema.line_color,
				strokeWidth: 4
			});
			coll.mousedown(function(e, x, y) {
				this.editor.setStart(this);
			});
		}
		
		this.group.append(this.graphic);
		this.group.append(coll);
	}
	public function connect(a) {
		var pathView = new PathView(this.editor, this, a);
		this.views.push(pathView);
		a.views.push(pathView);
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