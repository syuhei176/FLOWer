(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { }
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
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
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Main = function() { }
$hxExpose(Main, "Main");
Main.__name__ = ["Main"];
Main.main = function() {
	var load = function(editorkey,id_header) {
		retro.pub.Editor.create(editorkey,id_header);
	};
}
Main.init = function(editorkey,id_header) {
	retro.pub.Editor.create(editorkey,id_header);
}
Main.codeiq = function() {
	retro.pub.Editor.createCodeIQ();
}
var IMap = function() { }
IMap.__name__ = ["IMap"];
var Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
var Std = function() { }
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	addSub: function(s,pos,len) {
		this.b += len == null?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
}
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
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
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
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
		var c = v.__class__;
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
}
Type.enumIndex = function(e) {
	return e[1];
}
var haxe = {}
haxe.Json = function() {
};
haxe.Json.__name__ = ["haxe","Json"];
haxe.Json.parse = function(text) {
	return new haxe.Json().doParse(text);
}
haxe.Json.stringify = function(value,replacer) {
	return new haxe.Json().toString(value,replacer);
}
haxe.Json.prototype = {
	parseNumber: function(c) {
		var start = this.pos - 1;
		var minus = c == 45, digit = !minus, zero = c == 48;
		var point = false, e = false, pm = false, end = false;
		while(true) {
			c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 48:
				if(zero && !point) this.invalidNumber(start);
				if(minus) {
					minus = false;
					zero = true;
				}
				digit = true;
				break;
			case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				if(zero && !point) this.invalidNumber(start);
				if(minus) minus = false;
				digit = true;
				zero = false;
				break;
			case 46:
				if(minus || point) this.invalidNumber(start);
				digit = false;
				point = true;
				break;
			case 101:case 69:
				if(minus || zero || e) this.invalidNumber(start);
				digit = false;
				e = true;
				break;
			case 43:case 45:
				if(!e || pm) this.invalidNumber(start);
				digit = false;
				pm = true;
				break;
			default:
				if(!digit) this.invalidNumber(start);
				this.pos--;
				end = true;
			}
			if(end) break;
		}
		var f = Std.parseFloat(HxOverrides.substr(this.str,start,this.pos - start));
		var i = f | 0;
		return i == f?i:f;
	}
	,invalidNumber: function(start) {
		throw "Invalid number at position " + start + ": " + HxOverrides.substr(this.str,start,this.pos - start);
	}
	,parseString: function() {
		var start = this.pos;
		var buf = new StringBuf();
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			if(c == 34) break;
			if(c == 92) {
				buf.addSub(this.str,start,this.pos - start - 1);
				c = this.str.charCodeAt(this.pos++);
				switch(c) {
				case 114:
					buf.b += "\r";
					break;
				case 110:
					buf.b += "\n";
					break;
				case 116:
					buf.b += "\t";
					break;
				case 98:
					buf.b += "";
					break;
				case 102:
					buf.b += "";
					break;
				case 47:case 92:case 34:
					buf.b += String.fromCharCode(c);
					break;
				case 117:
					var uc = Std.parseInt("0x" + HxOverrides.substr(this.str,this.pos,4));
					this.pos += 4;
					buf.b += String.fromCharCode(uc);
					break;
				default:
					throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
				}
				start = this.pos;
			} else if(c != c) throw "Unclosed string";
		}
		buf.addSub(this.str,start,this.pos - start - 1);
		return buf.b;
	}
	,parseRec: function() {
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 32:case 13:case 10:case 9:
				break;
			case 123:
				var obj = { }, field = null, comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 125:
						if(field != null || comma == false) this.invalidChar();
						return obj;
					case 58:
						if(field == null) this.invalidChar();
						obj[field] = this.parseRec();
						field = null;
						comma = true;
						break;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					case 34:
						if(comma) this.invalidChar();
						field = this.parseString();
						break;
					default:
						this.invalidChar();
					}
				}
				break;
			case 91:
				var arr = [], comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 93:
						if(comma == false) this.invalidChar();
						return arr;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					default:
						if(comma) this.invalidChar();
						this.pos--;
						arr.push(this.parseRec());
						comma = true;
					}
				}
				break;
			case 116:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 114 || this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return true;
			case 102:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 97 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 115 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return false;
			case 110:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 108) {
					this.pos = save;
					this.invalidChar();
				}
				return null;
			case 34:
				return this.parseString();
			case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 45:
				return this.parseNumber(c);
			default:
				this.invalidChar();
			}
		}
	}
	,invalidChar: function() {
		this.pos--;
		throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
	}
	,doParse: function(str) {
		this.str = str;
		this.pos = 0;
		return this.parseRec();
	}
	,quote: function(s) {
		this.buf.b += "\"";
		var i = 0;
		while(true) {
			var c = s.charCodeAt(i++);
			if(c != c) break;
			switch(c) {
			case 34:
				this.buf.b += "\\\"";
				break;
			case 92:
				this.buf.b += "\\\\";
				break;
			case 10:
				this.buf.b += "\\n";
				break;
			case 13:
				this.buf.b += "\\r";
				break;
			case 9:
				this.buf.b += "\\t";
				break;
			case 8:
				this.buf.b += "\\b";
				break;
			case 12:
				this.buf.b += "\\f";
				break;
			default:
				this.buf.b += String.fromCharCode(c);
			}
		}
		this.buf.b += "\"";
	}
	,toStringRec: function(k,v) {
		if(this.replacer != null) v = this.replacer(k,v);
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 8:
			this.buf.b += "\"???\"";
			break;
		case 4:
			this.objString(v);
			break;
		case 1:
			var v1 = v;
			this.buf.b += Std.string(v1);
			break;
		case 2:
			this.buf.b += Std.string(Math.isFinite(v)?v:"null");
			break;
		case 5:
			this.buf.b += "\"<fun>\"";
			break;
		case 6:
			var c = $e[2];
			if(c == String) this.quote(v); else if(c == Array) {
				var v1 = v;
				this.buf.b += "[";
				var len = v1.length;
				if(len > 0) {
					this.toStringRec(0,v1[0]);
					var i = 1;
					while(i < len) {
						this.buf.b += ",";
						this.toStringRec(i,v1[i++]);
					}
				}
				this.buf.b += "]";
			} else if(c == haxe.ds.StringMap) {
				var v1 = v;
				var o = { };
				var $it0 = v1.keys();
				while( $it0.hasNext() ) {
					var k1 = $it0.next();
					o[k1] = v1.get(k1);
				}
				this.objString(o);
			} else this.objString(v);
			break;
		case 7:
			var i = Type.enumIndex(v);
			var v1 = i;
			this.buf.b += Std.string(v1);
			break;
		case 3:
			var v1 = v;
			this.buf.b += Std.string(v1);
			break;
		case 0:
			this.buf.b += "null";
			break;
		}
	}
	,objString: function(v) {
		this.fieldsString(v,Reflect.fields(v));
	}
	,fieldsString: function(v,fields) {
		var first = true;
		this.buf.b += "{";
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var value = Reflect.field(v,f);
			if(Reflect.isFunction(value)) continue;
			if(first) first = false; else this.buf.b += ",";
			this.quote(f);
			this.buf.b += ":";
			this.toStringRec(f,value);
		}
		this.buf.b += "}";
	}
	,toString: function(v,replacer) {
		this.buf = new StringBuf();
		this.replacer = replacer;
		this.toStringRec("",v);
		return this.buf.b;
	}
	,__class__: haxe.Json
}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.prototype = {
	run: function() {
		haxe.Log.trace("run",{ fileName : "Timer.hx", lineNumber : 98, className : "haxe.Timer", methodName : "run"});
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,__class__: haxe.Timer
}
haxe.ds = {}
haxe.ds.StringMap = function() { }
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,__class__: haxe.ds.StringMap
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0, _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
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
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Browser = function() { }
js.Browser.__name__ = ["js","Browser"];
var retro = {}
retro.controller = {}
retro.controller.Controller = function() { }
retro.controller.Controller.__name__ = ["retro","controller","Controller"];
retro.controller.Controller.prototype = {
	__class__: retro.controller.Controller
}
retro.controller.DiagramController = function(editor,diagram,virtualDevice) {
	this.editor = editor;
	this.diagram = diagram;
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
	this.modules.push(new retro.library.snapsvg.Rect(virtualDevice));
	this.modules.push(new retro.library.snapsvg.Circle());
	this.modules.push(new retro.library.snapelement.Translate());
	this.modules.push(new retro.library.snapelement.Fill());
	this.modules.push(new retro.library.jquery.Find());
	this.modules.push(new retro.library.jquery.Html());
};
retro.controller.DiagramController.__name__ = ["retro","controller","DiagramController"];
retro.controller.DiagramController.__interfaces__ = [retro.controller.Controller];
retro.controller.DiagramController.disconnect = function(oport,iport) {
	oport.disconnectToInputPort(iport);
}
retro.controller.DiagramController.prototype = {
	getModule: function(name) {
		var _g = 0, _g1 = this.modules;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.getModuleName() == name) return m;
		}
		return null;
	}
	,clearRubberband: function() {
		this.start = null;
		this.end = null;
	}
	,setRubberbandEnd: function(port) {
		if(this.start == null) return false; else {
			this.end = port;
			this.start.connectToInputPort(this.end);
			return true;
		}
	}
	,setRubberbandStart: function(port) {
		this.start = port;
	}
	,removeJob: function(job) {
		this.diagram.removeJob(job);
	}
	,addLogic: function(id) {
		var job = new retro.model.Logic(id);
		this.diagram.addJob(job);
	}
	,addEntryJob: function() {
		var id = this.editor.IdGenerator.genID();
		var job = new retro.model.EntryJob(id);
		this.diagram.setEntryPoint(job);
		job.addOutputPort(new retro.model.OutputPort(job,retro.pub.RetroType.RString,"output"));
	}
	,addSymbolicLink: function(jobComponent) {
		var id = this.editor.IdGenerator.genID();
		var job = new retro.model.SymbolicLink(id,jobComponent);
		this.diagram.addJob(job);
		return job;
	}
	,addJob: function() {
		var id = this.editor.IdGenerator.genID();
		var job = new retro.model.Job(id);
		this.diagram.addJob(job);
	}
	,getDiagram: function() {
		return this.diagram;
	}
	,getEditor: function() {
		return this.editor;
	}
	,__class__: retro.controller.DiagramController
}
retro.controller.ExportController = function(editor,project) {
	this.editor = editor;
	this.project = project;
};
retro.controller.ExportController.__name__ = ["retro","controller","ExportController"];
retro.controller.ExportController.__interfaces__ = [retro.controller.Controller];
retro.controller.ExportController.prototype = {
	export_outputport: function(outputport) {
		var outputport_model = { };
		outputport_model.name = outputport.getName();
		outputport_model.connections = [];
		var _g = 0, _g1 = outputport.getConnections();
		while(_g < _g1.length) {
			var inputPort = _g1[_g];
			++_g;
			outputport_model.connections.push(inputPort.getURI());
		}
		return outputport_model;
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
	,export_job: function(job) {
		var job_model = job.getJSON();
		job_model.meta = Type.getClassName(Type.getClass(job));
		job_model.pos = { };
		job_model.pos.x = job.getPos().getX();
		job_model.pos.y = job.getPos().getY();
		job_model.inputports = [];
		job_model.outputports = [];
		var _g = 0, _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var port = _g1[_g];
			++_g;
			job_model.inputports.push(this.import_outputport(port));
		}
		var _g = 0, _g1 = job.getOutputPorts();
		while(_g < _g1.length) {
			var port = _g1[_g];
			++_g;
			job_model.outputports.push(this.export_outputport(port));
		}
		return job_model;
	}
	,export_diagram: function(diagram) {
		var diagram_model = { };
		diagram_model.jobs = [];
		var _g = 0, _g1 = diagram.getJobs();
		while(_g < _g1.length) {
			var job = _g1[_g];
			++_g;
			diagram_model.jobs.push(this.export_job(job));
		}
		return diagram_model;
	}
	,do_export: function() {
		var model = { };
		var diagram = this.project.getRootDiagram();
		model.diagram = this.export_diagram(diagram);
		return model;
	}
	,getProject: function() {
		return this.project;
	}
	,__class__: retro.controller.ExportController
}
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
	this.modules.push(new retro.library.snapsvg.Rect(virtualDevice));
	this.modules.push(new retro.library.snapsvg.Circle());
	this.modules.push(new retro.library.snapelement.Translate());
	this.modules.push(new retro.library.snapelement.Fill());
	this.modules.push(new retro.library.jquery.Find());
	this.modules.push(new retro.library.jquery.Html());
};
retro.controller.ImportController.__name__ = ["retro","controller","ImportController"];
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
	,__class__: retro.controller.ImportController
}
retro.controller.JobController = function(editor,job) {
	this.editor = editor;
	this.job = job;
};
retro.controller.JobController.__name__ = ["retro","controller","JobController"];
retro.controller.JobController.__interfaces__ = [retro.controller.Controller];
retro.controller.JobController.prototype = {
	disconnect: function(oport,iport) {
		oport.disconnectToInputPort(iport);
	}
	,connect: function(oport,iport) {
		oport.connectToInputPort(iport);
	}
	,removeOutputPort: function(port) {
	}
	,removeInputPort: function(port) {
	}
	,addOutputPort: function(name) {
		var port = new retro.model.OutputPort(this.job,retro.pub.RetroType.RString,name);
		this.job.addOutputPort(port);
	}
	,addInputPort: function(name) {
		var port = new retro.model.InputPort(this.job,retro.pub.RetroType.RString,name);
		this.job.addInputPort(port);
	}
	,changePos: function(x,y) {
		this.job.setPos(x,y);
	}
	,getJob: function() {
		return this.job;
	}
	,getEditor: function() {
		return this.editor;
	}
	,__class__: retro.controller.JobController
}
retro.controller.ProjectController = function(editor,project) {
	this.editor = editor;
	this.project = project;
};
retro.controller.ProjectController.__name__ = ["retro","controller","ProjectController"];
retro.controller.ProjectController.__interfaces__ = [retro.controller.Controller];
retro.controller.ProjectController.prototype = {
	stop: function() {
		if(this.runtime == null) this.runtime = new retro.vm.Runtime(this.project.getRootDiagram());
		this.runtime.stop();
		var diagram = this.getProject().getRootDiagram();
		diagram.clearValueCarriers();
	}
	,run: function() {
		if(this.runtime == null) this.runtime = new retro.vm.Runtime(this.project.getRootDiagram());
		var entry = this.getProject().getRootDiagram().getEntryPoint();
		this.runtime.run(entry);
	}
	,addDiagram: function() {
		var diagram = new retro.model.Diagram();
		var diagramController = new retro.controller.DiagramController(this.editor,diagram,this.editor.virtualDevice);
		var diagramView = new retro.view.DiagramView(diagramController);
		this.project.setRootDiagram(diagram);
	}
	,getProject: function() {
		return this.project;
	}
	,getEditor: function() {
		return this.editor;
	}
	,__class__: retro.controller.ProjectController
}
retro.core = {}
retro.core.FlowerClass = function() { }
retro.core.FlowerClass.__name__ = ["retro","core","FlowerClass"];
retro.core.FlowerClass.prototype = {
	__class__: retro.core.FlowerClass
}
retro.core.Input = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Input.__name__ = ["retro","core","Input"];
retro.core.Input.prototype = {
	getType: function() {
		return this.type;
	}
	,getName: function() {
		return this.name;
	}
	,__class__: retro.core.Input
}
retro.core.Inputs = function() {
	this.inputs = new Array();
};
retro.core.Inputs.__name__ = ["retro","core","Inputs"];
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
	,__class__: retro.core.Inputs
}
retro.core.JobComponent = function() { }
retro.core.JobComponent.__name__ = ["retro","core","JobComponent"];
retro.core.JobComponent.prototype = {
	__class__: retro.core.JobComponent
}
retro.core.Outputs = function() {
	this.outputs = new Array();
};
retro.core.Outputs.__name__ = ["retro","core","Outputs"];
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
	,__class__: retro.core.Outputs
}
retro.core.Output = function(name,type) {
	this.name = name;
	this.type = type;
};
retro.core.Output.__name__ = ["retro","core","Output"];
retro.core.Output.prototype = {
	getName: function() {
		return this.name;
	}
	,getType: function() {
		return this.type;
	}
	,__class__: retro.core.Output
}
retro.core.Params = function() {
	this.params = new Array();
};
retro.core.Params.__name__ = ["retro","core","Params"];
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
	,__class__: retro.core.Params
}
retro.core.Param = function(name,value) {
	this.name = name;
	this.value = value;
};
retro.core.Param.__name__ = ["retro","core","Param"];
retro.core.Param.prototype = {
	getValue: function() {
		return this.value.value;
	}
	,isEmpty: function() {
		return this.value == null;
	}
	,__class__: retro.core.Param
}
retro.core.Result = function() {
	this.script_result = new Array();
};
retro.core.Result.__name__ = ["retro","core","Result"];
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
	,__class__: retro.core.Result
}
retro.core.ScriptReturnValue = function(portname,value) {
	this.portname = portname;
	this.value = value;
};
retro.core.ScriptReturnValue.__name__ = ["retro","core","ScriptReturnValue"];
retro.core.ScriptReturnValue.prototype = {
	__class__: retro.core.ScriptReturnValue
}
retro.core.VirtualDevice = function() {
};
retro.core.VirtualDevice.__name__ = ["retro","core","VirtualDevice"];
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
	,__class__: retro.core.VirtualDevice
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
retro.library.array.Create.__name__ = ["retro","library","array","Create"];
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
	,__class__: retro.library.array.Create
}
retro.library.array.Get = function() {
	this.name = "Get";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.inputs.add("index",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Get.__name__ = ["retro","library","array","Get"];
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
	,__class__: retro.library.array.Get
}
retro.library.array.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Length.__name__ = ["retro","library","array","Length"];
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
	,__class__: retro.library.array.Length
}
retro.library.array.Pop = function() {
	this.name = "Pop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("array",retro.pub.RetroType.RNumber);
	this.outputs.add("value",retro.pub.RetroType.RNumber);
};
retro.library.array.Pop.__name__ = ["retro","library","array","Pop"];
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
	,__class__: retro.library.array.Pop
}
retro.library.array.Push = function() {
	this.name = "Push";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("array",retro.pub.RetroType.RNumber);
	this.inputs.add("value",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.array.Push.__name__ = ["retro","library","array","Push"];
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
	,__class__: retro.library.array.Push
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
retro.library.core.Add.__name__ = ["retro","library","core","Add"];
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
	,__class__: retro.library.core.Add
}
retro.library.core.And = function() {
	this.name = "And";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.And.__name__ = ["retro","library","core","And"];
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
	,__class__: retro.library.core.And
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
retro.library.core.Compare.__name__ = ["retro","library","core","Compare"];
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
	,__class__: retro.library.core.Compare
}
retro.library.core.Drop = function() {
	this.name = "Drop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
};
retro.library.core.Drop.__name__ = ["retro","library","core","Drop"];
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
	,__class__: retro.library.core.Drop
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
retro.library.core.Filter.__name__ = ["retro","library","core","Filter"];
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
	,__class__: retro.library.core.Filter
}
retro.library.core.Not = function() {
	this.name = "Not";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Not.__name__ = ["retro","library","core","Not"];
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
	,__class__: retro.library.core.Not
}
retro.library.core.Or = function() {
	this.name = "Or";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Or.__name__ = ["retro","library","core","Or"];
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
	,__class__: retro.library.core.Or
}
retro.library.core.Remainder = function() {
	this.name = "Remainder";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Remainder.__name__ = ["retro","library","core","Remainder"];
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
	,__class__: retro.library.core.Remainder
}
retro.library.core.Through = function() {
	this.name = "Through";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Through.__name__ = ["retro","library","core","Through"];
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
	,__class__: retro.library.core.Through
}
retro.library.core.Times = function() {
	this.name = "Times";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input1",retro.pub.RetroType.RNumber);
	this.inputs.add("input2",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.core.Times.__name__ = ["retro","library","core","Times"];
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
	,__class__: retro.library.core.Times
}
retro.library.core.Transistor = function() {
	this.name = "Transistor";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("emitter",retro.pub.RetroType.RNumber);
	this.inputs.add("base",retro.pub.RetroType.RNumber);
	this.outputs.add("collector",retro.pub.RetroType.RNumber);
};
retro.library.core.Transistor.__name__ = ["retro","library","core","Transistor"];
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
	,__class__: retro.library.core.Transistor
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
retro.library.data.Stack.__name__ = ["retro","library","data","Stack"];
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
	,__class__: retro.library.data.Stack
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
retro.library.http.Get.__name__ = ["retro","library","http","Get"];
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
	,__class__: retro.library.http.Get
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
retro.library.http.Post.__name__ = ["retro","library","http","Post"];
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
	,__class__: retro.library.http.Post
}
retro.library.jquery = {}
retro.library.jquery.Find = function() {
	this.name = "Find";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("selector",retro.pub.RetroType.RNumber);
	this.outputs.add("jquery",retro.pub.RetroType.RNumber);
};
retro.library.jquery.Find.__name__ = ["retro","library","jquery","Find"];
retro.library.jquery.Find.__interfaces__ = [retro.core.JobComponent];
retro.library.jquery.Find.prototype = {
	getModuleName: function() {
		return "jquery.Find";
	}
	,onInputRecieved: function(params,cb) {
		var selector = params.get("selector");
		if(selector.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("jquery",new js.JQuery("body").find(selector.getValue()));
		cb(result);
	}
	,__class__: retro.library.jquery.Find
}
retro.library.jquery.Html = function() {
	this.name = "Html";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("jquery",retro.pub.RetroType.RNumber);
	this.inputs.add("html",retro.pub.RetroType.RNumber);
	this.outputs.add("jquery",retro.pub.RetroType.RNumber);
};
retro.library.jquery.Html.__name__ = ["retro","library","jquery","Html"];
retro.library.jquery.Html.__interfaces__ = [retro.core.JobComponent];
retro.library.jquery.Html.prototype = {
	getModuleName: function() {
		return "jquery.Html";
	}
	,onInputRecieved: function(params,cb) {
		var jquery = params.get("jquery");
		var html = params.get("html");
		if(html.isEmpty() || jquery.isEmpty()) {
			cb(null);
			return;
		}
		var result = new retro.core.Result();
		result.set("jquery",jquery.getValue().html(html.getValue()));
		cb(result);
	}
	,__class__: retro.library.jquery.Html
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
retro.library.line2d.Create.__name__ = ["retro","library","line2d","Create"];
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
	,__class__: retro.library.line2d.Create
}
retro.library.line2d.Distance = function() {
	this.name = "Distance";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("line2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.line2d.Distance.__name__ = ["retro","library","line2d","Distance"];
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
	,__class__: retro.library.line2d.Distance
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
retro.library.list.Add.__name__ = ["retro","library","list","Add"];
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
	,__class__: retro.library.list.Add
}
retro.library.list.Clear = function() {
	this.name = "Clear";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Clear.__name__ = ["retro","library","list","Clear"];
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
	,__class__: retro.library.list.Clear
}
retro.library.list.First = function() {
	this.name = "First";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.First.__name__ = ["retro","library","list","First"];
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
	,__class__: retro.library.list.First
}
retro.library.list.IsEmpty = function() {
	this.name = "IsEmpty";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.IsEmpty.__name__ = ["retro","library","list","IsEmpty"];
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
	,__class__: retro.library.list.IsEmpty
}
retro.library.list.Join = function() {
	this.name = "Join";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Join.__name__ = ["retro","library","list","Join"];
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
	,__class__: retro.library.list.Join
}
retro.library.list.Last = function() {
	this.name = "Last";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Last.__name__ = ["retro","library","list","Last"];
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
	,__class__: retro.library.list.Last
}
retro.library.list.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Length.__name__ = ["retro","library","list","Length"];
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
	,__class__: retro.library.list.Length
}
retro.library.list.Pop = function() {
	this.name = "Pop";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Pop.__name__ = ["retro","library","list","Pop"];
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
	,__class__: retro.library.list.Pop
}
retro.library.list.Push = function() {
	this.name = "Push";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("item",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Push.__name__ = ["retro","library","list","Push"];
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
	,__class__: retro.library.list.Push
}
retro.library.list.Remove = function() {
	this.name = "Remove";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("list",retro.pub.RetroType.RNumber);
	this.inputs.add("index",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.list.Remove.__name__ = ["retro","library","list","Remove"];
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
	,__class__: retro.library.list.Remove
}
retro.library.math = {}
retro.library.math.Abs = function() {
	this.name = "Abs";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Abs.__name__ = ["retro","library","math","Abs"];
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
	,__class__: retro.library.math.Abs
}
retro.library.math.Acos = function() {
	this.name = "Acos";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Acos.__name__ = ["retro","library","math","Acos"];
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
	,__class__: retro.library.math.Acos
}
retro.library.math.Asin = function() {
	this.name = "Asin";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Asin.__name__ = ["retro","library","math","Asin"];
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
	,__class__: retro.library.math.Asin
}
retro.library.math.Atan = function() {
	this.name = "Atan";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Atan.__name__ = ["retro","library","math","Atan"];
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
	,__class__: retro.library.math.Atan
}
retro.library.math.Atan2 = function() {
	this.name = "Atan2";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Atan2.__name__ = ["retro","library","math","Atan2"];
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
	,__class__: retro.library.math.Atan2
}
retro.library.math.Cos = function() {
	this.name = "Cos";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Cos.__name__ = ["retro","library","math","Cos"];
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
	,__class__: retro.library.math.Cos
}
retro.library.math.Floor = function() {
	this.name = "Floor";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Floor.__name__ = ["retro","library","math","Floor"];
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
	,__class__: retro.library.math.Floor
}
retro.library.math.Log = function() {
	this.name = "Log";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("math",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Log.__name__ = ["retro","library","math","Log"];
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
	,__class__: retro.library.math.Log
}
retro.library.math.Max = function() {
	this.name = "Max";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("a",retro.pub.RetroType.RNumber);
	this.inputs.add("b",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Max.__name__ = ["retro","library","math","Max"];
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
	,__class__: retro.library.math.Max
}
retro.library.math.Min = function() {
	this.name = "Min";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("a",retro.pub.RetroType.RNumber);
	this.inputs.add("b",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Min.__name__ = ["retro","library","math","Min"];
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
	,__class__: retro.library.math.Min
}
retro.library.math.Pow = function() {
	this.name = "Pow";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("v",retro.pub.RetroType.RNumber);
	this.inputs.add("exp",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Pow.__name__ = ["retro","library","math","Pow"];
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
	,__class__: retro.library.math.Pow
}
retro.library.math.Random = function() {
	this.name = "Random";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("v",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Random.__name__ = ["retro","library","math","Random"];
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
	,__class__: retro.library.math.Random
}
retro.library.math.Sin = function() {
	this.name = "Sin";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Sin.__name__ = ["retro","library","math","Sin"];
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
	,__class__: retro.library.math.Sin
}
retro.library.math.Sqrt = function() {
	this.name = "Sqrt";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.math.Sqrt.__name__ = ["retro","library","math","Sqrt"];
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
	,__class__: retro.library.math.Sqrt
}
retro.library.point2d = {}
retro.library.point2d.Add = function() {
	this.name = "Add";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Add.__name__ = ["retro","library","point2d","Add"];
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
	,__class__: retro.library.point2d.Add
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
retro.library.point2d.Create.__name__ = ["retro","library","point2d","Create"];
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
	,__class__: retro.library.point2d.Create
}
retro.library.point2d.Distance = function() {
	this.name = "Distance";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Distance.__name__ = ["retro","library","point2d","Distance"];
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
	,__class__: retro.library.point2d.Distance
}
retro.library.point2d.Sub = function() {
	this.name = "Sub";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("point2d",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.point2d.Sub.__name__ = ["retro","library","point2d","Sub"];
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
	,__class__: retro.library.point2d.Sub
}
retro.library.snapelement = {}
retro.library.snapelement.Fill = function() {
	this.name = "Fill";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("snapelement",retro.pub.RetroType.RNumber);
	this.inputs.add("color",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.snapelement.Fill.__name__ = ["retro","library","snapelement","Fill"];
retro.library.snapelement.Fill.__interfaces__ = [retro.core.JobComponent];
retro.library.snapelement.Fill.prototype = {
	getModuleName: function() {
		return "snapelement.Fill";
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
	,__class__: retro.library.snapelement.Fill
}
retro.library.snapelement.Translate = function() {
	this.name = "Translate";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("snapelement",retro.pub.RetroType.RNumber);
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.snapelement.Translate.__name__ = ["retro","library","snapelement","Translate"];
retro.library.snapelement.Translate.__interfaces__ = [retro.core.JobComponent];
retro.library.snapelement.Translate.prototype = {
	getModuleName: function() {
		return "snapelement.Translate";
	}
	,onInputRecieved: function(params,cb) {
		var snapelement = params.get("snapelement");
		var x = params.get("x");
		var y = params.get("y");
		if(snapelement.isEmpty() || x.isEmpty() || y.isEmpty()) {
			cb(null);
			return;
		}
		snapelement.getValue().transform("translate(" + Std.string(x.getValue()) + "," + Std.string(y.getValue()) + ")");
		var result = new retro.core.Result();
		result.set("output",snapelement.getValue());
		cb(result);
	}
	,__class__: retro.library.snapelement.Translate
}
retro.library.snapsvg = {}
retro.library.snapsvg.Circle = function() {
	this.name = "Circle";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("snapsvg",retro.pub.RetroType.RNumber);
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.inputs.add("r",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.snapsvg.Circle.__name__ = ["retro","library","snapsvg","Circle"];
retro.library.snapsvg.Circle.__interfaces__ = [retro.core.JobComponent];
retro.library.snapsvg.Circle.prototype = {
	getModuleName: function() {
		return "snapsvg.Circle";
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
	,__class__: retro.library.snapsvg.Circle
}
retro.library.snapsvg.Rect = function(virtualDevice) {
	this.name = "Rect";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("x",retro.pub.RetroType.RNumber);
	this.inputs.add("y",retro.pub.RetroType.RNumber);
	this.inputs.add("w",retro.pub.RetroType.RNumber);
	this.inputs.add("h",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
	this.virtualDevice = virtualDevice;
};
retro.library.snapsvg.Rect.__name__ = ["retro","library","snapsvg","Rect"];
retro.library.snapsvg.Rect.__interfaces__ = [retro.core.JobComponent];
retro.library.snapsvg.Rect.prototype = {
	getModuleName: function() {
		return "snapsvg.Rect";
	}
	,onInputRecieved: function(params,cb) {
		var x = params.get("x");
		var y = params.get("y");
		var w = params.get("w");
		var h = params.get("h");
		if(x.isEmpty() || y.isEmpty() || w.isEmpty() || h.isEmpty()) {
			cb(null);
			return;
		}
		var snapElement = this.virtualDevice.getSnap().rect(x.getValue(),y.getValue(),w.getValue(),h.getValue());
		var result = new retro.core.Result();
		result.set("output",snapElement);
		cb(result);
	}
	,__class__: retro.library.snapsvg.Rect
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
retro.library.sphero.Roll.__name__ = ["retro","library","sphero","Roll"];
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
	,__class__: retro.library.sphero.Roll
}
retro.library.sphero.SetBackLED = function() {
	this.name = "SetBackLED";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("sphero",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.sphero.SetBackLED.__name__ = ["retro","library","sphero","SetBackLED"];
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
	,__class__: retro.library.sphero.SetBackLED
}
retro.library.sphero.SetHeading = function() {
	this.name = "SetHeading";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("sphero",retro.pub.RetroType.RNumber);
	this.inputs.add("r",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.sphero.SetHeading.__name__ = ["retro","library","sphero","SetHeading"];
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
	,__class__: retro.library.sphero.SetHeading
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
retro.library.string.ChatAt.__name__ = ["retro","library","string","ChatAt"];
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
	,__class__: retro.library.string.ChatAt
}
retro.library.string.IndexOf = function() {
	this.name = "IndexOf";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("char",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.IndexOf.__name__ = ["retro","library","string","IndexOf"];
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
	,__class__: retro.library.string.IndexOf
}
retro.library.string.LastIndexOf = function() {
	this.name = "LastIndexOf";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.inputs.add("char",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.LastIndexOf.__name__ = ["retro","library","string","LastIndexOf"];
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
	,__class__: retro.library.string.LastIndexOf
}
retro.library.string.Length = function() {
	this.name = "Length";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.Length.__name__ = ["retro","library","string","Length"];
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
	,__class__: retro.library.string.Length
}
retro.library.string.Split = function() {
	this.name = "Split";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("string",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
};
retro.library.string.Split.__name__ = ["retro","library","string","Split"];
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
	,__class__: retro.library.string.Split
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
retro.library.string.Substr.__name__ = ["retro","library","string","Substr"];
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
	,__class__: retro.library.string.Substr
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
retro.library.system.Print.__name__ = ["retro","library","system","Print"];
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
		this.virtualDevice.getConsoleDevice().print(Std.string(input.getValue()) + "");
		haxe.Log.trace(input.getValue(),{ fileName : "Print.hx", lineNumber : 38, className : "retro.library.system.Print", methodName : "onInputRecieved"});
		var result = new retro.core.Result();
		result.set("output",input.getValue());
		cb(result);
	}
	,__class__: retro.library.system.Print
}
retro.library.system.Scan = function(virtualDevice) {
	this.name = "Scan";
	this.inputs = new retro.core.Inputs();
	this.outputs = new retro.core.Outputs();
	this.inputs.add("input",retro.pub.RetroType.RNumber);
	this.outputs.add("output",retro.pub.RetroType.RNumber);
	this.virtualDevice = virtualDevice;
};
retro.library.system.Scan.__name__ = ["retro","library","system","Scan"];
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
		this.virtualDevice.getConsoleDevice().scan(function(str) {
			var result = new retro.core.Result();
			result.set("output",str);
			cb(result);
		});
	}
	,__class__: retro.library.system.Scan
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
retro.model.Diagram.__name__ = ["retro","model","Diagram"];
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
		var _g = 0, _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var inputPort = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = inputPort.connection;
			while(_g2 < _g3.length) {
				var srcPort = _g3[_g2];
				++_g2;
				srcPort.disconnectToInputPort(inputPort);
			}
		}
		var _g = 0, _g1 = job.getOutputPorts();
		while(_g < _g1.length) {
			var outputPort = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = outputPort.connection;
			while(_g2 < _g3.length) {
				var destPort = _g3[_g2];
				++_g2;
				outputPort.disconnectToInputPort(destPort);
			}
		}
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
	,__class__: retro.model.Diagram
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
retro.model.Job.__name__ = ["retro","model","Job"];
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
	,__class__: retro.model.Job
}
retro.model.EntryJob = function(id) {
	retro.model.Job.call(this,id);
};
retro.model.EntryJob.__name__ = ["retro","model","EntryJob"];
retro.model.EntryJob.__super__ = retro.model.Job;
retro.model.EntryJob.prototype = $extend(retro.model.Job.prototype,{
	getName: function() {
		return "Entry";
	}
	,__class__: retro.model.EntryJob
});
retro.model.Port = function(parent,type,name) {
	this.parent = parent;
	this.type = type;
	this.name = name;
};
retro.model.Port.__name__ = ["retro","model","Port"];
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
	,__class__: retro.model.Port
}
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
	,__class__: retro.model.InputPort
});
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
		HxOverrides.remove(port.connection,this);
		HxOverrides.remove(this.connection,port);
	}
	,connectToInputPort: function(port) {
		this.fireOnConnectedListeners(this,port);
		port.connection.push(this);
		this.connection.push(port);
	}
	,getConnections: function() {
		return this.connection;
	}
	,__class__: retro.model.OutputPort
});
retro.model.Project = function() {
	this.onDiagramAddedListeners = new Array();
};
retro.model.Project.__name__ = ["retro","model","Project"];
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
	,__class__: retro.model.Project
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
retro.model.SymbolicLink.__name__ = ["retro","model","SymbolicLink"];
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
	,__class__: retro.model.SymbolicLink
});
retro.model.Value = function(_type,_value) {
	this.type = _type;
	this.value = _value;
};
retro.model.Value.__name__ = ["retro","model","Value"];
retro.model.Value.prototype = {
	__class__: retro.model.Value
}
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
	,__class__: retro.model.ValueCarrier
}
retro.pub = {}
retro.pub.Editor = function(id_header,retroClient,editorkey) {
	this.thema = new retro.view.Thema();
	this.snap = new Snap("#svg");
	this.IdGenerator = retro.pub.IDGenerator.getInstance(id_header);
	this.retroClient = retroClient;
	this.editorkey = editorkey;
};
retro.pub.Editor.__name__ = ["retro","pub","Editor"];
retro.pub.Editor.create = function(editorkey,id_header) {
	var retroClient = new RetroClient(editorkey);
	retroClient.init(function(data) {
		var editor = new retro.pub.Editor(id_header,retroClient,editorkey);
		var project = new retro.model.Project();
		var projectController = new retro.controller.ProjectController(editor,project);
		editor.setProjectController(projectController);
		var projectView = new retro.view.ProjectView(projectController,new retro.controller.ExportController(editor,project));
		editor.setProjectView(projectView);
		var virtualDevice = new retro.core.VirtualDevice();
		editor.virtualDevice = virtualDevice;
		var consoleDevice = new retro.view.ConsoleView(editor.snap,editor.thema);
		virtualDevice.setConsoleDevice(consoleDevice);
		virtualDevice.setSVGDevice(editor.snap);
		if(data.model.diagram) {
			var importController = new retro.controller.ImportController(project,virtualDevice);
			importController.do_import(data);
		} else {
			var diagram = new retro.model.Diagram();
			project.setRootDiagram(diagram);
			var diagramController = new retro.controller.DiagramController(editor,diagram,virtualDevice);
			diagramController.addEntryJob();
		}
	});
}
retro.pub.Editor.createCodeIQ = function() {
	var editor = new retro.pub.Editor();
	editor.IdGenerator = retro.pub.IDGenerator.getInstance("codeIQ");
	var project = new retro.model.Project();
	var projectController = new retro.controller.ProjectController(editor,project);
	editor.setProjectController(projectController);
	var projectView = new retro.view.ProjectView(projectController,new retro.controller.ExportController(editor,project));
	editor.setProjectView(projectView);
	var virtualDevice = new retro.core.VirtualDevice();
	editor.virtualDevice = virtualDevice;
	var consoleDevice = new retro.view.ConsoleView(editor.snap,editor.thema);
	virtualDevice.setConsoleDevice(consoleDevice);
	virtualDevice.setSVGDevice(editor.snap);
	var diagram = new retro.model.Diagram();
	project.setRootDiagram(diagram);
	var diagramController = new retro.controller.DiagramController(editor,diagram,virtualDevice);
	diagramController.addEntryJob();
}
retro.pub.Editor.prototype = {
	getRuntime: function() {
		this.runtime = new retro.vm.Runtime(this.projectController.getProject().getRootDiagram());
		return this.runtime;
	}
	,save_all: function(data) {
		this.retroClient.save_all(data);
	}
	,setProjectView: function(projectView) {
		this.projectView = projectView;
	}
	,setProjectController: function(projectController) {
		this.projectController = projectController;
	}
	,getEditorKey: function() {
		return this.editorkey;
	}
	,__class__: retro.pub.Editor
}
retro.pub.IDGenerator = function(uniqueEditorKey) {
	this.uniqueEditorKey = uniqueEditorKey;
	this.counter = 0;
};
retro.pub.IDGenerator.__name__ = ["retro","pub","IDGenerator"];
retro.pub.IDGenerator.getInstance = function(uniqueEditorKey) {
	if(retro.pub.IDGenerator.idGen == null) retro.pub.IDGenerator.idGen = new retro.pub.IDGenerator(uniqueEditorKey);
	return retro.pub.IDGenerator.idGen;
}
retro.pub.IDGenerator.prototype = {
	genID: function() {
		this.counter += 1;
		return this.uniqueEditorKey + Std.string(this.counter);
	}
	,__class__: retro.pub.IDGenerator
}
retro.pub.Point2D = function(x,y) {
	this.x = x;
	this.y = y;
};
retro.pub.Point2D.__name__ = ["retro","pub","Point2D"];
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
	,__class__: retro.pub.Point2D
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
retro.pub.RetroTypeChecker.__name__ = ["retro","pub","RetroTypeChecker"];
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
retro.view.ConsoleView.__name__ = ["retro","view","ConsoleView"];
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
	,__class__: retro.view.ConsoleView
}
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
		var g = f.select("g");
		g.transform("translate(" + 100 + "," + 0 + ")");
		g.click(function(e) {
			var createJobDialog = new CreateJobDialog();
			createJobDialog.on(function(pkg,cmp,x,y) {
				var jobComponent = _g.diagramController.getModule(pkg + "." + cmp);
				var job = _g.diagramController.addSymbolicLink(jobComponent);
				job.setPos(x,y);
			});
			createJobDialog.open();
		});
		_g.control_group.append(g);
	});
	Snap.load("images/create.svg",function(f) {
		var g = f.select("g");
		var right = js.Browser.document.body.clientWidth;
		g.transform("translate(" + (right - 100) + "," + 0 + ")");
		_g.control_group.append(g);
	});
};
retro.view.DiagramView.__name__ = ["retro","view","DiagramView"];
retro.view.DiagramView.prototype = {
	getInputPortView: function(port) {
		var _g = 0, _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) continue;
			var opv = jv.getInputPortView(port);
			if(opv != null) return opv;
		}
		return null;
	}
	,getOutputPortView: function(port) {
		var _g = 0, _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			if(jv.jobController.getJob().getId() != port.getParentJob().getId()) continue;
			var opv = jv.getOutputPortView(port);
			if(opv != null) return opv;
		}
		return null;
	}
	,OnValueCarrierCleared: function() {
		var _g = 0, _g1 = this.valueCarrierViews;
		while(_g < _g1.length) {
			var vcv = _g1[_g];
			++_g;
			vcv.remove();
		}
		this.valueCarrierViews = new Array();
	}
	,OnValueCarrierRemoved: function(valueCarrier) {
		var _g = 0, _g1 = this.valueCarrierViews;
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
	,OnValueCarrierAdded: function(valueCarrier) {
		this.valueCarrierViews.push(new retro.view.ValueCarrierView(this.diagramController.getEditor(),valueCarrier,this));
	}
	,OnJobRemoved: function(job) {
		var _g = 0, _g1 = this.jobViews;
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
	,OnJobAdded: function(job) {
		var jobView = new retro.view.JobView(this.diagramController,new retro.controller.JobController(this.diagramController.getEditor(),job),this);
		var _g = 0, _g1 = job.getInputPorts();
		while(_g < _g1.length) {
			var ip = _g1[_g];
			++_g;
			jobView.OnAddInputPortView(ip);
		}
		var _g = 0, _g1 = job.getOutputPorts();
		while(_g < _g1.length) {
			var op = _g1[_g];
			++_g;
			jobView.OnAddOutputPortView(op);
		}
		this.jobViews.push(jobView);
	}
	,step: function() {
		var energy = 0;
		var _g = 0, _g1 = this.jobViews;
		while(_g < _g1.length) {
			var jv = _g1[_g];
			++_g;
			energy += jv.step();
		}
		return energy;
	}
	,start_step: function() {
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
	,__class__: retro.view.DiagramView
}
retro.view.PortView = function(diagramController,jobview,snap,thema) {
	this.diagramController = diagramController;
	this.views = new Array();
	this.jobView = jobview;
	this.snap = snap;
	this.thema = thema;
	this.group = snap.group();
	this.graphic = snap.circle(0,0,22);
	this.coll = snap.circle(0,0,22);
	this.th = 0;
	this.pos = new retro.pub.Point2D(0,0);
	this.velocity = 0;
	this.setPos(100,100);
	this.coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	this.group.append(this.graphic);
	this.group.append(this.coll);
};
retro.view.PortView.__name__ = ["retro","view","PortView"];
retro.view.PortView.prototype = {
	step_by_force: function(force) {
		var n = new retro.pub.Point2D(-Math.sin(this.th),Math.cos(this.th));
		this.velocity += (force.getX() * n.getX() + force.getY() * n.getY()) / 200;
		this.velocity *= 0.7;
		if(this.velocity > Math.PI / 30) this.velocity = Math.PI / 30;
		if(this.velocity < -Math.PI / 30) this.velocity = -Math.PI / 30;
		this.th += this.velocity;
		this.setR(this.th);
	}
	,getLocalPos: function() {
		return this.pos;
	}
	,getPos: function() {
		return retro.pub.Point2D.add(this.pos,this.jobView.getPos());
	}
	,setPos: function(x,y) {
		this.pos.setX(x);
		this.pos.setY(y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,setR: function(th) {
		this.th = th;
		this.setPos(60 * Math.cos(this.th),60 * Math.sin(this.th));
	}
	,addPos: function(x,y) {
		this.pos.setX(this.pos.getX() + x);
		this.pos.setY(this.pos.getY() + y);
		this.group.transform("translate(" + this.pos.getX() + "," + this.pos.getY() + ")");
	}
	,refresh: function() {
		var _g = 0, _g1 = this.views;
		while(_g < _g1.length) {
			var pathView = _g1[_g];
			++_g;
			pathView.refresh();
		}
	}
	,__class__: retro.view.PortView
}
retro.view.InputPortView = function(diagramController,jobview,port,snap,thema) {
	var _g = this;
	retro.view.PortView.call(this,diagramController,jobview,snap,thema);
	this.port = port;
	this.port.onSetConstantValue($bind(this,this.OnSetConstant));
	this.port.onRemoveConstantValue($bind(this,this.OnRemoveConstant));
	this.graphic.attr({ fill : thema.bg_color, stroke : thema.base_color, strokeWidth : 3});
	var text = snap.text(26,0,port.getName());
	text.attr({ 'font-size' : "12px", fill : thema.font_color});
	this.group.append(text);
	this.coll.mouseup(function(e,x,y) {
		if(_g.diagramController.setRubberbandEnd(_g.port)) _g.diagramController.clearRubberband(); else {
			var v = js.Browser.window.prompt("","");
			if(v != null) _g.port.setConstant(new retro.model.Value(retro.pub.RetroType.RNumber,haxe.Json.parse(v)));
		}
	});
	this.setPos(0,0);
};
retro.view.InputPortView.__name__ = ["retro","view","InputPortView"];
retro.view.InputPortView.__super__ = retro.view.PortView;
retro.view.InputPortView.prototype = $extend(retro.view.PortView.prototype,{
	OnRemoveConstant: function() {
		this.constantValueGraphic.remove();
	}
	,OnSetConstant: function(v) {
		var _g = this;
		this.constantValueGraphic = this.snap.circle(0,0,18);
		var text = this.snap.text(-5,5,haxe.Json.stringify(v.value));
		this.constantValueGraphic.attr({ fill : this.thema.contrast1_color, stroke : this.thema.contrast2_color, strokeWidth : 4});
		this.group.append(this.constantValueGraphic);
		this.group.append(text);
		this.constantValueGraphic.drag(function(dx,dy,x,y) {
			if(dx + dy > 3) _g.port.removeConstant();
		});
	}
	,step: function() {
		if(this.views.length == 0) {
		}
		var force = new retro.pub.Point2D(0,0);
		var _g = 0, _g1 = this.jobView.getPortViews();
		while(_g < _g1.length) {
			var opv = _g1[_g];
			++_g;
			var coulomb = retro.pub.Point2D.sub(this.getPos(),opv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.01;
			retro.pub.Point2D.timesToSelf(coulomb,1 / r * 100);
			retro.pub.Point2D.addToSelf(force,coulomb);
		}
		var _g = 0, _g1 = this.views;
		while(_g < _g1.length) {
			var pathView = _g1[_g];
			++_g;
			var attraction = retro.pub.Point2D.sub(pathView.source.getPos(),this.getPos());
			var r = attraction.distance();
			if(r > 1000) r = 1000;
			retro.pub.Point2D.timesToSelf(attraction,r / 120);
			retro.pub.Point2D.addToSelf(force,attraction);
		}
		retro.pub.Point2D.timesToSelf(force,1);
		this.step_by_force(force);
		return this.velocity * this.velocity * 100;
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
	var job = this.jobController.getJob();
	job.onInputPortAdded($bind(this,this.OnAddInputPortView));
	job.onOutputPortAdded($bind(this,this.OnAddOutputPortView));
	job.onPosChanged($bind(this,this.OnPosChanged));
	var snap1 = this.jobController.getEditor().snap;
	var thema = this.jobController.getEditor().thema;
	this.group = snap1.group();
	if(Type.getClassName(Type.getClass(this.jobController.getJob())) == "retro.model.EntryJob") {
		this.graphic = snap1.rect(0,0,160,80);
		this.coll = snap1.rect(0,0,160,80);
	} else {
		this.graphic = snap1.rect(0,0,160,80);
		this.coll = snap1.rect(0,0,160,80);
	}
	var text = snap1.text(10,-10,job.getName());
	text.attr({ 'font-size' : "20px", fill : thema.font_color});
	this.graphic.attr({ fill : thema.bg_color, stroke : thema.base_color, strokeWidth : 3});
	this.pos = new retro.pub.Point2D(0,0);
	this.prev_pos = new retro.pub.Point2D(0,0);
	this.setPos(100,100);
	this.coll.attr({ fill : "#ffffff", 'fill-opacity' : 0});
	this.coll.mousedown(function(e,x,y) {
		_g.visible_config_btn();
	});
	this.coll.drag(function(dx,dy,x,y) {
		_g.addPos(dx - _g.prev_pos.getX(),dy - _g.prev_pos.getY());
		_g.prev_pos.setX(dx);
		_g.prev_pos.setY(dy);
	},function(x,y) {
		_g.prev_pos.setX(0);
		_g.prev_pos.setY(0);
	},function(x,y) {
		_g.refresh();
		_g.jobController.changePos(_g.pos.getX(),_g.pos.getY());
		var right = js.Browser.document.body.clientWidth;
		haxe.Log.trace(_g.pos.getX(),{ fileName : "JobView.hx", lineNumber : 108, className : "retro.view.JobView", methodName : "new", customParams : [right]});
		if(right - 150 < _g.pos.getX() && _g.pos.getX() < right && _g.pos.getY() < 150) _g.diagramController.removeJob(_g.jobController.getJob());
	});
	this.group.append(this.graphic);
	this.group.append(text);
	this.group.append(this.coll);
	Snap.load("images/config.svg",function(f) {
		var g = f.select("g");
		_g.group.append(g);
		g.mouseup(function(e,x,y) {
			if(Type.getClassName(Type.getClass(_g.jobController.getJob())) == "retro.model.EntryJob") {
			}
			var runTime = _g.jobController.getEditor().getRuntime();
			if(!runTime.isRunning()) _g.setted_value = js.Browser.window.prompt("","");
		});
		g.attr({ visibility : "hidden"});
		g.transform("translate(" + -30 + "," + -40 + ")");
		_g.config_graphic = g;
	});
};
retro.view.JobView.__name__ = ["retro","view","JobView"];
retro.view.JobView.prototype = {
	OnPosChanged: function(x,y) {
		this.setPos(x,y);
	}
	,getPortViews: function() {
		var portViews = new Array();
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			portViews.push(ipv);
		}
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var opv = _g1[_g];
			++_g;
			portViews.push(opv);
		}
		return portViews;
	}
	,getOutputPortViews: function() {
		return this.outputportviews;
	}
	,getInputPortViews: function() {
		return this.inputportviews;
	}
	,getInputPortView: function(port) {
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			if(ipv.port.getName() == port.getName()) return ipv;
		}
		return null;
	}
	,getOutputPortView: function(port) {
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var opv = _g1[_g];
			++_g;
			if(opv.port.getName() == port.getName()) return opv;
		}
		return null;
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
	,refresh: function() {
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			portView.refresh();
		}
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			portView.refresh();
		}
	}
	,step: function() {
		var energy = 0;
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			energy += portView.step();
		}
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var portView = _g1[_g];
			++_g;
			energy += portView.step();
		}
		return energy;
	}
	,cal2: function() {
		var h = 22;
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var pv = _g1[_g];
			++_g;
			pv.setPos(0,h);
			h += 44;
		}
		h = 22;
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var pv = _g1[_g];
			++_g;
			pv.setPos(160,h);
			h += 44;
		}
		this.graphic.attr({ height : this.inputportviews.length > this.outputportviews.length?this.inputportviews.length * 44:this.outputportviews.length * 44});
		this.coll.attr({ height : this.inputportviews.length > this.outputportviews.length?this.inputportviews.length * 44:this.outputportviews.length * 44});
	}
	,cal: function() {
		var th = 2 * Math.PI / (this.inputportviews.length + this.outputportviews.length);
		var thh = 0;
		var _g = 0, _g1 = this.inputportviews;
		while(_g < _g1.length) {
			var pv = _g1[_g];
			++_g;
			pv.setR(thh);
			thh += th;
		}
		var _g = 0, _g1 = this.outputportviews;
		while(_g < _g1.length) {
			var pv = _g1[_g];
			++_g;
			pv.setR(thh);
			thh += th;
		}
	}
	,OnAddOutputPortView: function(port) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new retro.view.OutputPortView(this.diagramController,this,port,snap,thema);
		this.group.append(portView.group);
		this.outputportviews.push(portView);
		this.cal2();
		return portView;
	}
	,OnAddInputPortView: function(port) {
		var snap = this.jobController.getEditor().snap;
		var thema = this.jobController.getEditor().thema;
		var portView = new retro.view.InputPortView(this.diagramController,this,port,snap,thema);
		this.group.append(portView.group);
		this.inputportviews.push(portView);
		this.cal2();
		return portView;
	}
	,visible_config_btn: function() {
		var _g = this;
		this.config_timer = new haxe.Timer(3000);
		this.config_timer.run = function() {
			_g.config_graphic.attr({ visibility : "hidden"});
			_g.config_timer.stop();
		};
		this.config_graphic.attr({ visibility : "visible"});
	}
	,removeSelf: function() {
		this.group.remove();
	}
	,__class__: retro.view.JobView
}
retro.view.OutputPortView = function(diagramController,jobview,port,snap,thema) {
	var _g = this;
	retro.view.PortView.call(this,diagramController,jobview,snap,thema);
	this.port = port;
	this.port.onConnected($bind(this,this.OnConnected));
	this.graphic.attr({ fill : thema.base_color, stroke : thema.base_color, strokeWidth : 3});
	var text = snap.text(-70,0,port.getName());
	text.attr({ 'font-size' : "12px", fill : thema.font_color});
	this.group.append(text);
	this.coll.mousedown(function(e,x,y) {
		_g.diagramController.setRubberbandStart(_g.port);
	});
	this.setPos(160,0);
};
retro.view.OutputPortView.__name__ = ["retro","view","OutputPortView"];
retro.view.OutputPortView.__super__ = retro.view.PortView;
retro.view.OutputPortView.prototype = $extend(retro.view.PortView.prototype,{
	step: function() {
		if(this.views.length == 0) {
		}
		var force = new retro.pub.Point2D(0,0);
		var _g = 0, _g1 = this.jobView.getPortViews();
		while(_g < _g1.length) {
			var ipv = _g1[_g];
			++_g;
			var coulomb = retro.pub.Point2D.sub(this.getPos(),ipv.getPos());
			var r = coulomb.distanceSq();
			if(r == 0) r = 0.01;
			retro.pub.Point2D.timesToSelf(coulomb,1 / r * 100);
			retro.pub.Point2D.addToSelf(force,coulomb);
		}
		var _g = 0, _g1 = this.views;
		while(_g < _g1.length) {
			var pathView = _g1[_g];
			++_g;
			var attraction = retro.pub.Point2D.sub(pathView.target.getPos(),this.getPos());
			var r = attraction.distance();
			if(r > 1000) r = 1000;
			retro.pub.Point2D.timesToSelf(attraction,r / 120);
			retro.pub.Point2D.addToSelf(force,attraction);
		}
		retro.pub.Point2D.timesToSelf(force,1);
		this.step_by_force(force);
		this.refresh();
		return this.velocity * this.velocity * 100;
	}
	,OnConnected: function(o,i) {
		var inputView = this.jobView.diagramView.getInputPortView(i);
		var pathView = new retro.view.PathView(this.diagramController,this.jobView.diagramView,this,inputView,this.snap,this.thema);
		this.views.push(pathView);
		inputView.views.push(pathView);
	}
	,__class__: retro.view.OutputPortView
});
retro.view.PathView = function(diagramController,diagramView,source_port,target_port,snap,thema) {
	var _g = this;
	this.onRemoveListeners = new Array();
	this.diagramController = diagramController;
	this.source = source_port;
	this.target = target_port;
	this.snap = snap;
	this.thema = thema;
	this.source.port.onDisconnected($bind(this,this.onDisconnect));
	this.group = this.snap.group();
	this.graphic = this.snap.line(0,0,0,0);
	this.coll = this.snap.line(0,0,0,0);
	this.graphic.attr({ stroke : thema.path_color, strokeWidth : 7});
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
	refresh: function() {
		var xx = this.target.getPos().getX() - this.source.getPos().getX();
		var yy = this.target.getPos().getY() - this.source.getPos().getY();
		var len = Math.sqrt(xx * xx + yy * yy);
		xx = xx / len;
		yy = yy / len;
		this.graphic.attr({ x1 : this.source.getPos().getX() + xx * 20, y1 : this.source.getPos().getY() + yy * 20, x2 : this.target.getPos().getX() - xx * 20, y2 : this.target.getPos().getY() - yy * 20});
		this.coll.attr({ x1 : this.source.getPos().getX() + xx * 20, y1 : this.source.getPos().getY() + yy * 20, x2 : this.target.getPos().getX() - xx * 20, y2 : this.target.getPos().getY() - yy * 20});
	}
	,onDisconnect: function(o,i) {
		if(this.target.port != i) return;
		this.group.remove();
		HxOverrides.remove(this.source.views,this);
		HxOverrides.remove(this.target.views,this);
	}
	,visible_remove_btn: function() {
		var _g = this;
		var xx = this.target.getPos().getX() + this.source.getPos().getX();
		var yy = this.target.getPos().getY() + this.source.getPos().getY();
		xx /= 2;
		yy /= 2;
		xx -= 22;
		yy -= 22;
		this.remove_graphic.transform("translate(" + xx + "," + yy + ")");
		this.remove_timer = new haxe.Timer(3000);
		this.remove_timer.run = function() {
			_g.remove_graphic.attr({ visibility : "hidden"});
			_g.remove_timer.stop();
		};
		this.remove_graphic.attr({ visibility : "visible"});
	}
	,init_remove_btn: function() {
		var _g = this;
		Snap.load("images/remove.svg",function(f) {
			var g = f.select("g");
			_g.group.append(g);
			g.mousedown(function(e,x,y) {
				retro.controller.DiagramController.disconnect(_g.source.port,_g.target.port);
				_g.remove_graphic.attr({ visibility : "hidden"});
			});
			g.attr({ visibility : "hidden"});
			g.transform("translate(" + 0 + "," + 0 + ")");
			_g.remove_graphic = g;
		});
	}
	,__class__: retro.view.PathView
}
retro.view.RunMode = { __ename__ : true, __constructs__ : ["Stop","Run"] }
retro.view.RunMode.Stop = ["Stop",0];
retro.view.RunMode.Stop.toString = $estr;
retro.view.RunMode.Stop.__enum__ = retro.view.RunMode;
retro.view.RunMode.Run = ["Run",1];
retro.view.RunMode.Run.toString = $estr;
retro.view.RunMode.Run.__enum__ = retro.view.RunMode;
retro.view.ProjectView = function(projectController,exportController) {
	var _g = this;
	this.projectController = projectController;
	this.exportController = exportController;
	this.mode = retro.view.RunMode.Stop;
	var snap1 = this.projectController.getEditor().snap;
	var project = this.projectController.getProject();
	project.onDiagramAdded($bind(this,this.OnDiagramAdded));
	this.control_group = snap1.group();
	Snap.load("images/play.svg",function(f) {
		var g = f.select("svg");
		g.click(function(e) {
			if(_g.mode == retro.view.RunMode.Stop) {
				_g.projectController.run();
				_g.mode = retro.view.RunMode.Run;
				g.select("polygon").attr({ fill : "#ff0000"});
			} else if(_g.mode == retro.view.RunMode.Run) {
				_g.projectController.stop();
				_g.mode = retro.view.RunMode.Stop;
				g.select("polygon").attr({ fill : "#ffffff"});
			}
		});
		_g.control_group.append(g);
	});
};
retro.view.ProjectView.__name__ = ["retro","view","ProjectView"];
retro.view.ProjectView.prototype = {
	OnDiagramAdded: function(diagram) {
		this.diagramView = new retro.view.DiagramView(new retro.controller.DiagramController(this.projectController.getEditor(),diagram,this.projectController.getEditor().virtualDevice));
	}
	,__class__: retro.view.ProjectView
}
retro.view.Thema = function() {
	this.path_color = "#007ab7";
	this.font_color = "#007ab7";
	this.contrast2_color = "#b61972";
	this.contrast1_color = "#db7bb1";
	this.sub3_color = "#d7ebf6";
	this.sub2_color = "#8ec7e4";
	this.sub1_color = "#007ab7";
	this.base_color = "#3297c9";
	this.bg_color = "#ffffff";
};
retro.view.Thema.__name__ = ["retro","view","Thema"];
retro.view.Thema.prototype = {
	__class__: retro.view.Thema
}
retro.view.ValueCarrierView = function(editor,valueCarrier,diagramView) {
	this.valueCarrier = valueCarrier;
	this.diagramView = diagramView;
	this.valueCarrier.onStep($bind(this,this.OnStep));
	this.count = 0;
	var snap = editor.snap;
	var thema = editor.thema;
	this.pos = new retro.pub.Point2D(0,0);
	this.group = snap.group();
	this.graphic = snap.circle(0,0,24);
	var text = snap.text(0,0,this.value2String(valueCarrier.getValue().value));
	this.graphic.attr({ fill : thema.contrast1_color, stroke : thema.contrast2_color, strokeWidth : 4});
	this.group.append(this.graphic);
	this.group.append(text);
	this.startPosition();
};
retro.view.ValueCarrierView.__name__ = ["retro","view","ValueCarrierView"];
retro.view.ValueCarrierView.prototype = {
	endPosition: function() {
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
	,startPosition: function() {
		var outputPortView = this.diagramView.getOutputPortView(this.valueCarrier.srcPort);
		var inputPortView = this.diagramView.getInputPortView(this.valueCarrier.destPort);
		this.vec = retro.pub.Point2D.sub(inputPortView.getPos(),outputPortView.getPos());
		retro.pub.Point2D.timesToSelf(this.vec,0.1);
		this.setPos(outputPortView.getPos().getX(),outputPortView.getPos().getY());
	}
	,remove: function() {
		this.group.remove();
	}
	,OnStep: function() {
		this.addPos(this.vec.getX(),this.vec.getY());
	}
	,OnUsed: function() {
		this.remove();
	}
	,value2String: function(v) {
		if(Type["typeof"](v) == ValueType.TObject) return "Object"; else if(Type["typeof"](v) == ValueType.TNull) return "Null"; else if(Type["typeof"](v) == ValueType.TFloat) return v; else if(Type["typeof"](v) == ValueType.TInt) return haxe.Json.stringify(v); else if(Type["typeof"](v) == ValueType.TFloat) return v; else if(Type["typeof"](v) == ValueType.TBool) return v; else {
			var class_name = Type.getClassName(Type.getClass(v));
			if(class_name == "String") return v; else return class_name;
		}
	}
	,__class__: retro.view.ValueCarrierView
}
retro.vm = {}
retro.vm.Application = function() {
	this.diagram = null;
};
retro.vm.Application.__name__ = ["retro","vm","Application"];
retro.vm.Application.prototype = {
	parse_from_json: function(json_text) {
	}
	,parse: function(json_obj) {
	}
	,getName: function() {
		return "Application Name";
	}
	,__class__: retro.vm.Application
}
retro.vm.Runtime = function(diagram) {
	this.diagram = diagram;
};
retro.vm.Runtime.__name__ = ["retro","vm","Runtime"];
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
	,__class__: retro.vm.Runtime
}
retro.vm.Worker = function(job,func) {
	this.job = job;
	this.func = func;
};
retro.vm.Worker.__name__ = ["retro","vm","Worker"];
retro.vm.Worker.prototype = {
	act: function(params,cb) {
		this.func(params,cb);
	}
	,__class__: retro.vm.Worker
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
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
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.prototype.__class__ = Array;
Array.__name__ = ["Array"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(typeof(JSON) != "undefined") haxe.Json = JSON;
var q = window.jQuery;
js.JQuery = q;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
Main.main();
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
