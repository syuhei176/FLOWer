(function ($hx_exports) { "use strict";
$hx_exports.externs = {};
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = ["Lambda"];
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
};
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
};
var Main = $hx_exports.Main = function() { };
Main.__name__ = ["Main"];
Main.main = function() {
	retro.pub.Editor.create();
};
var IMap = function() { };
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.ds = {};
haxe.ds.StringMap = function() { };
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	get: function(key) {
		return this.h["$" + key];
	}
	,__class__: haxe.ds.StringMap
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var retro = {};
retro.controller = {};
retro.controller.Controller = function() { };
retro.controller.Controller.__name__ = ["retro","controller","Controller"];
retro.controller.Controller.prototype = {
	__class__: retro.controller.Controller
};
retro.controller.DiagramController = function(editor,diagram,virtualDevice) {
	this.editor = editor;
	this.diagram = diagram;
	this.modules = Library.get();
};
retro.controller.DiagramController.__name__ = ["retro","controller","DiagramController"];
retro.controller.DiagramController.__interfaces__ = [retro.controller.Controller];
retro.controller.DiagramController.disconnect = function(oport,iport) {
	oport.disconnectToInputPort(iport);
};
retro.controller.DiagramController.prototype = {
	addModule: function(job) {
		this.modules.push(job);
	}
	,getEditor: function() {
		return this.editor;
	}
	,getDiagram: function() {
		return this.diagram;
	}
	,addJob: function() {
		var id = this.editor.IdGenerator.genID();
		var job = new retro.model.Job(id);
		this.diagram.addJob(job);
	}
	,addSymbolicLink: function(jobComponent) {
		var id = this.editor.IdGenerator.genID();
		var job = new retro.model.SymbolicLink(id,jobComponent);
		this.diagram.addJob(job);
		return job;
	}
	,addLogic: function(id) {
		var job = new retro.model.Logic(id);
		this.diagram.addJob(job);
	}
	,removeJob: function(job) {
		this.diagram.removeJob(job);
	}
	,setRubberbandStart: function(port) {
		if(this.start != null) this.start.onNormal();
		this.start = port;
		this.start.onSelected();
	}
	,setRubberbandEnd: function(port) {
		if(this.start == null) return false; else if(port.parent == this.start.parent) return false; else {
			this.end = port;
			this.start.onNormal();
			this.start.connectToInputPort(this.end);
			return true;
		}
	}
	,clearRubberband: function() {
		if(this.start != null) this.start.onNormal();
		this.start = null;
		this.end = null;
	}
	,getModule: function(name) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.getModuleName() == name) return m;
		}
		return null;
	}
	,__class__: retro.controller.DiagramController
};
retro.controller.ExportController = function(editor,project) {
	this.editor = editor;
	this.project = project;
};
retro.controller.ExportController.__name__ = ["retro","controller","ExportController"];
retro.controller.ExportController.__interfaces__ = [retro.controller.Controller];
retro.controller.ExportController.prototype = {
	getProject: function() {
		return this.project;
	}
	,do_export: function() {
		var model = { };
		var diagram = this.project.getRootDiagram();
		model.diagram = this.export_diagram(diagram);
		return model;
	}
	,export_diagram: function(diagram) {
		var diagram_model = { };
		diagram_model.jobs = [];
		var _g = 0;
		var _g1 = diagram.getJobs();
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			diagram_model.jobs.push(this.export_job(job));
		}
		return diagram_model;
	}
	,export_job: function(job) {
		var job_model = job.getJSON();
		job_model.meta = Type.getClassName(Type.getClass(job));
		job_model.pos = { };
		job_model.pos.x = job.getPos().getX();
		job_model.pos.y = job.getPos().getY();
		job_model.inputports = [];
		job_model.outputports = [];
		var _g = 0;
		var _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var port = _g1[_g];
			++_g;
			job_model.inputports.push(this.import_outputport(port));
		}
		var _g2 = 0;
		var _g11 = job.getOutputPorts();
		while(_g2 < _g11.length) {
			var port1 = _g11[_g2];
			++_g2;
			job_model.outputports.push(this.export_outputport(port1));
		}
		return job_model;
	}
	,import_outputport: function(inputport) {
		var inputport_model = { };
		inputport_model.name = inputport.getName();
		if(inputport.getConstantValue() != null) {
			inputport_model.constant = { };
			inputport_model.constant.type = inputport.getConstantValue().type;
			inputport_model.constant.value = inputport.getConstantValue().value;
		}
		return inputport_model;
	}
	,export_outputport: function(outputport) {
		var outputport_model = { };
		outputport_model.name = outputport.getName();
		outputport_model.connections = [];
		var _g = 0;
		var _g1 = outputport.getConnections();
		while(_g < _g1.length) {
			var inputPort = _g1[_g];
			++_g;
			outputport_model.connections.push(inputPort.getURI());
		}
		return outputport_model;
	}
	,__class__: retro.controller.ExportController
};
retro.controller.ImportController = function(project,virtualDevice) {
	this.project = project;
	this.modules = Library.get();
};
retro.controller.ImportController.__name__ = ["retro","controller","ImportController"];
retro.controller.ImportController.prototype = {
	addModule: function(job) {
		this.modules.push(job);
	}
	,getProject: function() {
		return this.project;
	}
	,getModule: function(name) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.getModuleName() == name) return m;
		}
		return null;
	}
	,do_import: function(model) {
		var diagram = new retro.model.Diagram();
		this.project.setRootDiagram(diagram);
		this.import_diagram(diagram,model.model.diagram);
	}
	,import_diagram: function(diagram,diagram_model) {
		var jobs = diagram_model.jobs;
		var _g = 0;
		while(_g < jobs.length) {
			var j = jobs[_g];
			++_g;
			var jobComponent = this.getModule(j.ref);
			var job = new retro.model.SymbolicLink(j.id,jobComponent);
			diagram.addJob(job);
			job.setPos(j.pos.x,j.pos.y);
		}
		var _g1 = 0;
		while(_g1 < jobs.length) {
			var j1 = jobs[_g1];
			++_g1;
			this.import_job(j1,diagram);
		}
	}
	,import_job: function(model,diagram) {
		var ops = model.outputports;
		var ips = model.inputports;
		var _g = 0;
		while(_g < ops.length) {
			var op = ops[_g];
			++_g;
			var start = diagram.getOutputPort(Std.string(model.id) + "." + Std.string(op.name));
			var cons = op.connections;
			var _g1 = 0;
			while(_g1 < cons.length) {
				var con = cons[_g1];
				++_g1;
				var end = diagram.getInputPort(con);
				start.connectToInputPort(end);
			}
		}
		var _g2 = 0;
		while(_g2 < ips.length) {
			var ip = ips[_g2];
			++_g2;
			var inputPort = diagram.getInputPort(Std.string(model.id) + "." + Std.string(ip.name));
			if(ip.constant != null) inputPort.setConstant(new retro.model.Value(ip.constant.type,ip.constant.value));
		}
	}
	,__class__: retro.controller.ImportController
};
retro.controller.JobController = function(editor,job) {
	this.editor = editor;
	this.job = job;
};
retro.controller.JobController.__name__ = ["retro","controller","JobController"];
retro.controller.JobController.__interfaces__ = [retro.controller.Controller];
retro.controller.JobController.prototype = {
	getEditor: function() {
		return this.editor;
	}
	,getJob: function() {
		return this.job;
	}
	,changePos: function(x,y) {
		this.job.setPos(x,y);
	}
	,addInputPort: function(name) {
		var port = new retro.model.InputPort(this.job,retro.pub.RetroType.RString,name);
		this.job.addInputPort(port);
	}
	,addOutputPort: function(name) {
		var port = new retro.model.OutputPort(this.job,retro.pub.RetroType.RString,name);
		this.job.addOutputPort(port);
	}
	,removeInputPort: function(port) {
	}
	,removeOutputPort: function(port) {
	}
	,connect: function(oport,iport) {
		oport.connectToInputPort(iport);
	}
	,disconnect: function(oport,iport) {
		oport.disconnectToInputPort(iport);
	}
	,__class__: retro.controller.JobController
};
retro.controller.ProjectController = function(editor,project) {
	this.editor = editor;
	this.project = project;
};
retro.controller.ProjectController.__name__ = ["retro","controller","ProjectController"];
retro.controller.ProjectController.__interfaces__ = [retro.controller.Controller];
retro.controller.ProjectController.prototype = {
	getEditor: function() {
		return this.editor;
	}
	,getProject: function() {
		return this.project;
	}
	,addDiagram: function() {
		var diagram = new retro.model.Diagram();
		var diagramController = new retro.controller.DiagramController(this.editor,diagram,this.editor.virtualDevice);
		var diagramView = new retro.view.DiagramView(diagramController);
		this.project.setRootDiagram(diagram);
	}
	,run: function() {
		if(this.runtime == null) this.runtime = new retro.vm.Runtime(this.project.getRootDiagram());
		this.runtime.run();
	}
	,stop: function() {
		if(this.runtime == null) this.runtime = new retro.vm.Runtime(this.project.getRootDiagram());
		this.runtime.stop();
		var diagram = this.getProject().getRootDiagram();
		diagram.clearValueCarriers();
	}
	,__class__: retro.controller.ProjectController
};
retro.core = {};
retro.core.Inputs = $hx_exports.externs.Inputs = function() {
	this.inputs = new Array();
};
retro.core.Inputs.__name__ = ["retro","core","Inputs"];
retro.core.Inputs.prototype = {
	add: function(name,type) {
		this.inputs.push(new retro.core.Input(name,type));
	}
	,get: function(name) {
		var _g = 0;
		var _g1 = this.inputs;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(input.name == name) return input;
		}
		return null;
	}
	,getArray: function() {
		return this.inputs;
	}
	,__class__: retro.core.Inputs
};
retro.core.Input = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Input.__name__ = ["retro","core","Input"];
retro.core.Input.prototype = {
	getName: function() {
		return this.name;
	}
	,getType: function() {
		return this.type;
	}
	,__class__: retro.core.Input
};
retro.core.JobComponent = function() { };
retro.core.JobComponent.__name__ = ["retro","core","JobComponent"];
retro.core.JobComponent.prototype = {
	__class__: retro.core.JobComponent
};
retro.core.Outputs = $hx_exports.externs.Outputs = function() {
	this.outputs = new Array();
};
retro.core.Outputs.__name__ = ["retro","core","Outputs"];
retro.core.Outputs.prototype = {
	add: function(name,type) {
		this.outputs.push(new retro.core.Output(name,type));
	}
	,get: function(name) {
		var _g = 0;
		var _g1 = this.outputs;
		while(_g < _g1.length) {
			var output = _g1[_g];
			++_g;
			if(output.name == name) return output;
		}
		return null;
	}
	,getArray: function() {
		return this.outputs;
	}
	,__class__: retro.core.Outputs
};
retro.core.Output = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Output.__name__ = ["retro","core","Output"];
retro.core.Output.prototype = {
	getType: function() {
		return this.type;
	}
	,getName: function() {
		return this.name;
	}
	,__class__: retro.core.Output
};
retro.core.Params = $hx_exports.externs.Params = function() {
	this.params = new Array();
};
retro.core.Params.__name__ = ["retro","core","Params"];
retro.core.Params.prototype = {
	get: function(name) {
		var _g = 0;
		var _g1 = this.params;
		while(_g < _g1.length) {
			var param = _g1[_g];
			++_g;
			if(param.name == name) return param.getValue();
		}
		return null;
	}
	,add: function(name,value) {
		this.params.push(new retro.core.Param(name,value));
	}
	,toString: function() {
		var str = "[";
		var _g = 0;
		var _g1 = this.params;
		while(_g < _g1.length) {
			var param = _g1[_g];
			++_g;
			str += "{" + param.name + "," + Std.string(param.value.value) + "}";
		}
		str += "]";
		return str;
	}
	,__class__: retro.core.Params
};
retro.core.Param = function(name,value) {
	this.name = name;
	this.value = value;
};
retro.core.Param.__name__ = ["retro","core","Param"];
retro.core.Param.prototype = {
	isEmpty: function() {
		return this.value == null;
	}
	,getValue: function() {
		return this.value.value;
	}
	,__class__: retro.core.Param
};
retro.core.VirtualDevice = function() {
};
retro.core.VirtualDevice.__name__ = ["retro","core","VirtualDevice"];
retro.core.VirtualDevice.prototype = {
	setConsoleDevice: function(consoleDevice) {
		this.consoleDevice = consoleDevice;
	}
	,getConsoleDevice: function() {
		return this.consoleDevice;
	}
	,setSVGDevice: function(snap) {
		this.snap = snap;
	}
	,setSocketDevice: function(retroClient) {
		this.retroClient = retroClient;
	}
	,getSnap: function() {
		return this.snap;
	}
	,getRetroClient: function() {
		return this.retroClient;
	}
	,__class__: retro.core.VirtualDevice
};
retro.model = {};
retro.model.Diagram = function() {
	this.jobs = new Array();
	this.valueCarriers = new Array();
	this.onJobAddedListeners = new Array();
	this.onJobRemovedListeners = new Array();
	this.onValueCarrierAddedListeners = new Array();
	this.onValueCarrierRemovedListeners = new Array();
	this.onValueCarrierClearedListeners = new Array();
};
retro.model.Diagram.__name__ = ["retro","model","Diagram"];
retro.model.Diagram.prototype = {
	addJob: function(job) {
		this.fireOnJobAdded(job);
		this.jobs.push(job);
	}
	,removeJob: function(job) {
		this.fireOnJobRemoved(job);
		var _g = 0;
		var _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var inputPort = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = inputPort.connection;
			while(_g2 < _g3.length) {
				var srcPort = _g3[_g2];
				++_g2;
				srcPort.disconnectToInputPort(inputPort);
			}
		}
		var _g4 = 0;
		var _g11 = job.getOutputPorts();
		while(_g4 < _g11.length) {
			var outputPort = _g11[_g4];
			++_g4;
			var _g21 = 0;
			var _g31 = outputPort.connection;
			while(_g21 < _g31.length) {
				var destPort = _g31[_g21];
				++_g21;
				outputPort.disconnectToInputPort(destPort);
			}
		}
		HxOverrides.remove(this.jobs,job);
	}
	,getJob: function(id) {
		var _g = 0;
		var _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == id) return job;
		}
		return null;
	}
	,getOutputPort: function(uri) {
		var ids = uri.split(".");
		var _g = 0;
		var _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == ids[0]) return job.getOutputPort(ids[1]);
		}
		return null;
	}
	,getInputPort: function(uri) {
		var ids = uri.split(".");
		var _g = 0;
		var _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == ids[0]) return job.getInputPort(ids[1]);
		}
		return null;
	}
	,getJobs: function() {
		return this.jobs;
	}
	,addValueCarrier: function(valueCarrier) {
		this.fireOnValueCarrierAdded(valueCarrier);
		this.valueCarriers.push(valueCarrier);
	}
	,removeValueCarrier: function(valueCarrier) {
		this.fireOnValueCarrierRemoved(valueCarrier);
		HxOverrides.remove(this.valueCarriers,valueCarrier);
	}
	,getValueCarriers: function() {
		return this.valueCarriers;
	}
	,clearValueCarriers: function() {
		var _g = 0;
		var _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = job.getInputPorts();
			while(_g2 < _g3.length) {
				var inputPort = _g3[_g2];
				++_g2;
				this.removeValueCarrier(inputPort.useValueCarrier());
			}
		}
		this.valueCarriers = new Array();
		this.fireOnValueCarrierCleared();
	}
	,onJobAdded: function(listener) {
		this.onJobAddedListeners.push(listener);
	}
	,onJobRemoved: function(listener) {
		this.onJobRemovedListeners.push(listener);
	}
	,onValueCarrierAdded: function(listener) {
		this.onValueCarrierAddedListeners.push(listener);
	}
	,onValueCarrierRemoved: function(listener) {
		this.onValueCarrierRemovedListeners.push(listener);
	}
	,onValueCarrierCleared: function(listener) {
		this.onValueCarrierClearedListeners.push(listener);
	}
	,fireOnJobAdded: function(j) {
		var _g = 0;
		var _g1 = this.onJobAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,fireOnJobRemoved: function(j) {
		var _g = 0;
		var _g1 = this.onJobRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,fireOnValueCarrierAdded: function(vc) {
		var _g = 0;
		var _g1 = this.onValueCarrierAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(vc);
		}
	}
	,fireOnValueCarrierRemoved: function(vc) {
		var _g = 0;
		var _g1 = this.onValueCarrierRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(vc);
		}
	}
	,fireOnValueCarrierCleared: function() {
		var _g = 0;
		var _g1 = this.onValueCarrierClearedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,__class__: retro.model.Diagram
};
retro.model.Port = function(parent,type,name) {
	this.parent = parent;
	this.type = type;
	this.name = name;
};
retro.model.Port.__name__ = ["retro","model","Port"];
retro.model.Port.prototype = {
	getURI: function() {
		return this.parent.getId() + "." + this.getName();
	}
	,getName: function() {
		return this.name;
	}
	,getParentJob: function() {
		return this.parent;
	}
	,__class__: retro.model.Port
};
retro.model.InputPort = function(parent,type,name) {
	retro.model.Port.call(this,parent,type,name);
	this.connection = new Array();
	this.onSetValueListeners = new Array();
	this.onUseValueListeners = new Array();
	this.onSetConstantValueListeners = new Array();
	this.onRemoveConstantValueListeners = new Array();
};
retro.model.InputPort.__name__ = ["retro","model","InputPort"];
retro.model.InputPort.__super__ = retro.model.Port;
retro.model.InputPort.prototype = $extend(retro.model.Port.prototype,{
	setValueCarrier: function(valueCarrier) {
		this.valueCarrier = valueCarrier;
		this.fireOnSetValueListeners(this.valueCarrier);
	}
	,getValueCarrier: function() {
		return this.valueCarrier;
	}
	,getConstantValue: function() {
		return this.constantValue;
	}
	,getValue: function() {
		if(this.constantValue != null) return this.constantValue; else {
			if(this.valueCarrier == null) return null;
			return this.valueCarrier.getValue();
		}
	}
	,useValueCarrier: function() {
		var v = this.valueCarrier;
		this.valueCarrier = null;
		this.fireOnUseValueListeners();
		return v;
	}
	,setConstant: function(value) {
		this.constantValue = value;
		this.fireOnSetConstantValueListeners(this.constantValue);
	}
	,removeConstant: function() {
		this.constantValue = null;
		this.fireOnRemoveConstantValueListeners();
	}
	,onSetValue: function(listener) {
		this.onSetValueListeners.push(listener);
	}
	,onUseValue: function(listener) {
		this.onUseValueListeners.push(listener);
	}
	,onSetConstantValue: function(listener) {
		this.onSetConstantValueListeners.push(listener);
	}
	,onRemoveConstantValue: function(listener) {
		this.onRemoveConstantValueListeners.push(listener);
	}
	,fireOnSetValueListeners: function(v) {
		var _g = 0;
		var _g1 = this.onSetValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(v);
		}
	}
	,fireOnUseValueListeners: function() {
		var _g = 0;
		var _g1 = this.onUseValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,fireOnSetConstantValueListeners: function(v) {
		var _g = 0;
		var _g1 = this.onSetConstantValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(v);
		}
	}
	,fireOnRemoveConstantValueListeners: function() {
		var _g = 0;
		var _g1 = this.onRemoveConstantValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,__class__: retro.model.InputPort
});
retro.model.Message = { __ename__ : true, __constructs__ : ["NoMsg","Msg"] };
retro.model.Message.NoMsg = ["NoMsg",0];
retro.model.Message.NoMsg.toString = $estr;
retro.model.Message.NoMsg.__enum__ = retro.model.Message;
retro.model.Message.Msg = function(i) { var $x = ["Msg",1,i]; $x.__enum__ = retro.model.Message; $x.toString = $estr; return $x; };
retro.model.Job = function(id) {
	this.id = id;
	this.inputPorts = new Array();
	this.outputPorts = new Array();
	this.pos = new retro.pub.Point2D(0,0);
	this.onInputPortAddedListeners = new Array();
	this.onOutputPortAddedListeners = new Array();
	this.onInputPortRemovedListeners = new Array();
	this.onOutputPortRemovedListeners = new Array();
	this.onPosChangedListeners = new Array();
};
retro.model.Job.__name__ = ["retro","model","Job"];
retro.model.Job.prototype = {
	getId: function() {
		return this.id;
	}
	,getName: function() {
		return "";
	}
	,setPos: function(x,y) {
		this.fireOnPosChangedListeners(x,y);
		this.pos.setX(x);
		this.pos.setY(y);
	}
	,getPos: function() {
		return this.pos;
	}
	,getInputPorts: function() {
		return this.inputPorts;
	}
	,getOutputPorts: function() {
		return this.outputPorts;
	}
	,addInputPort: function(port) {
		this.fireOnInputPortAddedListeners(port);
		this.inputPorts.push(port);
	}
	,addOutputPort: function(port) {
		this.fireOnOutputPortAddedListeners(port);
		this.outputPorts.push(port);
	}
	,removeInputPort: function(port) {
		this.fireOnInputPortRemovedListeners(port);
		HxOverrides.remove(this.inputPorts,port);
	}
	,removeOutputPort: function(port) {
		this.fireOnOutputPortRemovedListeners(port);
		HxOverrides.remove(this.outputPorts,port);
	}
	,getParams: function() {
		var params = new retro.core.Params();
		var _g = 0;
		var _g1 = this.inputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var value = null;
			if(p.getValue() != null) value = p.getValue();
			params.add(p.getName(),value);
		}
		return params;
	}
	,work: function(cb) {
		return;
	}
	,onPlay: function(cb) {
		return;
	}
	,isReady: function() {
		return Lambda.fold(this.getInputPorts(),function(port,acc) {
			return acc && port.getValue() != null;
		},true);
	}
	,getInputPort: function(name) {
		var _g = 0;
		var _g1 = this.inputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(name == p.name) return p;
		}
		return null;
	}
	,getOutputPort: function(name) {
		var _g = 0;
		var _g1 = this.outputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(name == p.name) return p;
		}
		return null;
	}
	,onInputPortAdded: function(listener) {
		this.onInputPortAddedListeners.push(listener);
	}
	,fireOnInputPortAddedListeners: function(j) {
		var _g = 0;
		var _g1 = this.onInputPortAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onOutputPortAdded: function(listener) {
		this.onOutputPortAddedListeners.push(listener);
	}
	,fireOnOutputPortAddedListeners: function(j) {
		var _g = 0;
		var _g1 = this.onOutputPortAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onInputPortRemoved: function(listener) {
		this.onInputPortRemovedListeners.push(listener);
	}
	,fireOnInputPortRemovedListeners: function(j) {
		var _g = 0;
		var _g1 = this.onInputPortRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onOutputPortRemoved: function(listener) {
		this.onOutputPortRemovedListeners.push(listener);
	}
	,fireOnOutputPortRemovedListeners: function(j) {
		var _g = 0;
		var _g1 = this.onOutputPortRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onPosChanged: function(listener) {
		this.onPosChangedListeners.push(listener);
	}
	,fireOnPosChangedListeners: function(x,y) {
		var _g = 0;
		var _g1 = this.onPosChangedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(x,y);
		}
	}
	,getJSON: function() {
		var json = { };
		json.id = this.getId();
		return json;
	}
	,__class__: retro.model.Job
};
retro.model.Logic = function(id) {
	retro.model.Job.call(this,id);
};
retro.model.Logic.__name__ = ["retro","model","Logic"];
retro.model.Logic.__super__ = retro.model.Job;
retro.model.Logic.prototype = $extend(retro.model.Job.prototype,{
	__class__: retro.model.Logic
});
retro.model.OutputPort = function(parent,type,name) {
	retro.model.Port.call(this,parent,type,name);
	this.connection = new Array();
	this.onConnectedListeners = new Array();
	this.onDisconnectedListeners = new Array();
};
retro.model.OutputPort.__name__ = ["retro","model","OutputPort"];
retro.model.OutputPort.__super__ = retro.model.Port;
retro.model.OutputPort.prototype = $extend(retro.model.Port.prototype,{
	getConnections: function() {
		return this.connection;
	}
	,connectToInputPort: function(port) {
		this.fireOnConnectedListeners(this,port);
		port.connection.push(this);
		this.connection.push(port);
	}
	,disconnectToInputPort: function(port) {
		this.fireOnDisconnectedListeners(this,port);
		HxOverrides.remove(port.connection,this);
		HxOverrides.remove(this.connection,port);
	}
	,onConnected: function(listener) {
		this.onConnectedListeners.push(listener);
	}
	,onDisconnected: function(listener) {
		this.onDisconnectedListeners.push(listener);
	}
	,fireOnConnectedListeners: function(o,i) {
		var _g = 0;
		var _g1 = this.onConnectedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(o,i);
		}
	}
	,fireOnDisconnectedListeners: function(o,i) {
		var _g = 0;
		var _g1 = this.onDisconnectedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(o,i);
		}
	}
	,__class__: retro.model.OutputPort
});
retro.model.Project = function() {
	this.onDiagramAddedListeners = new Array();
};
retro.model.Project.__name__ = ["retro","model","Project"];
retro.model.Project.prototype = {
	setRootDiagram: function(diagram) {
		this.diagram = diagram;
		this.fireOnConnection(this.diagram);
	}
	,getRootDiagram: function() {
		return this.diagram;
	}
	,onDiagramAdded: function(listener) {
		this.onDiagramAddedListeners.push(listener);
	}
	,fireOnConnection: function(d) {
		var _g = 0;
		var _g1 = this.onDiagramAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(d);
		}
	}
	,__class__: retro.model.Project
};
retro.model.SymbolicLink = function(id,jobComponent) {
	retro.model.Job.call(this,id);
	this.prototype = jobComponent;
	this.customDraw = Reflect.getProperty(jobComponent,"customDraw");
	var _g = 0;
	var _g1 = this.prototype.inputs.getArray();
	while(_g < _g1.length) {
		var ip = _g1[_g];
		++_g;
		this.addInputPort(new retro.model.InputPort(this,ip.getType(),ip.getName()));
	}
	var _g2 = 0;
	var _g11 = this.prototype.outputs.getArray();
	while(_g2 < _g11.length) {
		var op = _g11[_g2];
		++_g2;
		this.addOutputPort(new retro.model.OutputPort(this,op.getType(),op.getName()));
	}
};
retro.model.SymbolicLink.__name__ = ["retro","model","SymbolicLink"];
retro.model.SymbolicLink.__super__ = retro.model.Job;
retro.model.SymbolicLink.prototype = $extend(retro.model.Job.prototype,{
	getPrototype: function() {
		return this.prototype;
	}
	,getName: function() {
		return this.prototype.getModuleName();
	}
	,work: function(cb) {
		this.prototype.onInputRecieved(this.getParams(),cb);
	}
	,onPlay: function(cb) {
		this.prototype.onPlay(cb);
	}
	,getJSON: function() {
		var json = { };
		json.id = this.getId();
		json.ref = this.getName();
		return json;
	}
	,__class__: retro.model.SymbolicLink
});
retro.model.Value = function(_type,_value) {
	this.type = _type;
	this.value = _value;
};
retro.model.Value.__name__ = ["retro","model","Value"];
retro.model.Value.prototype = {
	__class__: retro.model.Value
};
retro.model.ValueCarrier = function(value,src,dest) {
	this.count = 0;
	this.value = value;
	this.srcPort = src;
	this.destPort = dest;
	this.count = 0;
	this.onStepListeners = new Array();
};
retro.model.ValueCarrier.__name__ = ["retro","model","ValueCarrier"];
retro.model.ValueCarrier.prototype = {
	step: function(callback) {
		var _g = this;
		this.fireOnStepListeners(function() {
			callback(_g.destPort);
		});
	}
	,getValue: function() {
		return this.value;
	}
	,onStep: function(listener) {
		this.onStepListeners.push(listener);
	}
	,fireOnStepListeners: function(callback) {
		var _g = 0;
		var _g1 = this.onStepListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(callback);
		}
	}
	,__class__: retro.model.ValueCarrier
};
retro.pub = {};
retro.pub.Editor = function(id_header,retroClient,editorkey) {
	this.snap = new Snap("#svg");
	var rect = this.snap.rect(0,0,window.screen.width,window.screen.height);
	rect.attr({ fill : "#3498DB"});
	this.snap.append(rect);
	this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
	this.retroClient = retroClient;
	this.editorkey = editorkey;
};
retro.pub.Editor.__name__ = ["retro","pub","Editor"];
retro.pub.Editor.create = function() {
	Library.init();
	CreateJobDialog.init();
	var editor = new retro.pub.Editor();
	editor.IdGenerator = retro.pub.IDGenerator.getInstance("codeIQ");
	var project = new retro.model.Project();
	var projectController = new retro.controller.ProjectController(editor,project);
	editor.setProjectController(projectController);
	var virtualDevice = new retro.core.VirtualDevice();
	editor.virtualDevice = virtualDevice;
	var projectView = new retro.view.ProjectView(projectController,new retro.controller.ExportController(editor,project),new retro.controller.ImportController(project,virtualDevice));
	editor.setProjectView(projectView);
	var consoleDevice = new retro.view.ConsoleView(editor.snap);
	virtualDevice.setConsoleDevice(consoleDevice);
	var snap1 = new Snap();
	snap1.attr({ id : "sub_svg", 'class' : "modal"});
	virtualDevice.setSVGDevice(snap1);
	var diagram = new retro.model.Diagram();
	project.setRootDiagram(diagram);
	var diagramController = new retro.controller.DiagramController(editor,diagram,virtualDevice);
};
retro.pub.Editor.prototype = {
	getEditorKey: function() {
		return this.editorkey;
	}
	,setProjectController: function(projectController) {
		this.projectController = projectController;
	}
	,setProjectView: function(projectView) {
		this.projectView = projectView;
	}
	,save_all: function(data) {
		var zip = new JSZip();
		zip.file("flower.json",JSON.stringify(data));
		zip.file("flower.svg",this.snap.toString());
		var content = zip.generate();
		window.location.href = "data:application/zip;base64," + content;
	}
	,getRuntime: function() {
		this.runtime = new retro.vm.Runtime(this.projectController.getProject().getRootDiagram());
		return this.runtime;
	}
	,__class__: retro.pub.Editor
};
retro.pub.IDGenerator = function(uniqueEditorKey) {
	this.uniqueEditorKey = uniqueEditorKey;
	this.counter = 0;
};
retro.pub.IDGenerator.__name__ = ["retro","pub","IDGenerator"];
retro.pub.IDGenerator.getInstance = function(uniqueEditorKey) {
	if(retro.pub.IDGenerator.idGen == null) retro.pub.IDGenerator.idGen = new retro.pub.IDGenerator(uniqueEditorKey);
	return retro.pub.IDGenerator.idGen;
};
retro.pub.IDGenerator.prototype = {
	genID: function() {
		this.counter += 1;
		return this.uniqueEditorKey + ("" + this.counter);
	}
	,__class__: retro.pub.IDGenerator
};
retro.pub.Point2D = function(x,y) {
	this.x = x;
	this.y = y;
};
retro.pub.Point2D.__name__ = ["retro","pub","Point2D"];
retro.pub.Point2D.add = function(p1,p2) {
	return new retro.pub.Point2D(p1.x + p2.x,p1.y + p2.y);
};
retro.pub.Point2D.sub = function(p1,p2) {
	return new retro.pub.Point2D(p1.x - p2.x,p1.y - p2.y);
};
retro.pub.Point2D.addToSelf = function(p1,p2) {
	p1.x += p2.x;
	p1.y += p2.y;
};
retro.pub.Point2D.subToSelf = function(p1,p2) {
	p1.x -= p2.x;
	p1.y -= p2.y;
};
retro.pub.Point2D.timesToSelf = function(p1,t) {
	p1.x *= t;
	p1.y *= t;
};
retro.pub.Point2D.prototype = {
	getX: function() {
		return this.x;
	}
	,getY: function() {
		return this.y;
	}
	,setX: function(x) {
		this.x = x;
	}
	,setY: function(y) {
		this.y = y;
	}
	,normalized: function() {
		var len = Math.sqrt(this.x * this.x + this.y * this.y);
		this.x /= len;
		this.y /= len;
	}
	,distance: function() {
		return Math.sqrt(this.distanceSq());
	}
	,distanceSq: function() {
		return this.getX() * this.getX();
	}
	,__class__: retro.pub.Point2D
};
retro.pub.RetroType = { __ename__ : true, __constructs__ : ["REmpty","RString","RNumber","RBool","RList","RTuple","RUnknown"] };
retro.pub.RetroType.REmpty = ["REmpty",0];
retro.pub.RetroType.REmpty.toString = $estr;
retro.pub.RetroType.REmpty.__enum__ = retro.pub.RetroType;
retro.pub.RetroType.RString = ["RString",1];
retro.pub.RetroType.RString.toString = $estr;
retro.pub.RetroType.RString.__enum__ = retro.pub.RetroType;
retro.pub.RetroType.RNumber = ["RNumber",2];
retro.pub.RetroType.RNumber.toString = $estr;
retro.pub.RetroType.RNumber.__enum__ = retro.pub.RetroType;
retro.pub.RetroType.RBool = ["RBool",3];
retro.pub.RetroType.RBool.toString = $estr;
retro.pub.RetroType.RBool.__enum__ = retro.pub.RetroType;
retro.pub.RetroType.RList = function(type) { var $x = ["RList",4,type]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; };
retro.pub.RetroType.RTuple = function(types) { var $x = ["RTuple",5,types]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; };
retro.pub.RetroType.RUnknown = function(id) { var $x = ["RUnknown",6,id]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; };
retro.pub.RetroTypeChecker = function() { };
retro.pub.RetroTypeChecker.__name__ = ["retro","pub","RetroTypeChecker"];
retro.pub.RetroTypeChecker.check = function(type1,type2) {
	return true;
};
retro.pub.UserAgent = function() { };
retro.pub.UserAgent.__name__ = ["retro","pub","UserAgent"];
retro.pub.UserAgent.checkTablet = function() {
	if(window.navigator.userAgent.indexOf("iPad") > 0) return true;
	if(window.navigator.userAgent.indexOf("iPhone") > 0) return true;
	return false;
};
retro.view = {};
retro.view.ConsoleView = function(snap) {
	this.current_line = 0;
	var _g = this;
	this.lines = new Array();
	this.scan_buffer = new Array();
	this.group = snap.group();
	this.graphic = snap.rect(0,0,230,200);
	var coll = snap.rect(0,0,230,200);
	this.current_line = 0;
	this.texts = new Array();
	var _g1 = 0;
	while(_g1 < 8) {
		var i = _g1++;
		this.lines.push("");
		this.texts.push(snap.text(10,20 * i + 20,""));
	}
	var _g2 = 0;
	var _g11 = this.texts;
	while(_g2 < _g11.length) {
		var t = _g11[_g2];
		++_g2;
		t.attr({ 'font-size' : "8pt", fill : "#E67E22", 'font-family' : "Helvetica, Arial, sans-serif", width : 220});
	}
	this.graphic.attr({ fill : "#FFFFFF", stroke : "#FFFFFF", strokeWidth : 0});
	this.pos = new retro.pub.Point2D(0,0);
	this.prev_pos = new retro.pub.Point2D(0,0);
	this.setPos(200,80);
	coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	coll.drag(function(dx,dy,x,y) {
		_g.addPos(dx - _g.prev_pos.getX(),dy - _g.prev_pos.getY());
		_g.prev_pos.setX(dx);
		_g.prev_pos.setY(dy);
	},function(x1,y1) {
		_g.prev_pos.setX(0);
		_g.prev_pos.setY(0);
		var cb = _g.scan_buffer.shift();
		if(cb != null) cb("dammy");
	},function(x2,y2) {
	});
	this.group.append(this.graphic);
	var _g3 = 0;
	var _g12 = this.texts;
	while(_g3 < _g12.length) {
		var t1 = _g12[_g3];
		++_g3;
		this.group.append(t1);
	}
	this.group.append(coll);
};
retro.view.ConsoleView.__name__ = ["retro","view","ConsoleView"];
retro.view.ConsoleView.prototype = {
	print: function(str) {
		var _g1 = 0;
		var _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.putChar(str.charAt(i));
		}
	}
	,println: function(str) {
		this.print(str + "\n");
	}
	,putChar: function(c) {
		if(c == "\n") this.next_line(); else {
			if(this.lines[this.current_line].length > 35) this.next_line();
			this.lines[this.current_line] += c;
			this.texts[this.current_line].attr({ text : this.lines[this.current_line]});
		}
	}
	,next_line: function() {
		if(this.current_line >= 35) {
			var _g1 = 0;
			var _g = this.lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.lines[i] = "";
			}
			this.current_line = 0;
		} else this.current_line++;
	}
	,scan: function(cb) {
		var str = window.prompt("Standard Input","");
		cb(str);
	}
	,getChar: function() {
	}
	,addPos: function(x,y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,getPos: function() {
		return this.pos;
	}
	,OnPosChanged: function(x,y) {
		this.setPos(x,y);
	}
	,__class__: retro.view.ConsoleView
};
retro.view.DiagramView = function(diagramController) {
	this.count = 0;
	this.timer = null;
	var _g = this;
	this.jobViews = new Array();
	this.valueCarrierViews = new Array();
	this.diagramController = diagramController;
	var diagram = this.diagramController.getDiagram();
	diagram.onJobAdded($bind(this,this.OnJobAdded));
	diagram.onJobRemoved($bind(this,this.OnJobRemoved));
	diagram.onValueCarrierAdded($bind(this,this.OnValueCarrierAdded));
	diagram.onValueCarrierRemoved($bind(this,this.OnValueCarrierRemoved));
	diagram.onValueCarrierCleared($bind(this,this.OnValueCarrierCleared));
	var snap1 = this.diagramController.getEditor().snap;
	this.path_group = snap1.group();
	this.count = 0;
	this.control_group = snap1.group();
	Snap.load("images/create.svg",function(f) {
		var g = f.select("svg");
		_g.control_group.append(g);
		_g.control_group.transform("translate(" + 80 + "," + 15 + ")");
		Snap.load("images/create-over.svg",function(f1) {
			var g2 = f1.select("svg");
			g.click(function(e) {
				_g.control_group.append(g2);
				var createJobDialog = new CreateJobDialog();
				createJobDialog.on(function(pkg,cmp,x,y) {
					var jobComponent = _g.diagramController.getModule(pkg + "." + cmp);
					var job = _g.diagramController.addSymbolicLink(jobComponent);
					job.setPos(x,y);
				});
				createJobDialog.open();
				var timer = new haxe.Timer(1000);
				timer.run = function() {
					g2.remove();
				};
			});
		});
	});
	Snap.load("images/dustbox.svg",function(f2) {
		var g1 = f2.select("g");
		var right = window.document.body.clientWidth;
		var dustbox_group = snap1.group();
		dustbox_group.transform("translate(" + (right - 90) + "," + 10 + ")");
		dustbox_group.append(g1);
		Snap.load("images/dustbox-over.svg",function(f3) {
			var g21 = f3.select("g");
			_g.showDustBox = function() {
				g21.remove();
				dustbox_group.append(g1);
			};
			_g.showDustBoxOver = function() {
				g1.remove();
				dustbox_group.append(g21);
			};
		});
	});
};
retro.view.DiagramView.__name__ = ["retro","view","DiagramView"];
retro.view.DiagramView.prototype = {
	start_step: function() {
		var _g = this;
		if(this.timer == null) {
			this.timer = new haxe.Timer(80);
			this.timer.run = function() {
				var energy = _g.step();
				_g.count++;
				if(energy < 1 || _g.count > 100) {
					_g.timer.stop();
					_g.timer = null;
					_g.count = 0;
				}
			};
		}
	}
	,step: function() {
		var energy = 0;
		var _g = 0;
		var _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			energy += jv.step();
		}
		return energy;
	}
	,OnJobAdded: function(job) {
		var jobView = new retro.view.JobView(this.diagramController,new retro.controller.JobController(this.diagramController.getEditor(),job),this);
		var _g = 0;
		var _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var ip = _g1[_g];
			++_g;
			jobView.OnAddInputPortView(ip);
		}
		var _g2 = 0;
		var _g11 = job.getOutputPorts();
		while(_g2 < _g11.length) {
			var op = _g11[_g2];
			++_g2;
			jobView.OnAddOutputPortView(op);
		}
		jobView.drawView();
		this.jobViews.push(jobView);
	}
	,OnJobRemoved: function(job) {
		var _g = 0;
		var _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jobView = _g1[_g];
			++_g;
			if(jobView.jobController.getJob() == job) {
				jobView.removeSelf();
				HxOverrides.remove(this.jobViews,jobView);
				return;
			}
		}
	}
	,OnValueCarrierAdded: function(valueCarrier) {
		this.valueCarrierViews.push(new retro.view.ValueCarrierView(this.diagramController.getEditor(),valueCarrier,this));
	}
	,OnValueCarrierRemoved: function(valueCarrier) {
		var _g = 0;
		var _g1 = this.valueCarrierViews;
		while(_g < _g1.length) {
			var vcv = _g1[_g];
			++_g;
			if(vcv.valueCarrier == valueCarrier) {
				vcv.remove();
				HxOverrides.remove(this.valueCarrierViews,vcv);
				return;
			}
		}
	}
	,OnValueCarrierCleared: function() {
		var _g = 0;
		var _g1 = this.valueCarrierViews;
		while(_g < _g1.length) {
			var vcv = _g1[_g];
			++_g;
			vcv.remove();
		}
		this.valueCarrierViews = new Array();
	}
	,getOutputPortView: function(port) {
		var _g = 0;
		var _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) continue;
			var opv = jv.getOutputPortView(port);
			if(opv != null) return opv;
		}
		return null;
	}
	,getInputPortView: function(port) {
		var _g = 0;
		var _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) continue;
			var opv = jv.getInputPortView(port);
			if(opv != null) return opv;
		}
		return null;
	}
	,__class__: retro.view.DiagramView
};
retro.view.PortView = function(diagramController,jobview,snap) {
	this.diagramController = diagramController;
	this.views = new Array();
	this.jobView = jobview;
	this.snap = snap;
	this.group = snap.group();
	this.upperGroup = snap.group();
	this.graphic = snap.circle(0,0,20);
	this.coll = snap.circle(0,0,20);
	this.th = 0;
	this.pos = new retro.pub.Point2D(0,0);
	this.velocity = 0;
	this.setPos(100,100);
	this.coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	this.group.append(this.graphic);
	this.upperGroup.append(this.coll);
};
retro.view.PortView.__name__ = ["retro","view","PortView"];
retro.view.PortView.prototype = {
	refresh: function() {
		var _g = 0;
		var _g1 = this.views;
		while(_g < _g1.length) {
			var pathView = _g1[_g];
			++_g;
			pathView.refresh();
		}
	}
	,addPos: function(x,y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
		this.upperGroup.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,setR: function(th) {
		this.th = th;
		this.setPos(60 * Math.cos(this.th),60 * Math.sin(this.th));
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
		this.upperGroup.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,getPos: function() {
		return retro.pub.Point2D.add(this.pos,this.jobView.getPos());
	}
	,getLocalPos: function() {
		return this.pos;
	}
	,step_by_force: function(force) {
		var n = new retro.pub.Point2D(-Math.sin(this.th),Math.cos(this.th));
		this.velocity += (force.getX() * n.getX() + force.getY() * n.getY()) / 200;
		this.velocity *= 0.7;
		if(this.velocity > Math.PI / 30) this.velocity = Math.PI / 30;
		if(this.velocity < -Math.PI / 30) this.velocity = -Math.PI / 30;
		this.th += this.velocity;
		this.setR(this.th);
	}
	,__class__: retro.view.PortView
};
retro.view.InputPortView = function(diagramController,jobview,port,snap) {
	this.isConnected = false;
	var _g = this;
	retro.view.PortView.call(this,diagramController,jobview,snap);
	this.port = port;
	this.port.onSetConstantValue($bind(this,this.OnSetConstant));
	this.port.onRemoveConstantValue($bind(this,this.OnRemoveConstant));
	this.graphic.attr({ fill : "#3498DB", stroke : "#FFFFFF", strokeWidth : 1, 'fill-opacity' : 0});
	var text = snap.text(20,3,port.getName());
	text.attr({ 'font-size' : "8pt", fill : "#2C3E50", 'font-family' : "Helvetica, Arial, sans-serif"});
	this.upperGroup.append(text);
	var touchListener = function(e,x,y) {
		if(_g.diagramController.setRubberbandEnd(_g.port)) {
			_g.diagramController.clearRubberband();
			_g.isConnected = true;
		} else if(_g.isConnected == false) {
			var v = window.prompt("","");
			if(v != null) _g.port.setConstant(new retro.model.Value(retro.pub.RetroType.RNumber,JSON.parse(v)));
		}
	};
	if(retro.pub.UserAgent.checkTablet()) this.coll.touchstart(touchListener); else this.coll.mouseup(touchListener);
	this.setPos(0,0);
};
retro.view.InputPortView.__name__ = ["retro","view","InputPortView"];
retro.view.InputPortView.__super__ = retro.view.PortView;
retro.view.InputPortView.prototype = $extend(retro.view.PortView.prototype,{
	step: function() {
		if(this.views.length == 0) {
		}
		var force = new retro.pub.Point2D(0,0);
		var _g = 0;
		var _g1 = this.jobView.getPortViews();
		while(_g < _g1.length) {
			var opv = _g1[_g];
			++_g;
			var coulomb = retro.pub.Point2D.sub(this.getPos(),opv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.01;
			retro.pub.Point2D.timesToSelf(coulomb,1 / r * 100);
			retro.pub.Point2D.addToSelf(force,coulomb);
		}
		var _g2 = 0;
		var _g11 = this.views;
		while(_g2 < _g11.length) {
			var pathView = _g11[_g2];
			++_g2;
			var attraction = retro.pub.Point2D.sub(pathView.source.getPos(),this.getPos());
			var r1 = attraction.distance();
			if(r1 > 1000) r1 = 1000;
			retro.pub.Point2D.timesToSelf(attraction,r1 / 120);
			retro.pub.Point2D.addToSelf(force,attraction);
		}
		retro.pub.Point2D.timesToSelf(force,1);
		this.step_by_force(force);
		return this.velocity * this.velocity * 100;
	}
	,OnSetConstant: function(v) {
		var _g = this;
		this.constantValueGraphic = this.snap.group();
		var t = Std.string(v.value);
		var text = this.snap.text(-2,4,t);
		text.attr({ 'font-size' : "8pt", fill : "#ffffff", 'font-family' : "Helvetica, Arial, sans-serif"});
		var graphic = this.snap.rect(-20,-20,40 + (t.length - 1) * 6,40,20,20);
		graphic.attr({ fill : "#E67E22", strokeWidth : 1, stroke : "#E67E22"});
		this.constantValueGraphic.append(graphic);
		this.constantValueGraphic.append(text);
		this.upperGroup.append(this.constantValueGraphic);
		graphic.click(function(e) {
			_g.port.removeConstant();
		});
	}
	,OnRemoveConstant: function() {
		this.constantValueGraphic.remove();
	}
	,__class__: retro.view.InputPortView
});
retro.view.JobView = function(diagramController,jobController,diagramView) {
	var _g = this;
	this.inputportviews = new Array();
	this.outputportviews = new Array();
	this.diagramController = diagramController;
	this.jobController = jobController;
	this.diagramView = diagramView;
	this.job = this.jobController.getJob();
	this.job.onInputPortAdded($bind(this,this.OnAddInputPortView));
	this.job.onOutputPortAdded($bind(this,this.OnAddOutputPortView));
	this.job.onPosChanged($bind(this,this.OnPosChanged));
	this.snap = this.jobController.getEditor().snap;
	this.group = this.snap.group();
	this.titleRect = this.snap.rect(0,0,216,35);
	this.titleRect.attr({ strokeWidth : 0, stroke : "#FFFFFF", fill : "#E67E22"});
	this.portRect = this.snap.rect(0,35,216,0);
	this.portRect.attr({ strokeWidth : 0, stroke : "#FFFFFF", fill : "#FFFFFF"});
	this.coll = this.snap.rect(0,0,216,35);
	this.titleText = this.snap.text(12,21,this.job.getName());
	this.titleText.attr({ 'font-size' : "8pt", fill : "#FFFFFF", 'font-family' : "Helvetica, Arial, sans-serif"});
	this.pos = new retro.pub.Point2D(0,0);
	this.prev_pos = new retro.pub.Point2D(0,0);
	this.setPos(100,100);
	this.coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	this.coll.mousedown(function(e,x,y) {
	});
	var inDustBox = false;
	var isInDustBox = function(x1,y1) {
		var right = window.document.body.clientWidth;
		return inDustBox = right - 100 < x1 && x1 < right && y1 < 100;
	};
	this.coll.drag(function(dx,dy,x2,y2) {
		_g.addPos(dx - _g.prev_pos.getX(),dy - _g.prev_pos.getY());
		_g.prev_pos.setX(dx);
		_g.prev_pos.setY(dy);
		if(isInDustBox(x2 | 0,y2 | 0)) _g.diagramView.showDustBoxOver(); else _g.diagramView.showDustBox();
		_g.refresh();
	},function(x3,y3) {
		_g.prev_pos.setX(0);
		_g.prev_pos.setY(0);
	},function(x4,y4) {
		_g.refresh();
		_g.jobController.changePos(_g.pos.getX(),_g.pos.getY());
		if(inDustBox) {
			_g.diagramController.removeJob(_g.jobController.getJob());
			_g.diagramView.showDustBox();
		}
	});
};
retro.view.JobView.__name__ = ["retro","view","JobView"];
retro.view.JobView.prototype = {
	drawView: function() {
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			this.group.append(portView.group);
		}
		var _g2 = 0;
		var _g11 = this.outputportviews;
		while(_g2 < _g11.length) {
			var portView1 = _g11[_g2];
			++_g2;
			this.group.append(portView1.group);
		}
		this.group.append(this.titleRect);
		this.group.append(this.portRect);
		this.group.append(this.titleText);
		this.group.append(this.coll);
		var _g3 = 0;
		var _g12 = this.inputportviews;
		while(_g3 < _g12.length) {
			var portView2 = _g12[_g3];
			++_g3;
			this.group.append(portView2.upperGroup);
		}
		var _g4 = 0;
		var _g13 = this.outputportviews;
		while(_g4 < _g13.length) {
			var portView3 = _g13[_g4];
			++_g4;
			this.group.append(portView3.upperGroup);
		}
		this.cal2();
		if(this.job.customDraw != null) this.job.customDraw(this);
	}
	,removeSelf: function() {
		this.group.remove();
	}
	,visible_config_btn: function() {
		var _g = this;
		this.config_timer = new haxe.Timer(3000);
		this.config_timer.run = function() {
			_g.config_timer.stop();
			_g.configGraphic.attr({ visibility : "hidden"});
		};
		this.configGraphic.attr({ visibility : "visible"});
	}
	,OnAddInputPortView: function(port) {
		var snap = this.jobController.getEditor().snap;
		var portView = new retro.view.InputPortView(this.diagramController,this,port,snap);
		this.inputportviews.push(portView);
		return portView;
	}
	,OnAddOutputPortView: function(port) {
		var snap = this.jobController.getEditor().snap;
		var portView = new retro.view.OutputPortView(this.diagramController,this,port,snap);
		this.outputportviews.push(portView);
		return portView;
	}
	,cal: function() {
		var th = 2 * Math.PI / (this.inputportviews.length + this.outputportviews.length);
		var thh = 0;
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var pv = _g1[_g];
			++_g;
			pv.setR(thh);
			thh += th;
		}
		var _g2 = 0;
		var _g11 = this.outputportviews;
		while(_g2 < _g11.length) {
			var pv1 = _g11[_g2];
			++_g2;
			pv1.setR(thh);
			thh += th;
		}
	}
	,cal2: function() {
		Lambda.mapi(this.inputportviews,function(i,view) {
			return view.setPos(0,i * 54 + 35 + 27.);
		});
		Lambda.mapi(this.outputportviews,function(i1,view1) {
			return view1.setPos(216,i1 * 54 + 35 + 27.);
		});
		this.portRect.attr({ height : this.inputportviews.length > this.outputportviews.length?this.inputportviews.length * 54:this.outputportviews.length * 54});
		this.coll.attr({ height : this.inputportviews.length > this.outputportviews.length?this.inputportviews.length * 54 + 35:this.outputportviews.length * 54 + 35});
	}
	,step: function() {
		var energy = 0;
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			energy += portView.step();
		}
		var _g2 = 0;
		var _g11 = this.outputportviews;
		while(_g2 < _g11.length) {
			var portView1 = _g11[_g2];
			++_g2;
			energy += portView1.step();
		}
		return energy;
	}
	,refresh: function() {
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			portView.refresh();
		}
		var _g2 = 0;
		var _g11 = this.outputportviews;
		while(_g2 < _g11.length) {
			var portView1 = _g11[_g2];
			++_g2;
			portView1.refresh();
		}
	}
	,addPos: function(x,y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,getPos: function() {
		return this.pos;
	}
	,getOutputPortView: function(port) {
		var _g = 0;
		var _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var opv = _g1[_g];
			++_g;
			if(opv.port.getName() == port.getName()) return opv;
		}
		return null;
	}
	,getInputPortView: function(port) {
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			if(ipv.port.getName() == port.getName()) return ipv;
		}
		return null;
	}
	,getInputPortViews: function() {
		return this.inputportviews;
	}
	,getOutputPortViews: function() {
		return this.outputportviews;
	}
	,getPortViews: function() {
		var portViews = new Array();
		var _g = 0;
		var _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			portViews.push(ipv);
		}
		var _g2 = 0;
		var _g11 = this.outputportviews;
		while(_g2 < _g11.length) {
			var opv = _g11[_g2];
			++_g2;
			portViews.push(opv);
		}
		return portViews;
	}
	,OnPosChanged: function(x,y) {
		this.setPos(x,y);
	}
	,__class__: retro.view.JobView
};
retro.view.OutputPortView = function(diagramController,jobview,port,snap) {
	var _g = this;
	retro.view.PortView.call(this,diagramController,jobview,snap);
	this.port = port;
	this.port.onConnected($bind(this,this.OnConnected));
	this.graphic.attr({ fill : "#FFFFFF", stroke : "#FFFFFF", strokeWidth : 0});
	var text = snap.text(-50,3,port.getName());
	text.attr({ 'font-size' : "8pt", fill : "#2C3E50", 'font-family' : "Helvetica, Arial, sans-serif"});
	this.upperGroup.append(text);
	this.coll.mousedown(function(e,x,y) {
		_g.diagramController.setRubberbandStart(_g.port);
	});
	this.port.onSelected = function() {
		_g.graphic.attr({ fill : "#E67E22", stroke : "#FFFFFF", strokeWidth : 0});
	};
	this.port.onNormal = function() {
		_g.graphic.attr({ fill : "#FFFFFF", stroke : "#FFFFFF", strokeWidth : 0});
	};
};
retro.view.OutputPortView.__name__ = ["retro","view","OutputPortView"];
retro.view.OutputPortView.__super__ = retro.view.PortView;
retro.view.OutputPortView.prototype = $extend(retro.view.PortView.prototype,{
	OnConnected: function(o,i) {
		var inputView = this.jobView.diagramView.getInputPortView(i);
		var pathView = new retro.view.PathView(this.diagramController,this.jobView.diagramView,this,inputView,this.snap);
		this.views.push(pathView);
		inputView.views.push(pathView);
	}
	,step: function() {
		if(this.views.length == 0) {
		}
		var force = new retro.pub.Point2D(0,0);
		var _g = 0;
		var _g1 = this.jobView.getPortViews();
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			var coulomb = retro.pub.Point2D.sub(this.getPos(),ipv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.01;
			retro.pub.Point2D.timesToSelf(coulomb,1 / r * 100);
			retro.pub.Point2D.addToSelf(force,coulomb);
		}
		var _g2 = 0;
		var _g11 = this.views;
		while(_g2 < _g11.length) {
			var pathView = _g11[_g2];
			++_g2;
			var attraction = retro.pub.Point2D.sub(pathView.target.getPos(),this.getPos());
			var r1 = attraction.distance();
			if(r1 > 1000) r1 = 1000;
			retro.pub.Point2D.timesToSelf(attraction,r1 / 120);
			retro.pub.Point2D.addToSelf(force,attraction);
		}
		retro.pub.Point2D.timesToSelf(force,1);
		this.step_by_force(force);
		this.refresh();
		return this.velocity * this.velocity * 100;
	}
	,__class__: retro.view.OutputPortView
});
retro.view.PathView = function(diagramController,diagramView,source_port,target_port,snap) {
	var _g = this;
	this.onRemoveListeners = new Array();
	this.diagramController = diagramController;
	this.source = source_port;
	this.target = target_port;
	this.snap = snap;
	this.diagramView = diagramView;
	this.source.port.onDisconnected($bind(this,this.onDisconnect));
	this.group = this.snap.group();
	this.graphic = this.snap.line(0,0,0,0);
	this.coll = this.snap.line(0,0,0,0);
	this.graphic.attr({ stroke : "#FFFFFF", strokeWidth : 1});
	this.coll.attr({ stroke : "#a0a000", 'stroke-opacity' : 0, strokeWidth : 30});
	diagramView.path_group.append(this.group);
	this.coll.mousedown(function(e,x,y) {
		_g.visible_remove_btn();
	});
	this.group.append(this.graphic);
	this.group.append(this.coll);
	this.refresh();
	this.init_remove_btn();
};
retro.view.PathView.__name__ = ["retro","view","PathView"];
retro.view.PathView.prototype = {
	init_remove_btn: function() {
		var _g = this;
		Snap.load("images/remove.svg",function(f) {
			var g = f.select("g");
			_g.diagramView.control_group.append(g);
			g.mousedown(function(e,x,y) {
				retro.controller.DiagramController.disconnect(_g.source.port,_g.target.port);
				_g.remove_graphic.attr({ visibility : "hidden"});
			});
			g.attr({ visibility : "hidden"});
			g.transform("translate(" + 0 + "," + 0 + ")");
			_g.remove_graphic = g;
		});
	}
	,visible_remove_btn: function() {
		var _g = this;
		var xx = (this.target.getPos().getX() + this.source.getPos().getX()) / 2 - 80 - 15 - 6;
		var yy = (this.target.getPos().getY() + this.source.getPos().getY()) / 2 - 15 - 15 - 6;
		this.remove_graphic.transform("translate(" + xx + "," + yy + ")");
		this.remove_timer = new haxe.Timer(2000);
		this.remove_timer.run = function() {
			_g.remove_graphic.attr({ visibility : "hidden"});
			_g.remove_timer.stop();
		};
		this.remove_graphic.attr({ visibility : "visible"});
	}
	,onDisconnect: function(o,i) {
		if(this.target.port != i) return;
		this.group.remove();
		this.remove_graphic.remove();
		HxOverrides.remove(this.source.views,this);
		HxOverrides.remove(this.target.views,this);
		this.target.isConnected = false;
	}
	,refresh: function() {
		var xx = this.target.getPos().getX() - this.source.getPos().getX();
		var yy = this.target.getPos().getY() - this.source.getPos().getY();
		var len = Math.sqrt(xx * xx + yy * yy);
		xx = xx / len;
		yy = yy / len;
		this.graphic.attr({ x1 : this.source.getPos().getX() + xx * 20, y1 : this.source.getPos().getY() + yy * 20, x2 : this.target.getPos().getX() - xx * 20, y2 : this.target.getPos().getY() - yy * 20});
		this.coll.attr({ x1 : this.source.getPos().getX() + xx * 20, y1 : this.source.getPos().getY() + yy * 20, x2 : this.target.getPos().getX() - xx * 20, y2 : this.target.getPos().getY() - yy * 20});
	}
	,__class__: retro.view.PathView
};
retro.view.RunMode = { __ename__ : true, __constructs__ : ["Stop","Run"] };
retro.view.RunMode.Stop = ["Stop",0];
retro.view.RunMode.Stop.toString = $estr;
retro.view.RunMode.Stop.__enum__ = retro.view.RunMode;
retro.view.RunMode.Run = ["Run",1];
retro.view.RunMode.Run.toString = $estr;
retro.view.RunMode.Run.__enum__ = retro.view.RunMode;
retro.view.ProjectView = function(projectController,exportController,importController) {
	var _g = this;
	this.projectController = projectController;
	this.exportController = exportController;
	this.importController = importController;
	this.mode = retro.view.RunMode.Stop;
	var snap1 = this.projectController.getEditor().snap;
	var project = this.projectController.getProject();
	project.onDiagramAdded($bind(this,this.OnDiagramAdded));
	this.control_group = snap1.group();
	Snap.load("images/play.svg",function(f) {
		var g = f.select("svg");
		_g.control_group.append(g);
		_g.control_group.transform("translate(" + 15 + "," + 15 + ")");
		Snap.load("images/play-over.svg",function(f1) {
			var g2 = f1.select("svg");
			_g.control_group.transform("translate(" + 15 + "," + 15 + ")");
			g.click(function(e) {
				if(_g.mode == retro.view.RunMode.Stop) {
					_g.projectController.run();
					_g.mode = retro.view.RunMode.Run;
					_g.control_group.append(g2);
				}
			});
			g2.click(function(e1) {
				if(_g.mode == retro.view.RunMode.Run) {
					_g.projectController.stop();
					_g.mode = retro.view.RunMode.Stop;
					g2.remove();
				}
			});
		});
		Snap.load("/images/save.svg",function(f2) {
			var g1 = f2.select("g");
			g1.transform("translate(" + 220 + "," + 2 + ")");
			Snap.load("/images/save-over.svg",function(f3) {
				var g21 = f3.select("g");
				g21.transform("translate(" + 220 + "," + 2 + ")");
				_g.control_group.append(g1);
				g1.click(function(e2) {
					var exported = _g.exportController.do_export();
					_g.projectController.getEditor().save_all(exported);
					_g.control_group.append(g21);
					var timer = new haxe.Timer(500);
					timer.run = function() {
						g21.remove();
					};
				});
			});
		});
	});
	Snap.load("/images/load.svg",function(f4) {
		var g3 = f4.select("g");
		g3.transform("translate(" + 300 + "," + 2 + ")");
		Snap.load("/images/load-over.svg",function(f5) {
			var g22 = f5.select("g");
			g22.transform("translate(" + 300 + "," + 2 + ")");
			_g.control_group.append(g3);
			g3.click(function(e3) {
				var input;
				var _this = window.document;
				input = _this.createElement("input");
				input.type = "file";
				input.onchange = function(event) {
					var file = input.files.item(0);
					var fileReader = new FileReader();
					fileReader.onload = function(event1) {
						var data = JSON.parse(fileReader.result);
						var diagram = _g.projectController.getProject().getRootDiagram();
						var _g1 = 0;
						var _g2 = diagram.getJobs();
						while(_g1 < _g2.length) {
							var job = _g2[_g1];
							++_g1;
							diagram.removeJob(job);
						}
						_g.importController.import_diagram(_g.projectController.getProject().getRootDiagram(),data.diagram);
					};
					fileReader.readAsText(file);
				};
				input.click();
				_g.control_group.append(g22);
				var timer1 = new haxe.Timer(500);
				timer1.run = function() {
					g22.remove();
				};
			});
		});
	});
};
retro.view.ProjectView.__name__ = ["retro","view","ProjectView"];
retro.view.ProjectView.prototype = {
	OnDiagramAdded: function(diagram) {
		this.diagramView = new retro.view.DiagramView(new retro.controller.DiagramController(this.projectController.getEditor(),diagram,this.projectController.getEditor().virtualDevice));
	}
	,__class__: retro.view.ProjectView
};
retro.view.Thema = function() { };
retro.view.Thema.__name__ = ["retro","view","Thema"];
retro.view.ValueCarrierView = function(editor,valueCarrier,diagramView) {
	this.valueCarrier = valueCarrier;
	this.diagramView = diagramView;
	this.valueCarrier.onStep($bind(this,this.OnStep));
	var snap = editor.snap;
	this.pos = new retro.pub.Point2D(0,0);
	this.group = snap.group();
	var t = this.value2String(valueCarrier.getValue().value);
	var text = snap.text(-2,4,t);
	text.attr({ 'font-size' : "8pt", fill : "#FFFFFF", 'font-family' : "Helvetica, Arial, sans-serif"});
	this.graphic = snap.rect(-20,-20,40 + (t.length - 1) * 6,40,20,20);
	this.graphic.attr({ fill : "#E67E22", strokeWidth : 1, stroke : "#E67E22"});
	this.group.append(this.graphic);
	this.group.append(text);
	this.startPosition();
};
retro.view.ValueCarrierView.__name__ = ["retro","view","ValueCarrierView"];
retro.view.ValueCarrierView.prototype = {
	value2String: function(v) {
		if(Type["typeof"](v) == ValueType.TObject) return "Object"; else if(Type["typeof"](v) == ValueType.TNull) return "Null"; else if(Type["typeof"](v) == ValueType.TFloat) return Std.string(v); else if(Type["typeof"](v) == ValueType.TInt) return JSON.stringify(v); else if(Type["typeof"](v) == ValueType.TFloat) return v; else if(Type["typeof"](v) == ValueType.TBool) {
			if(v == true) return "True"; else return "False";
		} else {
			var class_name = Type.getClassName(Type.getClass(v));
			if(class_name == "String") return v; else return class_name;
		}
	}
	,OnUsed: function() {
		this.remove();
	}
	,OnStep: function(endCallback) {
		var destPortView = this.diagramView.getInputPortView(this.valueCarrier.destPort);
		var destTransform = { transform : "translate(" + destPortView.getPos().getX() + "," + destPortView.getPos().getY() + ")"};
		this.group.animate(destTransform,retro.view.ValueCarrierView.speed,null,endCallback);
	}
	,remove: function() {
		this.group.stop();
		this.group.remove();
	}
	,startPosition: function() {
		var outputPortView = this.diagramView.getOutputPortView(this.valueCarrier.srcPort);
		this.setPos(outputPortView.getPos().getX(),outputPortView.getPos().getY());
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,__class__: retro.view.ValueCarrierView
};
retro.vm = {};
retro.vm.Application = function() {
	this.diagram = null;
};
retro.vm.Application.__name__ = ["retro","vm","Application"];
retro.vm.Application.prototype = {
	getName: function() {
		return "Application Name";
	}
	,parse: function(json_obj) {
	}
	,parse_from_json: function(json_text) {
	}
	,__class__: retro.vm.Application
};
retro.vm.Mode = { __ename__ : true, __constructs__ : ["Play","Stop"] };
retro.vm.Mode.Play = ["Play",0];
retro.vm.Mode.Play.toString = $estr;
retro.vm.Mode.Play.__enum__ = retro.vm.Mode;
retro.vm.Mode.Stop = ["Stop",1];
retro.vm.Mode.Stop.toString = $estr;
retro.vm.Mode.Stop.__enum__ = retro.vm.Mode;
retro.vm.Runtime = function(diagram) {
	this.diagram = diagram;
};
retro.vm.Runtime.__name__ = ["retro","vm","Runtime"];
retro.vm.Runtime.prototype = {
	isRunning: function() {
		return this.mode == retro.vm.Mode.Play;
	}
	,run: function() {
		this.play();
	}
	,stop: function() {
		var _g = this;
		this.mode = retro.vm.Mode.Stop;
		this.diagram.getValueCarriers().map(function(valueCarrier) {
			_g.diagram.removeValueCarrier(valueCarrier);
		});
	}
	,play: function() {
		var _g = this;
		this.mode = retro.vm.Mode.Play;
		this.diagram.getJobs().map(function(job) {
			job.onPlay(function(result) {
				_g.sendResult(job,result);
			});
		});
	}
	,run_step_job: function(job) {
		var _g = this;
		job.work(function(result) {
			job.getInputPorts().map(function(p) {
				_g.diagram.removeValueCarrier(p.useValueCarrier());
			});
			_g.sendResult(job,result);
		});
	}
	,sendResult: function(job,result) {
		var _g1 = this;
		job.getOutputPorts().map(function(p) {
			{
				var _g = result.get(p.name);
				switch(_g[1]) {
				case 0:
					return;
				case 1:
					var v = _g[2];
					p.connection.map(function(c) {
						var valueCarrier = new retro.model.ValueCarrier(new retro.model.Value(p.type,v),p,c);
						_g1.diagram.addValueCarrier(valueCarrier);
						valueCarrier.step(function(inputPort) {
							if(_g1.mode == retro.vm.Mode.Play) {
								inputPort.setValueCarrier(valueCarrier);
								if(inputPort.parent.isReady()) _g1.run_step_job(inputPort.parent);
							}
						});
					});
					break;
				}
			}
		});
	}
	,__class__: retro.vm.Runtime
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
retro.view.ValueCarrierView.speed = Std.parseInt(window.sessionStorage.getItem("speed"));
if(retro.view.ValueCarrierView.speed == null) retro.view.ValueCarrierView.speed = 1000;
retro.view.Thema.fill = "#FCFCFC";
retro.view.Thema.stroke = "#FFFFFF";
retro.view.Thema.strokeWidth = 1;
retro.view.Thema.fontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.fontSize = "8pt";
retro.view.Thema.fontFill = "#2C3E50";
retro.view.Thema.radius = 20;
retro.view.Thema.white = "#FFFFFF";
retro.view.Thema.orange = "#E67E22";
retro.view.Thema.blue = "#3498DB";
retro.view.Thema.jobTitleFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.jobTitleFontSize = "8pt";
retro.view.Thema.jobTitleFontFill = "#FFFFFF";
retro.view.Thema.jobWidth = 216;
retro.view.Thema.jobTitleHeight = 35;
retro.view.Thema.jobTitleTextX = 12;
retro.view.Thema.jobTitleTextY = 21;
retro.view.Thema.jobTitleFill = "#E67E22";
retro.view.Thema.jobTitleStroke = "#FFFFFF";
retro.view.Thema.jobTitleStrokeWidth = 0;
retro.view.Thema.jobOnePortHeight = 54;
retro.view.Thema.jobPortFill = "#FFFFFF";
retro.view.Thema.jobPortStroke = "#FFFFFF";
retro.view.Thema.jobPortStrokeWidth = 0;
retro.view.Thema.portRadius = 20;
retro.view.Thema.inputPortFill = "#3498DB";
retro.view.Thema.inputPortFillOpacity = 0;
retro.view.Thema.inputPortStroke = "#FFFFFF";
retro.view.Thema.inputPortStrokeWidth = 1;
retro.view.Thema.inputPortFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.inputPortFontSize = "8pt";
retro.view.Thema.inputPortFontFill = "#2C3E50";
retro.view.Thema.outputPortFill = "#FFFFFF";
retro.view.Thema.outputPortStroke = "#FFFFFF";
retro.view.Thema.outputPortStrokeWidth = 0;
retro.view.Thema.outputPortFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.outputPortFontSize = "8pt";
retro.view.Thema.outputPortFontFill = "#2C3E50";
retro.view.Thema.outputPortTextX = -50;
retro.view.Thema.outputPortTextY = 3;
retro.view.Thema.selectedOutputPortFill = "#E67E22";
retro.view.Thema.selectedOutputPortStroke = "#FFFFFF";
retro.view.Thema.selectedOutputPortStrokeWidth = 0;
retro.view.Thema.inputPortTextX = 20;
retro.view.Thema.inputPortTextY = 3;
retro.view.Thema.pathLineStroke = "#FFFFFF";
retro.view.Thema.pathLineStrokeWidth = 1;
retro.view.Thema.consoleFill = "#FFFFFF";
retro.view.Thema.consoleStroke = "#FFFFFF";
retro.view.Thema.consoleStrokeWidth = 0;
retro.view.Thema.consoleFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.consoleFontSize = "8pt";
retro.view.Thema.consoleFontFill = "#E67E22";
retro.view.Thema.constantValueFill = "#E67E22";
retro.view.Thema.constantValueStroke = "#E67E22";
retro.view.Thema.constantValueStrokeWidth = 1;
retro.view.Thema.constantValueFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.constantValueFontSize = "8pt";
retro.view.Thema.constantValueFontFill = "#ffffff";
retro.view.Thema.constantValueRadius = 20;
retro.view.Thema.valueCarrierFill = "#E67E22";
retro.view.Thema.valueCarrierStroke = "#E67E22";
retro.view.Thema.valueCarrierStrokeWidth = 1;
retro.view.Thema.valueCarrierFontFamily = "Helvetica, Arial, sans-serif";
retro.view.Thema.valueCarrierFontSize = "8pt";
retro.view.Thema.valueCarrierFontFill = "#FFFFFF";
retro.view.Thema.valueCarrierRadius = 20;
retro.view.Thema.playSvgX = 15;
retro.view.Thema.playSvgY = 15;
retro.view.Thema.createSvgX = 80;
retro.view.Thema.createSvgY = 15;
retro.view.Thema.saveSvgX = 220;
retro.view.Thema.saveSvgY = 2;
retro.view.Thema.loadSvgX = 300;
retro.view.Thema.loadSvgY = 2;
retro.view.Thema.dustboxRightX = 90;
retro.view.Thema.dustboxY = 10;
retro.view.Thema.dustboxWidth = 100;
retro.view.Thema.dustboxHeight = 100;
retro.view.Thema.removeRadius = 22;
Main.main();
})(typeof window != "undefined" ? window : exports);
