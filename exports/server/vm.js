(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { }
HxOverrides.__name__ = true;
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
var Std = function() { }
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
var VMMain_nodejs = function() { }
$hxExpose(VMMain_nodejs, "VMMain_nodejs");
VMMain_nodejs.__name__ = true;
VMMain_nodejs.main = function() {
}
VMMain_nodejs.run = function(data) {
	var project = new retro.model.Project();
	var importController = new retro.controller.ImportController(project,null);
	importController.do_import(data);
	var runtime = new retro.vm.Runtime(project.getRootDiagram());
	var job = project.getRootDiagram().getEntryPoint();
	runtime.run(job,[]);
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = true;
haxe.Timer.prototype = {
	run: function() {
		console.log("run");
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = true;
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
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
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
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Browser = function() { }
js.Browser.__name__ = true;
var retro = {}
retro.controller = {}
retro.controller.ImportController = function(project,virtualDevice) {
	this.project = project;
	this.modules = new Array();
	this.modules.push(new retro.library.core.Through());
	this.modules.push(new retro.library.core.Add());
	this.modules.push(new retro.library.core.Times());
	this.modules.push(new retro.library.core.Remainder());
	this.modules.push(new retro.library.core.Filter());
	this.modules.push(new retro.library.core.Drop());
	this.modules.push(new retro.library.core.Compare());
	this.modules.push(new retro.library.core.And());
	this.modules.push(new retro.library.core.Or());
	this.modules.push(new retro.library.core.Not());
	this.modules.push(new retro.library.core.Transistor());
	this.modules.push(new retro.library.system.Print(virtualDevice));
	this.modules.push(new retro.library.system.Scan(virtualDevice));
	this.modules.push(new retro.library.array.Create());
	this.modules.push(new retro.library.array.Length());
	this.modules.push(new retro.library.array.Push());
	this.modules.push(new retro.library.array.Pop());
	this.modules.push(new retro.library.array.Get());
	this.modules.push(new retro.library.data.Stack());
	this.modules.push(new retro.library.sphero.SetBackLED());
	this.modules.push(new retro.library.sphero.SetHeading());
	this.modules.push(new retro.library.sphero.Roll());
	this.modules.push(new retro.library.string.Split());
	this.modules.push(new retro.library.string.IndexOf());
	this.modules.push(new retro.library.string.ChatAt());
	this.modules.push(new retro.library.string.Substr());
	this.modules.push(new retro.library.string.Length());
	this.modules.push(new retro.library.string.LastIndexOf());
	this.modules.push(new retro.library.point2d.Add());
	this.modules.push(new retro.library.point2d.Sub());
	this.modules.push(new retro.library.point2d.Create());
	this.modules.push(new retro.library.point2d.Distance());
	this.modules.push(new retro.library.http.Post());
	this.modules.push(new retro.library.http.Get());
	this.modules.push(new retro.library.line2d.Create());
	this.modules.push(new retro.library.line2d.Distance());
	this.modules.push(new retro.library.list.Length());
	this.modules.push(new retro.library.list.Add());
	this.modules.push(new retro.library.list.Clear());
	this.modules.push(new retro.library.list.First());
	this.modules.push(new retro.library.list.IsEmpty());
	this.modules.push(new retro.library.list.Join());
	this.modules.push(new retro.library.list.Last());
	this.modules.push(new retro.library.list.Pop());
	this.modules.push(new retro.library.list.Push());
	this.modules.push(new retro.library.list.Remove());
	this.modules.push(new retro.library.math.Abs());
	this.modules.push(new retro.library.math.Acos());
	this.modules.push(new retro.library.math.Asin());
	this.modules.push(new retro.library.math.Atan());
	this.modules.push(new retro.library.math.Atan2());
	this.modules.push(new retro.library.math.Cos());
	this.modules.push(new retro.library.math.Sin());
	this.modules.push(new retro.library.math.Floor());
	this.modules.push(new retro.library.math.Log());
	this.modules.push(new retro.library.math.Max());
	this.modules.push(new retro.library.math.Min());
	this.modules.push(new retro.library.math.Pow());
	this.modules.push(new retro.library.math.Random());
	this.modules.push(new retro.library.math.Sqrt());
<<<<<<< HEAD
	this.modules.push(new retro.library.pigpio.Write());
=======
>>>>>>> codeiq
};
retro.controller.ImportController.__name__ = true;
retro.controller.ImportController.prototype = {
	import_job: function(model,diagram) {
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
		var _g = 0;
		while(_g < ips.length) {
			var ip = ips[_g];
			++_g;
			var inputPort = diagram.getInputPort(Std.string(model.id) + "." + Std.string(ip.name));
			if(ip.constant != null) inputPort.setConstant(new retro.model.Value(ip.constant.type,ip.constant.value));
		}
	}
	,import_diagram: function(diagram,diagram_model) {
		var jobs = diagram_model.jobs;
		var _g = 0;
		while(_g < jobs.length) {
			var j = jobs[_g];
			++_g;
			if(j.meta == "retro.model.EntryJob") {
				var entry = new retro.model.EntryJob(j.id);
				diagram.setEntryPoint(entry);
				entry.addOutputPort(new retro.model.OutputPort(entry,retro.pub.RetroType.RString,"output"));
				entry.setPos(j.pos.x,j.pos.y);
			} else if(j.meta == "retro.model.SymbolicLink") {
				var jobComponent = this.getModule(j.ref);
				var job = new retro.model.SymbolicLink(j.id,jobComponent);
				diagram.addJob(job);
				job.setPos(j.pos.x,j.pos.y);
			}
		}
		var _g = 0;
		while(_g < jobs.length) {
			var j = jobs[_g];
			++_g;
			this.import_job(j,diagram);
		}
	}
	,do_import: function(model) {
		var diagram = new retro.model.Diagram();
		this.project.setRootDiagram(diagram);
		this.import_diagram(diagram,model.model.diagram);
	}
	,getModule: function(name) {
		var _g = 0, _g1 = this.modules;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.getModuleName() == name) return m;
		}
		return null;
	}
	,getProject: function() {
		return this.project;
	}
}
retro.core = {}
retro.core.FlowerClass = function() { }
retro.core.FlowerClass.__name__ = true;
retro.core.Input = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Input.__name__ = true;
retro.core.Input.prototype = {
	getType: function() {
		return this.type;
	}
	,getName: function() {
		return this.name;
	}
}
retro.core.Inputs = function() {
	this.inputs = new Array();
};
retro.core.Inputs.__name__ = true;
retro.core.Inputs.prototype = {
	getArray: function() {
		return this.inputs;
	}
	,get: function(name) {
		var _g = 0, _g1 = this.inputs;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(input.name == name) return input;
		}
		return null;
	}
	,add: function(name,type) {
		this.inputs.push(new retro.core.Input(name,type));
	}
}
retro.core.JobComponent = function() { }
retro.core.JobComponent.__name__ = true;
retro.core.Outputs = function() {
	this.outputs = new Array();
};
retro.core.Outputs.__name__ = true;
retro.core.Outputs.prototype = {
	getArray: function() {
		return this.outputs;
	}
	,get: function(name) {
		var _g = 0, _g1 = this.outputs;
		while(_g < _g1.length) {
			var output = _g1[_g];
			++_g;
			if(output.name == name) return output;
		}
		return null;
	}
	,add: function(name,type) {
		this.outputs.push(new retro.core.Output(name,type));
	}
}
retro.core.Output = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Output.__name__ = true;
retro.core.Output.prototype = {
	getName: function() {
		return this.name;
	}
	,getType: function() {
		return this.type;
	}
}
retro.core.Params = function() {
	this.params = new Array();
};
retro.core.Params.__name__ = true;
retro.core.Params.prototype = {
	toString: function() {
		var str = "[";
		var _g = 0, _g1 = this.params;
		while(_g < _g1.length) {
			var param = _g1[_g];
			++_g;
			str += "{" + param.name + "," + Std.string(param.value.value) + "}";
		}
		str += "]";
		return str;
	}
	,add: function(name,value) {
		this.params.push(new retro.core.Param(name,value));
	}
	,get: function(name) {
		var _g = 0, _g1 = this.params;
		while(_g < _g1.length) {
			var param = _g1[_g];
			++_g;
			if(param.name == name) return param;
		}
		return null;
	}
}
retro.core.Param = function(name,value) {
	this.name = name;
	this.value = value;
};
retro.core.Param.__name__ = true;
retro.core.Param.prototype = {
	getValue: function() {
		return this.value.value;
	}
	,isEmpty: function() {
		return this.value == null;
	}
}
retro.core.Result = function() {
	this.script_result = new Array();
};
retro.core.Result.__name__ = true;
retro.core.Result.prototype = {
	get: function(portname) {
		var _g = 0, _g1 = this.script_result;
		while(_g < _g1.length) {
			var sr = _g1[_g];
			++_g;
			if(sr.portname == portname) return sr;
		}
		return null;
	}
	,set: function(portname,value) {
		var _g = 0, _g1 = this.script_result;
		while(_g < _g1.length) {
			var sr = _g1[_g];
			++_g;
			if(sr.portname == portname) {
				sr.value = value;
				return;
			}
		}
		this.script_result.push(new retro.core.ScriptReturnValue(portname,value));
	}
}
retro.core.ScriptReturnValue = function(portname,value) {
	this.portname = portname;
	this.value = value;
};
retro.core.ScriptReturnValue.__name__ = true;
retro.core.VirtualDevice = function() {
};
retro.core.VirtualDevice.__name__ = true;
retro.core.VirtualDevice.prototype = {
	getSnap: function() {
		return this.snap;
	}
	,setSVGDevice: function(snap) {
		this.snap = snap;
	}
	,getConsoleDevice: function() {
		return this.consoleDevice;
	}
	,setConsoleDevice: function(consoleDevice) {
		this.consoleDevice = consoleDevice;
	}
}
retro.library = {}
retro.library.array = {}
retro.library.array.Create = function() {
	this.name = "Create";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Create.__name__ = true;
retro.library.array.Create.__interfaces__ = [retro.core.JobComponent];
retro.library.array.Create.prototype = {
	getModuleName: function() {
		return "array.Create";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",[]);
		cb(result);
	}
}
retro.library.array.Get = function() {
	this.name = "Get";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.inputs.add("index",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Get.__name__ = true;
retro.library.array.Get.__interfaces__ = [retro.core.JobComponent];
retro.library.array.Get.prototype = {
	getModuleName: function() {
		return "array.Get";
	}
	,onInputRecieved: function(params,cb) {
		var array = params.get("array");
		var index = params.get("index");
		if(array.isEmpty() || index.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",array.getValue()[index.getValue()]);
		cb(result);
	}
}
retro.library.array.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Length.__name__ = true;
retro.library.array.Length.__interfaces__ = [retro.core.JobComponent];
retro.library.array.Length.prototype = {
	getModuleName: function() {
		return "array.Length";
	}
	,onInputRecieved: function(params,cb) {
		var array = params.get("array");
		if(array.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",array.getValue().length);
		cb(result);
	}
}
retro.library.array.Pop = function() {
	this.name = "Pop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("array",retro.pub.RetroType.RNumber);
	this.outputs.add("value",retro.pub.RetroType.RNumber);
};
retro.library.array.Pop.__name__ = true;
retro.library.array.Pop.__interfaces__ = [retro.core.JobComponent];
retro.library.array.Pop.prototype = {
	getModuleName: function() {
		return "array.Pop";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		var array = input.getValue();
		var value = array.pop();
		result.set("array",array);
		result.set("value",value);
		cb(result);
	}
}
retro.library.array.Push = function() {
	this.name = "Push";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.inputs.add("value",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Push.__name__ = true;
retro.library.array.Push.__interfaces__ = [retro.core.JobComponent];
retro.library.array.Push.prototype = {
	getModuleName: function() {
		return "array.Push";
	}
	,onInputRecieved: function(params,cb) {
		var array = params.get("array");
		var value = params.get("value");
		if(array.isEmpty() || value.isEmpty()) {
			cb(null);
			return;
		}
		array.getValue().push(value.getValue());
		var result = new retro.core.Result();
		result.set("output",array.getValue());
		cb(result);
	}
}
retro.library.core = {}
retro.library.core.Add = function() {
	this.name = "Add";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Add.__name__ = true;
retro.library.core.Add.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Add.prototype = {
	getModuleName: function() {
		return "core.Add";
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		if(input1.isEmpty() || input2.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input1.getValue() + input2.getValue());
		cb(result);
	}
}
retro.library.core.And = function() {
	this.name = "And";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.And.__name__ = true;
retro.library.core.And.__interfaces__ = [retro.core.JobComponent];
retro.library.core.And.prototype = {
	getModuleName: function() {
		return "core.And";
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		if(input1.isEmpty() || input2.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input1.getValue() && input2.getValue());
		cb(result);
	}
}
retro.library.core.Compare = function() {
	this.name = "Compare";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("value",retro.pub.RetroType.RNumber);
	this.inputs.add("comparison",retro.pub.RetroType.RNumber);
	this.inputs.add("operator",retro.pub.RetroType.RString);
	this.outputs.add("pass",retro.pub.RetroType.RNumber);
};
retro.library.core.Compare.__name__ = true;
retro.library.core.Compare.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Compare.prototype = {
	getModuleName: function() {
		return "core.Compare";
	}
	,onInputRecieved: function(params,cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var operator = params.get("operator");
		if(value.isEmpty() || comparison.isEmpty() || operator.isEmpty()) {
			cb(null);
			return;
		}
		var pass = false;
		var _g = operator.getValue();
		switch(_g) {
		case "eq":case "==":
			pass = value.getValue() == comparison.getValue();
			break;
		case "ne":case "!=":
			pass = value.getValue() != comparison.getValue();
			break;
		case "gt":case ">":
			pass = value.getValue() > comparison.getValue();
			break;
		case "lt":case "<":
			pass = value.getValue() < comparison.getValue();
			break;
		case "ge":case ">=":
			pass = value.getValue() >= comparison.getValue();
			break;
		case "le":case "<=":
			pass = value.getValue() <= comparison.getValue();
			break;
		default:
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("pass",pass);
		cb(result);
	}
}
retro.library.core.Drop = function() {
	this.name = "Drop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
};
retro.library.core.Drop.__name__ = true;
retro.library.core.Drop.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Drop.prototype = {
	getModuleName: function() {
		return "core.Drop";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		cb(result);
	}
}
retro.library.core.Filter = function() {
	this.name = "Filter";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("value",retro.pub.RetroType.RNumber);
	this.inputs.add("comparison",retro.pub.RetroType.RNumber);
	this.inputs.add("operator",retro.pub.RetroType.RString);
	this.outputs.add("pass",retro.pub.RetroType.RNumber);
};
retro.library.core.Filter.__name__ = true;
retro.library.core.Filter.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Filter.prototype = {
	getModuleName: function() {
		return "core.Filter";
	}
	,onInputRecieved: function(params,cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var operator = params.get("operator");
		if(value.isEmpty() || comparison.isEmpty() || operator.isEmpty()) {
			cb(null);
			return;
		}
		var pass = false;
		var _g = operator.getValue();
		switch(_g) {
		case "eq":case "==":
			pass = value.getValue() == comparison.getValue();
			break;
		case "ne":case "!=":
			pass = value.getValue() != comparison.getValue();
			break;
		case "gt":case ">":
			pass = value.getValue() > comparison.getValue();
			break;
		case "lt":case "<":
			pass = value.getValue() < comparison.getValue();
			break;
		case "ge":case ">=":
			pass = value.getValue() >= comparison.getValue();
			break;
		case "le":case "<=":
			pass = value.getValue() <= comparison.getValue();
			break;
		default:
			cb(null);
			return;
		}
		if(pass == false) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("pass",value.getValue());
		cb(result);
	}
}
retro.library.core.Not = function() {
	this.name = "Not";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Not.__name__ = true;
retro.library.core.Not.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Not.prototype = {
	getModuleName: function() {
		return "core.Not";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",!input.getValue());
		cb(result);
	}
}
retro.library.core.Or = function() {
	this.name = "Or";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Or.__name__ = true;
retro.library.core.Or.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Or.prototype = {
	getModuleName: function() {
		return "core.Or";
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		if(input1.isEmpty() || input2.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input1.getValue() || input2.getValue());
		cb(result);
	}
}
retro.library.core.Remainder = function() {
	this.name = "Remainder";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Remainder.__name__ = true;
retro.library.core.Remainder.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Remainder.prototype = {
	getModuleName: function() {
		return "core.Remainder";
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		if(input1.isEmpty() || input2.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input1.getValue() % input2.getValue());
		cb(result);
	}
}
retro.library.core.Through = function() {
	this.name = "Through";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Through.__name__ = true;
retro.library.core.Through.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Through.prototype = {
	getModuleName: function() {
		return "core.Through";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.core.Times = function() {
	this.name = "Times";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Times.__name__ = true;
retro.library.core.Times.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Times.prototype = {
	getModuleName: function() {
		return "core.Times";
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		if(input1.isEmpty() || input2.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input1.getValue() * input2.getValue());
		cb(result);
	}
}
retro.library.core.Transistor = function() {
	this.name = "Transistor";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("emitter",retro.pub.RetroType.RNumber);
	this.inputs.add("base",retro.pub.RetroType.RNumber);
	this.outputs.add("collector",retro.pub.RetroType.RNumber);
};
retro.library.core.Transistor.__name__ = true;
retro.library.core.Transistor.__interfaces__ = [retro.core.JobComponent];
retro.library.core.Transistor.prototype = {
	getModuleName: function() {
		return "core.Transistor";
	}
	,onInputRecieved: function(params,cb) {
		var emitter = params.get("emitter");
		var base = params.get("base");
		if(emitter.isEmpty() || base.isEmpty() || base.getValue() == false) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("collector",emitter.getValue());
		cb(result);
	}
}
retro.library.data = {}
retro.library.data.Stack = function() {
	this.name = "Stack";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("push",retro.pub.RetroType.RNumber);
	this.inputs.add("pop",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
	this.datas = new Array();
};
retro.library.data.Stack.__name__ = true;
retro.library.data.Stack.__interfaces__ = [retro.core.JobComponent];
retro.library.data.Stack.prototype = {
	getModuleName: function() {
		return "data.Stack";
	}
	,onInputRecieved: function(params,cb) {
		var push = params.get("push");
		var pop = params.get("pop");
		if(!push.isEmpty()) {
			this.datas.push(push.getValue());
			cb(null);
			return;
		} else if(!pop.isEmpty()) {
			var result = new retro.core.Result();
			result.set("output",this.datas.pop());
			cb(result);
		}
	}
}
retro.library.http = {}
retro.library.http.Get = function() {
	this.name = "Get";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("http",retro.pub.RetroType.RNumber);
	this.inputs.add("url",retro.pub.RetroType.RNumber);
	this.inputs.add("params",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.http.Get.__name__ = true;
retro.library.http.Get.__interfaces__ = [retro.core.JobComponent];
retro.library.http.Get.prototype = {
	getModuleName: function() {
		return "http.Get";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.http.Post = function() {
	this.name = "Post";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("http",retro.pub.RetroType.RNumber);
	this.inputs.add("url",retro.pub.RetroType.RNumber);
	this.inputs.add("params",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.http.Post.__name__ = true;
retro.library.http.Post.__interfaces__ = [retro.core.JobComponent];
retro.library.http.Post.prototype = {
	getModuleName: function() {
		return "http.Post";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.line2d = {}
retro.library.line2d.Create = function() {
	this.name = "Create";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("line2d",retro.pub.RetroType.RNumber);
	this.inputs.add("p1",retro.pub.RetroType.RNumber);
	this.inputs.add("p2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.line2d.Create.__name__ = true;
retro.library.line2d.Create.__interfaces__ = [retro.core.JobComponent];
retro.library.line2d.Create.prototype = {
	getModuleName: function() {
		return "line2d.Create";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.line2d.Distance = function() {
	this.name = "Distance";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("line2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.line2d.Distance.__name__ = true;
retro.library.line2d.Distance.__interfaces__ = [retro.core.JobComponent];
retro.library.line2d.Distance.prototype = {
	getModuleName: function() {
		return "line2d.Distance";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list = {}
retro.library.list.Add = function() {
	this.name = "Add";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("item",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Add.__name__ = true;
retro.library.list.Add.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Add.prototype = {
	getModuleName: function() {
		return "list.Add";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Clear = function() {
	this.name = "Clear";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Clear.__name__ = true;
retro.library.list.Clear.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Clear.prototype = {
	getModuleName: function() {
		return "list.Clear";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.First = function() {
	this.name = "First";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.First.__name__ = true;
retro.library.list.First.__interfaces__ = [retro.core.JobComponent];
retro.library.list.First.prototype = {
	getModuleName: function() {
		return "list.First";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.IsEmpty = function() {
	this.name = "IsEmpty";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.IsEmpty.__name__ = true;
retro.library.list.IsEmpty.__interfaces__ = [retro.core.JobComponent];
retro.library.list.IsEmpty.prototype = {
	getModuleName: function() {
		return "list.IsEmpty";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Join = function() {
	this.name = "Join";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Join.__name__ = true;
retro.library.list.Join.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Join.prototype = {
	getModuleName: function() {
		return "list.Join";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Last = function() {
	this.name = "Last";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Last.__name__ = true;
retro.library.list.Last.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Last.prototype = {
	getModuleName: function() {
		return "list.Last";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Length.__name__ = true;
retro.library.list.Length.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Length.prototype = {
	getModuleName: function() {
		return "list.Length";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Pop = function() {
	this.name = "Pop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Pop.__name__ = true;
retro.library.list.Pop.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Pop.prototype = {
	getModuleName: function() {
		return "list.Pop";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Push = function() {
	this.name = "Push";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("item",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Push.__name__ = true;
retro.library.list.Push.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Push.prototype = {
	getModuleName: function() {
		return "list.Push";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.list.Remove = function() {
	this.name = "Remove";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("index",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Remove.__name__ = true;
retro.library.list.Remove.__interfaces__ = [retro.core.JobComponent];
retro.library.list.Remove.prototype = {
	getModuleName: function() {
		return "list.Remove";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.math = {}
retro.library.math.Abs = function() {
	this.name = "Abs";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Abs.__name__ = true;
retro.library.math.Abs.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Abs.prototype = {
	getModuleName: function() {
		return "math.Abs";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.abs(input.getValue()));
		cb(result);
	}
}
retro.library.math.Acos = function() {
	this.name = "Acos";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Acos.__name__ = true;
retro.library.math.Acos.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Acos.prototype = {
	getModuleName: function() {
		return "math.Acos";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.acos(input.getValue()));
		cb(result);
	}
}
retro.library.math.Asin = function() {
	this.name = "Asin";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Asin.__name__ = true;
retro.library.math.Asin.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Asin.prototype = {
	getModuleName: function() {
		return "math.Asin";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.asin(input.getValue()));
		cb(result);
	}
}
retro.library.math.Atan = function() {
	this.name = "Atan";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Atan.__name__ = true;
retro.library.math.Atan.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Atan.prototype = {
	getModuleName: function() {
		return "math.Atan";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.atan(input.getValue()));
		cb(result);
	}
}
retro.library.math.Atan2 = function() {
	this.name = "Atan2";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Atan2.__name__ = true;
retro.library.math.Atan2.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Atan2.prototype = {
	getModuleName: function() {
		return "math.Atan2";
	}
	,onInputRecieved: function(params,cb) {
		var x = params.get("x");
		var y = params.get("y");
		if(x.isEmpty() || y.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.atan2(x.getValue(),y.getValue()));
		cb(result);
	}
}
retro.library.math.Cos = function() {
	this.name = "Cos";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Cos.__name__ = true;
retro.library.math.Cos.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Cos.prototype = {
	getModuleName: function() {
		return "math.Cos";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.cos(input.getValue()));
		cb(result);
	}
}
retro.library.math.Floor = function() {
	this.name = "Floor";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Floor.__name__ = true;
retro.library.math.Floor.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Floor.prototype = {
	getModuleName: function() {
		return "math.Floor";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.floor(input.getValue()));
		cb(result);
	}
}
retro.library.math.Log = function() {
	this.name = "Log";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("math",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Log.__name__ = true;
retro.library.math.Log.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Log.prototype = {
	getModuleName: function() {
		return "math.Log";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.log(input.getValue()));
		cb(result);
	}
}
retro.library.math.Max = function() {
	this.name = "Max";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("a",retro.pub.RetroType.RNumber);
	this.inputs.add("b",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Max.__name__ = true;
retro.library.math.Max.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Max.prototype = {
	getModuleName: function() {
		return "math.Max";
	}
	,onInputRecieved: function(params,cb) {
		var a = params.get("a");
		var b = params.get("b");
		if(a.isEmpty() || b.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.max(a.getValue(),b.getValue()));
		cb(result);
	}
}
retro.library.math.Min = function() {
	this.name = "Min";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("a",retro.pub.RetroType.RNumber);
	this.inputs.add("b",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Min.__name__ = true;
retro.library.math.Min.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Min.prototype = {
	getModuleName: function() {
		return "math.Min";
	}
	,onInputRecieved: function(params,cb) {
		var a = params.get("a");
		var b = params.get("b");
		if(a.isEmpty() || b.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.min(a.getValue(),b.getValue()));
		cb(result);
	}
}
retro.library.math.Pow = function() {
	this.name = "Pow";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("v",retro.pub.RetroType.RNumber);
	this.inputs.add("exp",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Pow.__name__ = true;
retro.library.math.Pow.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Pow.prototype = {
	getModuleName: function() {
		return "math.Pow";
	}
	,onInputRecieved: function(params,cb) {
		var v = params.get("v");
		var exp = params.get("exp");
		if(v.isEmpty() || exp.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.pow(v.getValue(),exp.getValue()));
		cb(result);
	}
}
retro.library.math.Random = function() {
	this.name = "Random";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("v",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Random.__name__ = true;
retro.library.math.Random.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Random.prototype = {
	getModuleName: function() {
		return "math.Random";
	}
	,onInputRecieved: function(params,cb) {
		var v = params.get("v");
		if(v.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",v.getValue() * Math.random());
		cb(result);
	}
}
retro.library.math.Sin = function() {
	this.name = "Sin";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Sin.__name__ = true;
retro.library.math.Sin.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Sin.prototype = {
	getModuleName: function() {
		return "math.Sin";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.sin(input.getValue()));
		cb(result);
	}
}
retro.library.math.Sqrt = function() {
	this.name = "Sqrt";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Sqrt.__name__ = true;
retro.library.math.Sqrt.__interfaces__ = [retro.core.JobComponent];
retro.library.math.Sqrt.prototype = {
	getModuleName: function() {
		return "math.Sqrt";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",Math.sqrt(input.getValue()));
		cb(result);
	}
}
<<<<<<< HEAD
retro.library.pigpio = {}
retro.library.pigpio.Write = function() {
	this.name = "Write";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("pin",retro.pub.RetroType.RNumber);
	this.inputs.add("value",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.pigpio.Write.__name__ = true;
retro.library.pigpio.Write.__interfaces__ = [retro.core.JobComponent];
retro.library.pigpio.Write.prototype = {
	getModuleName: function() {
		return "pigpio.Write";
	}
	,onInputRecieved: function(params,cb) {
		var pin = params.get("pin");
		var valueParam = params.get("value");
		if(pin.isEmpty() || valueParam.isEmpty()) {
			cb(null);
			return;
		}
		var pin_no = pin.getValue();
		var value = valueParam.getValue();
		Pigpio.open(pin_no,"output",function(err) {
			Pigpio.write(pin_no,value);
			Pigpio.close(pin_no);
			var result = new retro.core.Result();
			result.set("output",0);
			cb(result);
		});
	}
}
=======
>>>>>>> codeiq
retro.library.point2d = {}
retro.library.point2d.Add = function() {
	this.name = "Add";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Add.__name__ = true;
retro.library.point2d.Add.__interfaces__ = [retro.core.JobComponent];
retro.library.point2d.Add.prototype = {
	getModuleName: function() {
		return "point2d.Add";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.point2d.Create = function() {
	this.name = "Create";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Create.__name__ = true;
retro.library.point2d.Create.__interfaces__ = [retro.core.JobComponent];
retro.library.point2d.Create.prototype = {
	getModuleName: function() {
		return "point2d.Create";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.point2d.Distance = function() {
	this.name = "Distance";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Distance.__name__ = true;
retro.library.point2d.Distance.__interfaces__ = [retro.core.JobComponent];
retro.library.point2d.Distance.prototype = {
	getModuleName: function() {
		return "point2d.Distance";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.point2d.Sub = function() {
	this.name = "Sub";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Sub.__name__ = true;
retro.library.point2d.Sub.__interfaces__ = [retro.core.JobComponent];
retro.library.point2d.Sub.prototype = {
	getModuleName: function() {
		return "point2d.Sub";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.sphero = {}
retro.library.sphero.Roll = function() {
	this.name = "Roll";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("sphero",retro.pub.RetroType.RNumber);
	this.inputs.add("speed",retro.pub.RetroType.RNumber);
	this.inputs.add("angle",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.sphero.Roll.__name__ = true;
retro.library.sphero.Roll.__interfaces__ = [retro.core.JobComponent];
retro.library.sphero.Roll.prototype = {
	getModuleName: function() {
		return "sphero.Roll";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.sphero.SetBackLED = function() {
	this.name = "SetBackLED";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("sphero",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.sphero.SetBackLED.__name__ = true;
retro.library.sphero.SetBackLED.__interfaces__ = [retro.core.JobComponent];
retro.library.sphero.SetBackLED.prototype = {
	getModuleName: function() {
		return "sphero.SetBackLED";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.sphero.SetHeading = function() {
	this.name = "SetHeading";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("sphero",retro.pub.RetroType.RNumber);
	this.inputs.add("r",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.sphero.SetHeading.__name__ = true;
retro.library.sphero.SetHeading.__interfaces__ = [retro.core.JobComponent];
retro.library.sphero.SetHeading.prototype = {
	getModuleName: function() {
		return "sphero.SetHeading";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string = {}
retro.library.string.ChatAt = function() {
	this.name = "ChatAt";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("index",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.ChatAt.__name__ = true;
retro.library.string.ChatAt.__interfaces__ = [retro.core.JobComponent];
retro.library.string.ChatAt.prototype = {
	getModuleName: function() {
		return "string.ChatAt";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string.IndexOf = function() {
	this.name = "IndexOf";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("char",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.IndexOf.__name__ = true;
retro.library.string.IndexOf.__interfaces__ = [retro.core.JobComponent];
retro.library.string.IndexOf.prototype = {
	getModuleName: function() {
		return "string.IndexOf";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string.LastIndexOf = function() {
	this.name = "LastIndexOf";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("char",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.LastIndexOf.__name__ = true;
retro.library.string.LastIndexOf.__interfaces__ = [retro.core.JobComponent];
retro.library.string.LastIndexOf.prototype = {
	getModuleName: function() {
		return "string.LastIndexOf";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.Length.__name__ = true;
retro.library.string.Length.__interfaces__ = [retro.core.JobComponent];
retro.library.string.Length.prototype = {
	getModuleName: function() {
		return "string.Length";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string.Split = function() {
	this.name = "Split";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.Split.__name__ = true;
retro.library.string.Split.__interfaces__ = [retro.core.JobComponent];
retro.library.string.Split.prototype = {
	getModuleName: function() {
		return "string.Split";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.string.Substr = function() {
	this.name = "Substr";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("start",retro.pub.RetroType.RNumber);
	this.inputs.add("end",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.Substr.__name__ = true;
retro.library.string.Substr.__interfaces__ = [retro.core.JobComponent];
retro.library.string.Substr.prototype = {
	getModuleName: function() {
		return "string.Substr";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.system = {}
retro.library.system.Print = function(virtualDevice) {
	this.name = "Print";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
	this.virtualDevice = virtualDevice;
};
retro.library.system.Print.__name__ = true;
retro.library.system.Print.__interfaces__ = [retro.core.JobComponent];
retro.library.system.Print.prototype = {
	getModuleName: function() {
		return "system.Print";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		js.Browser.document.write(Std.string(input.getValue()) + "");
		console.log(input.getValue());
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
}
retro.library.system.Scan = function(virtualDevice) {
	this.name = "Scan";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
	this.virtualDevice = virtualDevice;
};
retro.library.system.Scan.__name__ = true;
retro.library.system.Scan.__interfaces__ = [retro.core.JobComponent];
retro.library.system.Scan.prototype = {
	getModuleName: function() {
		return "system.Scan";
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		if(input.isEmpty()) {
			cb(null);
			return;
		}
		var str = js.Browser.window.prompt("Standard Input","");
		var result = new retro.core.Result();
		result.set("output",str);
		cb(result);
	}
}
retro.model = {}
retro.model.Diagram = function() {
	this.jobs = new Array();
	this.valueCarriers = new Array();
	this.onJobAddedListeners = new Array();
	this.onJobRemovedListeners = new Array();
	this.onValueCarrierAddedListeners = new Array();
	this.onValueCarrierRemovedListeners = new Array();
	this.onValueCarrierClearedListeners = new Array();
};
retro.model.Diagram.__name__ = true;
retro.model.Diagram.prototype = {
	fireOnValueCarrierCleared: function() {
		var _g = 0, _g1 = this.onValueCarrierClearedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,fireOnValueCarrierRemoved: function(vc) {
		var _g = 0, _g1 = this.onValueCarrierRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(vc);
		}
	}
	,fireOnValueCarrierAdded: function(vc) {
		var _g = 0, _g1 = this.onValueCarrierAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(vc);
		}
	}
	,fireOnJobRemoved: function(j) {
		var _g = 0, _g1 = this.onJobRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,fireOnJobAdded: function(j) {
		var _g = 0, _g1 = this.onJobAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onValueCarrierCleared: function(listener) {
		this.onValueCarrierClearedListeners.push(listener);
	}
	,onValueCarrierRemoved: function(listener) {
		this.onValueCarrierRemovedListeners.push(listener);
	}
	,onValueCarrierAdded: function(listener) {
		this.onValueCarrierAddedListeners.push(listener);
	}
	,onJobRemoved: function(listener) {
		this.onJobRemovedListeners.push(listener);
	}
	,onJobAdded: function(listener) {
		this.onJobAddedListeners.push(listener);
	}
	,clearValueCarriers: function() {
		this.valueCarriers = new Array();
		this.fireOnValueCarrierCleared();
	}
	,getValueCarriers: function() {
		return this.valueCarriers;
	}
	,removeValueCarrier: function(valueCarrier) {
		this.fireOnValueCarrierRemoved(valueCarrier);
		HxOverrides.remove(this.valueCarriers,valueCarrier);
	}
	,addValueCarrier: function(valueCarrier) {
		this.fireOnValueCarrierAdded(valueCarrier);
		this.valueCarriers.push(valueCarrier);
	}
	,getJobs: function() {
		return this.jobs;
	}
	,getInputPort: function(uri) {
		var ids = uri.split(".");
		var _g = 0, _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == ids[0]) return job.getInputPort(ids[1]);
		}
		return null;
	}
	,getOutputPort: function(uri) {
		var ids = uri.split(".");
		var _g = 0, _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == ids[0]) return job.getOutputPort(ids[1]);
		}
		return null;
	}
	,getJob: function(id) {
		var _g = 0, _g1 = this.jobs;
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			if(job.getId() == id) return job;
		}
		return null;
	}
	,removeJob: function(job) {
		this.fireOnJobRemoved(job);
		HxOverrides.remove(this.jobs,job);
	}
	,addJob: function(job) {
		this.fireOnJobAdded(job);
		this.jobs.push(job);
	}
	,getEntryPoint: function() {
		return this.entryPoint;
	}
	,setEntryPoint: function(entry) {
		this.entryPoint = entry;
		this.addJob(this.entryPoint);
	}
}
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
retro.model.Job.__name__ = true;
retro.model.Job.prototype = {
	getJSON: function() {
		var json = { };
		json.id = this.getId();
		return json;
	}
	,fireOnPosChangedListeners: function(x,y) {
		var _g = 0, _g1 = this.onPosChangedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(x,y);
		}
	}
	,onPosChanged: function(listener) {
		this.onPosChangedListeners.push(listener);
	}
	,fireOnOutputPortRemovedListeners: function(j) {
		var _g = 0, _g1 = this.onOutputPortRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onOutputPortRemoved: function(listener) {
		this.onOutputPortRemovedListeners.push(listener);
	}
	,fireOnInputPortRemovedListeners: function(j) {
		var _g = 0, _g1 = this.onInputPortRemovedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onInputPortRemoved: function(listener) {
		this.onInputPortRemovedListeners.push(listener);
	}
	,fireOnOutputPortAddedListeners: function(j) {
		var _g = 0, _g1 = this.onOutputPortAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onOutputPortAdded: function(listener) {
		this.onOutputPortAddedListeners.push(listener);
	}
	,fireOnInputPortAddedListeners: function(j) {
		var _g = 0, _g1 = this.onInputPortAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(j);
		}
	}
	,onInputPortAdded: function(listener) {
		this.onInputPortAddedListeners.push(listener);
	}
	,getOutputPort: function(name) {
		var _g = 0, _g1 = this.outputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(name == p.name) return p;
		}
		return null;
	}
	,getInputPort: function(name) {
		var _g = 0, _g1 = this.inputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(name == p.name) return p;
		}
		return null;
	}
	,getWorker: function() {
		return new retro.vm.Worker(this,function(params,cb) {
			cb(new retro.core.Result());
		});
	}
	,getParams: function() {
		var params = new retro.core.Params();
		var _g = 0, _g1 = this.inputPorts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var value = null;
			if(p.getValue() != null) value = p.getValue();
			params.add(p.getName(),value);
		}
		return params;
	}
	,removeOutputPort: function(port) {
		this.fireOnOutputPortRemovedListeners(port);
		HxOverrides.remove(this.outputPorts,port);
	}
	,removeInputPort: function(port) {
		this.fireOnInputPortRemovedListeners(port);
		HxOverrides.remove(this.inputPorts,port);
	}
	,addOutputPort: function(port) {
		this.fireOnOutputPortAddedListeners(port);
		this.outputPorts.push(port);
	}
	,addInputPort: function(port) {
		this.fireOnInputPortAddedListeners(port);
		this.inputPorts.push(port);
	}
	,getOutputPorts: function() {
		return this.outputPorts;
	}
	,getInputPorts: function() {
		return this.inputPorts;
	}
	,getPos: function() {
		return this.pos;
	}
	,setPos: function(x,y) {
		this.fireOnPosChangedListeners(x,y);
		this.pos.setX(x);
		this.pos.setY(y);
	}
	,getName: function() {
		return "";
	}
	,getId: function() {
		return this.id;
	}
}
retro.model.EntryJob = function(id) {
	retro.model.Job.call(this,id);
};
retro.model.EntryJob.__name__ = true;
retro.model.EntryJob.__super__ = retro.model.Job;
retro.model.EntryJob.prototype = $extend(retro.model.Job.prototype,{
	getName: function() {
		return "Entry";
	}
});
retro.model.Port = function(parent,type,name) {
	this.parent = parent;
	this.type = type;
	this.name = name;
};
retro.model.Port.__name__ = true;
retro.model.Port.prototype = {
	getParentJob: function() {
		return this.parent;
	}
	,getName: function() {
		return this.name;
	}
	,getURI: function() {
		return this.parent.getId() + "." + this.getName();
	}
}
retro.model.InputPort = function(parent,type,name) {
	retro.model.Port.call(this,parent,type,name);
	this.onSetValueListeners = new Array();
	this.onUseValueListeners = new Array();
	this.onSetConstantValueListeners = new Array();
	this.onRemoveConstantValueListeners = new Array();
};
retro.model.InputPort.__name__ = true;
retro.model.InputPort.__super__ = retro.model.Port;
retro.model.InputPort.prototype = $extend(retro.model.Port.prototype,{
	fireOnRemoveConstantValueListeners: function() {
		var _g = 0, _g1 = this.onRemoveConstantValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,fireOnSetConstantValueListeners: function(v) {
		var _g = 0, _g1 = this.onSetConstantValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(v);
		}
	}
	,fireOnUseValueListeners: function() {
		var _g = 0, _g1 = this.onUseValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,fireOnSetValueListeners: function(v) {
		var _g = 0, _g1 = this.onSetValueListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(v);
		}
	}
	,onRemoveConstantValue: function(listener) {
		this.onRemoveConstantValueListeners.push(listener);
	}
	,onSetConstantValue: function(listener) {
		this.onSetConstantValueListeners.push(listener);
	}
	,onUseValue: function(listener) {
		this.onUseValueListeners.push(listener);
	}
	,onSetValue: function(listener) {
		this.onSetValueListeners.push(listener);
	}
	,removeConstant: function() {
		this.constantValue = null;
		this.fireOnRemoveConstantValueListeners();
	}
	,setConstant: function(value) {
		this.constantValue = value;
		this.fireOnSetConstantValueListeners(this.constantValue);
	}
	,useValueCarrier: function() {
		var v = this.valueCarrier;
		this.valueCarrier = null;
		this.fireOnUseValueListeners();
		return v;
	}
	,getValue: function() {
		if(this.constantValue != null) return this.constantValue; else {
			if(this.valueCarrier == null) return null;
			return this.valueCarrier.getValue();
		}
	}
	,getConstantValue: function() {
		return this.constantValue;
	}
	,getValueCarrier: function() {
		return this.valueCarrier;
	}
	,setValueCarrier: function(valueCarrier) {
		this.valueCarrier = valueCarrier;
		this.fireOnSetValueListeners(this.valueCarrier);
	}
});
retro.model.Logic = function(id) {
	retro.model.Job.call(this,id);
};
retro.model.Logic.__name__ = true;
retro.model.Logic.__super__ = retro.model.Job;
retro.model.Logic.prototype = $extend(retro.model.Job.prototype,{
});
retro.model.OutputPort = function(parent,type,name) {
	retro.model.Port.call(this,parent,type,name);
	this.connection = new Array();
	this.onConnectedListeners = new Array();
	this.onDisconnectedListeners = new Array();
};
retro.model.OutputPort.__name__ = true;
retro.model.OutputPort.__super__ = retro.model.Port;
retro.model.OutputPort.prototype = $extend(retro.model.Port.prototype,{
	fireOnDisconnectedListeners: function(o,i) {
		var _g = 0, _g1 = this.onDisconnectedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(o,i);
		}
	}
	,fireOnConnectedListeners: function(o,i) {
		var _g = 0, _g1 = this.onConnectedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(o,i);
		}
	}
	,onDisconnected: function(listener) {
		this.onDisconnectedListeners.push(listener);
	}
	,onConnected: function(listener) {
		this.onConnectedListeners.push(listener);
	}
	,disconnectToInputPort: function(port) {
		this.fireOnDisconnectedListeners(this,port);
		HxOverrides.remove(this.connection,port);
	}
	,connectToInputPort: function(port) {
		this.fireOnConnectedListeners(this,port);
		this.connection.push(port);
	}
	,getConnections: function() {
		return this.connection;
	}
});
retro.model.Project = function() {
	this.onDiagramAddedListeners = new Array();
};
retro.model.Project.__name__ = true;
retro.model.Project.prototype = {
	fireOnConnection: function(d) {
		var _g = 0, _g1 = this.onDiagramAddedListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l(d);
		}
	}
	,onDiagramAdded: function(listener) {
		this.onDiagramAddedListeners.push(listener);
	}
	,getRootDiagram: function() {
		return this.diagram;
	}
	,setRootDiagram: function(diagram) {
		this.diagram = diagram;
		this.fireOnConnection(this.diagram);
	}
}
retro.model.SymbolicLink = function(id,jobComponent) {
	retro.model.Job.call(this,id);
	this.prototype = jobComponent;
	var _g = 0, _g1 = this.prototype.inputs.getArray();
	while(_g < _g1.length) {
		var ip = _g1[_g];
		++_g;
		this.addInputPort(new retro.model.InputPort(this,ip.getType(),ip.getName()));
	}
	var _g = 0, _g1 = this.prototype.outputs.getArray();
	while(_g < _g1.length) {
		var op = _g1[_g];
		++_g;
		this.addOutputPort(new retro.model.OutputPort(this,op.getType(),op.getName()));
	}
};
retro.model.SymbolicLink.__name__ = true;
retro.model.SymbolicLink.__super__ = retro.model.Job;
retro.model.SymbolicLink.prototype = $extend(retro.model.Job.prototype,{
	getJSON: function() {
		var json = { };
		json.id = this.getId();
		json.ref = this.getName();
		return json;
	}
	,getWorker: function() {
		return new retro.vm.Worker(this,($_=this.prototype,$bind($_,$_.onInputRecieved)));
	}
	,getName: function() {
		return this.prototype.getModuleName();
	}
	,getPrototype: function() {
		return this.prototype;
	}
});
retro.model.Value = function(_type,_value) {
	this.type = _type;
	this.value = _value;
};
retro.model.Value.__name__ = true;
retro.model.ValueCarrier = function(value,src,dest) {
	this.count = 0;
	this.value = value;
	this.srcPort = src;
	this.destPort = dest;
	this.count = 0;
	this.onStepListeners = new Array();
};
retro.model.ValueCarrier.__name__ = true;
retro.model.ValueCarrier.prototype = {
	fireOnStepListeners: function() {
		var _g = 0, _g1 = this.onStepListeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			l();
		}
	}
	,onStep: function(listener) {
		this.onStepListeners.push(listener);
	}
	,getValue: function() {
		return this.value;
	}
	,step: function() {
		if(this.count > 9) return this.destPort; else {
			this.count++;
			this.fireOnStepListeners();
			return null;
		}
	}
}
retro.pub = {}
retro.pub.IDGenerator = function(uniqueEditorKey) {
	this.uniqueEditorKey = uniqueEditorKey;
	this.counter = 0;
};
retro.pub.IDGenerator.__name__ = true;
retro.pub.IDGenerator.getInstance = function(uniqueEditorKey) {
	if(retro.pub.IDGenerator.idGen == null) retro.pub.IDGenerator.idGen = new retro.pub.IDGenerator(uniqueEditorKey);
	return retro.pub.IDGenerator.idGen;
}
retro.pub.IDGenerator.prototype = {
	genID: function() {
		this.counter += 1;
		return this.uniqueEditorKey + Std.string(this.counter);
	}
}
retro.pub.Point2D = function(x,y) {
	this.x = x;
	this.y = y;
};
retro.pub.Point2D.__name__ = true;
retro.pub.Point2D.add = function(p1,p2) {
	return new retro.pub.Point2D(p1.x + p2.x,p1.y + p2.y);
}
retro.pub.Point2D.sub = function(p1,p2) {
	return new retro.pub.Point2D(p1.x - p2.x,p1.y - p2.y);
}
retro.pub.Point2D.addToSelf = function(p1,p2) {
	p1.x += p2.x;
	p1.y += p2.y;
}
retro.pub.Point2D.subToSelf = function(p1,p2) {
	p1.x -= p2.x;
	p1.y -= p2.y;
}
retro.pub.Point2D.timesToSelf = function(p1,t) {
	p1.x *= t;
	p1.y *= t;
}
retro.pub.Point2D.prototype = {
	distanceSq: function() {
		return this.getX() * this.getX();
	}
	,distance: function() {
		return Math.sqrt(this.distanceSq());
	}
	,normalized: function() {
		var len = Math.sqrt(this.x * this.x + this.y * this.y);
		this.x /= len;
		this.y /= len;
	}
	,setY: function(y) {
		this.y = y;
	}
	,setX: function(x) {
		this.x = x;
	}
	,getY: function() {
		return this.y;
	}
	,getX: function() {
		return this.x;
	}
}
retro.pub.RetroType = { __ename__ : true, __constructs__ : ["REmpty","RString","RNumber","RBool","RList","RTuple","RUnknown","RClass"] }
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
retro.pub.RetroType.RList = function(type) { var $x = ["RList",4,type]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; }
retro.pub.RetroType.RTuple = function(types) { var $x = ["RTuple",5,types]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; }
retro.pub.RetroType.RUnknown = function(id) { var $x = ["RUnknown",6,id]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; }
retro.pub.RetroType.RClass = function(type) { var $x = ["RClass",7,type]; $x.__enum__ = retro.pub.RetroType; $x.toString = $estr; return $x; }
retro.pub.RetroTypeChecker = function() { }
retro.pub.RetroTypeChecker.__name__ = true;
retro.pub.RetroTypeChecker.check = function(type1,type2) {
	return true;
}
retro.view = {}
retro.view.ConsoleView = function(snap,thema) {
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
	var _g1 = 0, _g11 = this.texts;
	while(_g1 < _g11.length) {
		var t = _g11[_g1];
		++_g1;
		t.attr({ 'font-size' : "18px", fill : "#f0f0ff"});
	}
	this.graphic.attr({ fill : "#202020", stroke : "#707070", strokeWidth : 5});
	this.pos = new retro.pub.Point2D(0,0);
	this.prev_pos = new retro.pub.Point2D(0,0);
	this.setPos(200,80);
	coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	coll.drag(function(dx,dy,x,y) {
		_g.addPos(dx - _g.prev_pos.getX(),dy - _g.prev_pos.getY());
		_g.prev_pos.setX(dx);
		_g.prev_pos.setY(dy);
	},function(x,y) {
		_g.prev_pos.setX(0);
		_g.prev_pos.setY(0);
		var cb = _g.scan_buffer.shift();
		if(cb != null) cb("dammy");
	},function(x,y) {
	});
	this.group.append(this.graphic);
	var _g1 = 0, _g11 = this.texts;
	while(_g1 < _g11.length) {
		var t = _g11[_g1];
		++_g1;
		this.group.append(t);
	}
	this.group.append(coll);
};
retro.view.ConsoleView.__name__ = true;
retro.view.ConsoleView.prototype = {
	OnPosChanged: function(x,y) {
		this.setPos(x,y);
	}
	,getPos: function() {
		return this.pos;
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,addPos: function(x,y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,getChar: function() {
	}
	,scan: function(cb) {
		var str = js.Browser.window.prompt("Standard Input","");
		cb(str);
	}
	,next_line: function() {
		if(this.current_line >= 7) {
			var _g1 = 0, _g = this.lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.lines[i] = "";
			}
			this.current_line = 0;
		} else this.current_line++;
	}
	,putChar: function(c) {
		if(c == "\n") this.next_line(); else {
			if(this.lines[this.current_line].length > 20) this.next_line();
			this.lines[this.current_line] += c;
			this.texts[this.current_line].attr({ text : this.lines[this.current_line]});
		}
	}
	,println: function(str) {
		this.print(str + "\n");
	}
	,print: function(str) {
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.putChar(str.charAt(i));
		}
	}
}
retro.vm = {}
retro.vm.Application = function() {
	this.diagram = null;
};
retro.vm.Application.__name__ = true;
retro.vm.Application.prototype = {
	parse_from_json: function(json_text) {
	}
	,parse: function(json_obj) {
	}
	,getName: function() {
		return "Application Name";
	}
}
retro.vm.Compiler = function(app) {
	this.app = app;
};
retro.vm.Compiler.__name__ = true;
retro.vm.Compiler.prototype = {
	compile: function(lang) {
		if(lang == "js") {
		} else if(lang == "Java") {
		} else if(lang == "obj-c") {
		} else if(lang == "c++") {
		} else if(lang == "go") {
		} else if(lang == "scala") {
		} else if(lang == "python") {
		}
		console.log(this.app.getName());
	}
}
retro.vm.Runtime = function(diagram) {
	this.diagram = diagram;
};
retro.vm.Runtime.__name__ = true;
retro.vm.Runtime.prototype = {
	run_step: function() {
		var _g4 = this;
		var _g = 0, _g1 = this.diagram.getValueCarriers();
		while(_g < _g1.length) {
			var valueCarrier = [_g1[_g]];
			++_g;
			var port = [valueCarrier[0].step()];
			if(port[0] == null) continue;
			port[0].setValueCarrier(valueCarrier[0]);
			var params = port[0].parent.getParams();
			var worker = port[0].parent.getWorker();
			worker.act(params,(function(port,valueCarrier) {
				return function(script_result) {
					if(script_result == null) return;
					var _g2 = 0, _g3 = port[0].parent.getInputPorts();
					while(_g2 < _g3.length) {
						var p = _g3[_g2];
						++_g2;
						_g4.diagram.removeValueCarrier(p.useValueCarrier());
					}
					_g4.diagram.removeValueCarrier(valueCarrier[0]);
					var _g2 = 0, _g3 = port[0].parent.getOutputPorts();
					while(_g2 < _g3.length) {
						var p = _g3[_g2];
						++_g2;
						var sr = script_result.get(p.name);
						if(sr == null) continue;
						var _g5 = 0, _g6 = p.connection;
						while(_g5 < _g6.length) {
							var c = _g6[_g5];
							++_g5;
							var newValueCarrier = new retro.model.ValueCarrier(new retro.model.Value(p.type,sr.value),p,c);
							_g4.diagram.addValueCarrier(newValueCarrier);
						}
					}
				};
			})(port,valueCarrier));
		}
	}
	,invoke_entry: function(entry,v) {
		var _g4 = this;
		var worker = entry.getWorker();
		worker.act(null,function(script_result) {
			var _g = 0, _g1 = entry.getOutputPorts();
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				var _g2 = 0, _g3 = p.connection;
				while(_g2 < _g3.length) {
					var c = _g3[_g2];
					++_g2;
					var newValueCarrier = new retro.model.ValueCarrier(v,p,c);
					_g4.diagram.addValueCarrier(newValueCarrier);
				}
			}
		});
		return true;
	}
	,stop: function() {
		this.timer.stop();
		this.timer = null;
	}
	,run: function(entry,v) {
		var _g = this;
		this.invoke_entry(entry,new retro.model.Value(retro.pub.RetroType.RNumber,v));
		this.timer = new haxe.Timer(100);
		this.timer.run = function() {
			_g.run_step();
		};
	}
	,isRunning: function() {
		if(this.timer != null) return true;
		return false;
	}
}
retro.vm.Worker = function(job,func) {
	this.job = job;
	this.func = func;
};
retro.vm.Worker.__name__ = true;
retro.vm.Worker.prototype = {
	act: function(params,cb) {
		this.func(params,cb);
	}
}
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.__name__ = true;
Array.__name__ = true;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
VMMain_nodejs.main();
function $hxExpose(src, path) {
	var o = typeof window != "undefined" ? window : exports;
	var parts = path.split(".");
	for(var ii = 0; ii < parts.length-1; ++ii) {
		var p = parts[ii];
		if(typeof o[p] == "undefined") o[p] = {};
		o = o[p];
	}
	o[parts[parts.length-1]] = src;
}
})();
