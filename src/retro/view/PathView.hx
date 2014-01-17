package retro.view;

import haxe.Timer;
import snap.Snap;
import retro.pub.Editor;
import retro.pub.Point2D;
import retro.model.Port;
import retro.model.InputPort;
import retro.model.OutputPort;
import retro.controller.DiagramController;

/*
	Class Name:PathView
	
	Event
	-onRemove:パスが削除されたときに呼ばれる
	Method
*/
class PathView{

	public var graphic:SnapElement;
	private var coll:SnapElement;
	private var group:SnapElement;
	
	public var source:OutputPortView;
	public var target:InputPortView;
	
	private var diagramController:DiagramController;
	private var snap:Snap;
	private var thema:Thema;
	
	private var onRemoveListeners:Array<PathView->InputPort->Void>;
	
	private var remove_graphic:SnapElement;
	private var remove_timer:Timer;
	
	public function new(diagramController, diagramView, source_port, target_port, snap, thema) {
		this.onRemoveListeners = new Array<PathView->InputPort->Void>();
		this.diagramController = diagramController;
		this.source = source_port;
		this.target = target_port;
		this.snap = snap;
		this.thema = thema;
		//モデルの変更を監視
		this.source.port.onDisconnected(this.onDisconnect);
		
		this.group = this.snap.group();
		this.graphic = this.snap.line(0, 0, 0, 0);
		this.coll = this.snap.line(0, 0, 0, 0);
		
		this.graphic.attr({
    	    stroke: thema.path_color,
    	    strokeWidth: 7
    	});
    	this.coll.attr({
    	    stroke: "#a0a000",
    	    "stroke-opacity" : 0,
    	    strokeWidth: 30
    	});
    	
    	diagramView.path_group.append(this.group);
    	
		this.coll.mousedown(function(e, x, y){
			this.visible_remove_btn();
		});
    	
    	this.group.append(this.graphic);
    	this.group.append(this.coll);
    	this.refresh();
    	this.init_remove_btn();
	}
	
	private function init_remove_btn() {
    	Snap.load("images/remove.svg", function (f) {
    		var g = f.select("g");
        	this.group.append(g);
        	g.mousedown(function(e, x, y) {
    			DiagramController.disconnect(this.source.port, this.target.port);
	    		this.remove_graphic.attr({
    				"visibility" : "hidden"
    			});
        	});
    		g.attr({
    			"visibility" : "hidden"
    		});
    		g.transform("translate("+0+","+0+")");
    		this.remove_graphic = g;
    	});
	}
	private function visible_remove_btn() {
		var xx = this.target.getPos().getX() + this.source.getPos().getX();
		var yy = this.target.getPos().getY() + this.source.getPos().getY();
		xx /= 2;
		yy /= 2;
		xx -= 22;
		yy -= 22;
    	this.remove_graphic.transform("translate("+xx+","+yy+")");
		this.remove_timer = new Timer(3000);
		this.remove_timer.run = function() {
	    	this.remove_graphic.attr({
    			"visibility" : "hidden"
    		});
    		this.remove_timer.stop();
		}
    	this.remove_graphic.attr({
    		"visibility" : "visible"
    	});
	}
	
	public function onDisconnect(o, i) {
		if(this.target.port != i) return;
    	this.group.remove();
    	this.source.views.remove(this);
    	this.target.views.remove(this);
	}
	
	public function refresh() {
		var xx = this.target.getPos().getX() - this.source.getPos().getX();
		var yy = this.target.getPos().getY() - this.source.getPos().getY();
		var len = Math.sqrt(xx * xx + yy * yy);
		xx = xx / len;
		yy = yy / len;
		this.graphic.attr({
			x1 : this.source.getPos().getX() + xx*20,
			y1 : this.source.getPos().getY() + yy*20,
			x2 : this.target.getPos().getX() - xx*20,
			y2 : this.target.getPos().getY() - yy*20
		});
		this.coll.attr({
			x1 : this.source.getPos().getX() + xx*20,
			y1 : this.source.getPos().getY() + yy*20,
			x2 : this.target.getPos().getX() - xx*20,
			y2 : this.target.getPos().getY() - yy*20
		});
	}
}