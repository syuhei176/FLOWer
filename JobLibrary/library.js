(function ($hx_exports) { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CompileTime = function() { };
$hxClasses["CompileTime"] = CompileTime;
CompileTime.__name__ = ["CompileTime"];
var CompileTimeClassList = function() { };
$hxClasses["CompileTimeClassList"] = CompileTimeClassList;
CompileTimeClassList.__name__ = ["CompileTimeClassList"];
CompileTimeClassList.get = function(id) {
	if(CompileTimeClassList.lists == null) CompileTimeClassList.initialise();
	return CompileTimeClassList.lists.get(id);
};
CompileTimeClassList.initialise = function() {
	CompileTimeClassList.lists = new haxe.ds.StringMap();
	var m = haxe.rtti.Meta.getType(CompileTimeClassList);
	if(m.classLists != null) {
		var _g = 0;
		var _g1 = m.classLists;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			var array = item;
			var listID = array[0];
			var classes = item[1].split(",").map(function(typeName) {
				return Type.resolveClass(typeName);
			});
			CompileTimeClassList.lists.set(listID,classes);
		}
	}
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
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
HxOverrides.lastIndexOf = function(a,obj,i) {
	var len = a.length;
	if(i >= len) i = len - 1; else if(i < 0) i += len;
	while(i >= 0) {
		if(a[i] === obj) return i;
		i--;
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
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIterator"] = IntIterator;
IntIterator.__name__ = ["IntIterator"];
IntIterator.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIterator
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.list = function(it) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
};
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
};
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
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
Lambda.iter = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
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
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
Lambda.empty = function(it) {
	return !$iterator(it)().hasNext();
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
Lambda.find = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(f(v)) return v;
	}
	return null;
};
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = $iterator(a)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = $iterator(b)();
	while( $it1.hasNext() ) {
		var x1 = $it1.next();
		l.add(x1);
	}
	return l;
};
var Library = $hx_exports.Library = function() { };
$hxClasses["Library"] = Library;
Library.__name__ = ["Library"];
Library.jobComponents = null;
Library.init = function() {
	var libraryClasses = CompileTimeClassList.get("library,true,");
	Library.jobComponents = Lambda.fold(libraryClasses.map(function(c) {
		return Type.createInstance(c,[]);
	}),function(job,array) {
		array.push(job);
		return array;
	},[]);
};
Library.get = function() {
	return Library.jobComponents;
};
Library.getPackage = function() {
	var moduleNames = Library.jobComponents.map(function(job) {
		return job.getModuleName();
	});
	return Lambda.fold(moduleNames.map(function(moduleNames1) {
		return moduleNames1.split(".");
	}),function(splitNames,packages) {
		var modules = Reflect.field(packages,splitNames[0]);
		if(modules == null) modules = [];
		modules.push(splitNames[1]);
		packages[splitNames[0]] = modules;
		return packages;
	},{ });
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		if(this.h == null) return null; else return this.h[0];
	}
	,last: function() {
		if(this.q == null) return null; else return this.q[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += "{";
		while(l != null) {
			if(first) first = false; else s.b += ", ";
			s.add(Std.string(l[0]));
			l = l[1];
		}
		s.b += "}";
		return s.b;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else if(sep == null) s.b += "null"; else s.b += "" + sep;
			s.b += Std.string(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
};
var _Map = {};
_Map.Map_Impl_ = function() { };
$hxClasses["_Map.Map_Impl_"] = _Map.Map_Impl_;
_Map.Map_Impl_.__name__ = ["_Map","Map_Impl_"];
_Map.Map_Impl_._new = null;
_Map.Map_Impl_.set = function(this1,key,value) {
	this1.set(key,value);
};
_Map.Map_Impl_.get = function(this1,key) {
	return this1.get(key);
};
_Map.Map_Impl_.exists = function(this1,key) {
	return this1.exists(key);
};
_Map.Map_Impl_.remove = function(this1,key) {
	return this1.remove(key);
};
_Map.Map_Impl_.keys = function(this1) {
	return this1.keys();
};
_Map.Map_Impl_.iterator = function(this1) {
	return this1.iterator();
};
_Map.Map_Impl_.toString = function(this1) {
	return this1.toString();
};
_Map.Map_Impl_.arrayWrite = function(this1,k,v) {
	this1.set(k,v);
	return v;
};
_Map.Map_Impl_.toStringMap = function(t) {
	return new haxe.ds.StringMap();
};
_Map.Map_Impl_.toIntMap = function(t) {
	return new haxe.ds.IntMap();
};
_Map.Map_Impl_.toEnumValueMapMap = function(t) {
	return new haxe.ds.EnumValueMap();
};
_Map.Map_Impl_.toObjectMap = function(t) {
	return new haxe.ds.ObjectMap();
};
_Map.Map_Impl_.fromStringMap = function(map) {
	return map;
};
_Map.Map_Impl_.fromIntMap = function(map) {
	return map;
};
_Map.Map_Impl_.fromObjectMap = function(map) {
	return map;
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,remove: null
	,keys: null
	,iterator: null
	,toString: null
	,__class__: IMap
};
Math.__name__ = ["Math"];
var Pod = function() {
	this.map = new haxe.ds.StringMap();
};
$hxClasses["Pod"] = Pod;
Pod.__name__ = ["Pod"];
Pod.instance = null;
Pod.getInstance = function() {
	if(Pod.instance == null) return Pod.instance = new Pod(); else return Pod.instance;
};
Pod.prototype = {
	map: null
	,exists: function(key) {
		return this.map.exists(key);
	}
	,get: function(key) {
		return this.map.get(key);
	}
	,set: function(key,value) {
		return this.map.set(key,value);
	}
	,__class__: Pod
};
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		Reflect.setField(o2,f,Reflect.field(o,f));
	}
	return o2;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
};
Std.instance = function(value,c) {
	if((value instanceof c)) return value; else return null;
};
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,get_length: function() {
		return this.b.length;
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,toString: function() {
		return this.b;
	}
	,__class__: StringBuf
	,__properties__: {get_length:"get_length"}
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&quot;").join("\"").split("&#039;").join("'").split("&amp;").join("&");
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
StringTools.isEof = function(c) {
	return c != c;
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
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
ValueType.__empty_constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TUnknown];
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
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
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		return false;
	}
	return true;
};
Type.enumConstructor = function(e) {
	return e[0];
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
};
Type.allEnums = function(e) {
	return e.__empty_constructs__;
};
var flower = {};
flower.JobComponent = function() { };
$hxClasses["flower.JobComponent"] = flower.JobComponent;
flower.JobComponent.__name__ = ["flower","JobComponent"];
flower.JobComponent.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: null
	,onInputRecieved: null
	,getModuleName: null
	,__class__: flower.JobComponent
};
flower.Message = $hxClasses["flower.Message"] = { __ename__ : ["flower","Message"], __constructs__ : ["NoMsg","Msg"] };
flower.Message.NoMsg = ["NoMsg",0];
flower.Message.NoMsg.toString = $estr;
flower.Message.NoMsg.__enum__ = flower.Message;
flower.Message.Msg = function(i) { var $x = ["Msg",1,i]; $x.__enum__ = flower.Message; $x.toString = $estr; return $x; };
flower.Message.__empty_constructs__ = [flower.Message.NoMsg];
flower.RetroType = $hxClasses["flower.RetroType"] = { __ename__ : ["flower","RetroType"], __constructs__ : ["REmpty","RString","RNumber","RBool","RList","RTuple","RUnknown"] };
flower.RetroType.REmpty = ["REmpty",0];
flower.RetroType.REmpty.toString = $estr;
flower.RetroType.REmpty.__enum__ = flower.RetroType;
flower.RetroType.RString = ["RString",1];
flower.RetroType.RString.toString = $estr;
flower.RetroType.RString.__enum__ = flower.RetroType;
flower.RetroType.RNumber = ["RNumber",2];
flower.RetroType.RNumber.toString = $estr;
flower.RetroType.RNumber.__enum__ = flower.RetroType;
flower.RetroType.RBool = ["RBool",3];
flower.RetroType.RBool.toString = $estr;
flower.RetroType.RBool.__enum__ = flower.RetroType;
flower.RetroType.RList = function(type) { var $x = ["RList",4,type]; $x.__enum__ = flower.RetroType; $x.toString = $estr; return $x; };
flower.RetroType.RTuple = function(types) { var $x = ["RTuple",5,types]; $x.__enum__ = flower.RetroType; $x.toString = $estr; return $x; };
flower.RetroType.RUnknown = function(id) { var $x = ["RUnknown",6,id]; $x.__enum__ = flower.RetroType; $x.toString = $estr; return $x; };
flower.RetroType.__empty_constructs__ = [flower.RetroType.REmpty,flower.RetroType.RString,flower.RetroType.RNumber,flower.RetroType.RBool];
var haxe = {};
haxe.ds = {};
haxe.ds.BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
haxe.ds.BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe.ds.BalancedTree.prototype = {
	root: null
	,set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,remove: function(key) {
		try {
			this.root = this.removeLoop(key,this.root);
			return true;
		} catch( e ) {
			if( js.Boot.__instanceof(e,String) ) {
				return false;
			} else throw(e);
		}
	}
	,exists: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return true; else if(c < 0) node = node.left; else node = node.right;
		}
		return false;
	}
	,iterator: function() {
		var ret = [];
		this.iteratorLoop(this.root,ret);
		return HxOverrides.iter(ret);
	}
	,keys: function() {
		var ret = [];
		this.keysLoop(this.root,ret);
		return HxOverrides.iter(ret);
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,removeLoop: function(k,node) {
		if(node == null) throw "Not_found";
		var c = this.compare(k,node.key);
		if(c == 0) return this.merge(node.left,node.right); else if(c < 0) return this.balance(this.removeLoop(k,node.left),node.key,node.value,node.right); else return this.balance(node.left,node.key,node.value,this.removeLoop(k,node.right));
	}
	,iteratorLoop: function(node,acc) {
		if(node != null) {
			this.iteratorLoop(node.left,acc);
			acc.push(node.value);
			this.iteratorLoop(node.right,acc);
		}
	}
	,keysLoop: function(node,acc) {
		if(node != null) {
			this.keysLoop(node.left,acc);
			acc.push(node.key);
			this.keysLoop(node.right,acc);
		}
	}
	,merge: function(t1,t2) {
		if(t1 == null) return t2;
		if(t2 == null) return t1;
		var t = this.minBinding(t2);
		return this.balance(t1,t.key,t.value,this.removeMinBinding(t2));
	}
	,minBinding: function(t) {
		if(t == null) throw "Not_found"; else if(t.left == null) return t; else return this.minBinding(t.left);
	}
	,removeMinBinding: function(t) {
		if(t.left == null) return t.right; else return this.balance(this.removeMinBinding(t.left),t.key,t.value,t.right);
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,toString: function() {
		return "{" + this.root.toString() + "}";
	}
	,__class__: haxe.ds.BalancedTree
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
haxe.ds.TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe.ds.TreeNode.prototype = {
	left: null
	,right: null
	,key: null
	,value: null
	,_height: null
	,toString: function() {
		return (this.left == null?"":this.left.toString() + ", ") + ("" + Std.string(this.key) + "=" + Std.string(this.value)) + (this.right == null?"":", " + this.right.toString());
	}
	,__class__: haxe.ds.TreeNode
};
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
$hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap;
haxe.ds.EnumValueMap.__name__ = ["haxe","ds","EnumValueMap"];
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe.ds.EnumValueMap
});
haxe.ds._HashMap = {};
haxe.ds._HashMap.HashMap_Impl_ = function() { };
$hxClasses["haxe.ds._HashMap.HashMap_Impl_"] = haxe.ds._HashMap.HashMap_Impl_;
haxe.ds._HashMap.HashMap_Impl_.__name__ = ["haxe","ds","_HashMap","HashMap_Impl_"];
haxe.ds._HashMap.HashMap_Impl_._new = function() {
	return { keys : new haxe.ds.IntMap(), values : new haxe.ds.IntMap()};
};
haxe.ds._HashMap.HashMap_Impl_.set = function(this1,k,v) {
	this1.keys.set(k.hashCode(),k);
	this1.values.set(k.hashCode(),v);
};
haxe.ds._HashMap.HashMap_Impl_.get = function(this1,k) {
	return this1.values.get(k.hashCode());
};
haxe.ds._HashMap.HashMap_Impl_.exists = function(this1,k) {
	return this1.values.exists(k.hashCode());
};
haxe.ds._HashMap.HashMap_Impl_.remove = function(this1,k) {
	this1.values.remove(k.hashCode());
	return this1.keys.remove(k.hashCode());
};
haxe.ds._HashMap.HashMap_Impl_.keys = function(this1) {
	return this1.keys.iterator();
};
haxe.ds._HashMap.HashMap_Impl_.iterator = function(this1) {
	return this1.values.iterator();
};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			if(i == null) s.b += "null"; else s.b += "" + i;
			s.b += " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.assignId = function(obj) {
	return obj.__id__ = ++haxe.ds.ObjectMap.count;
};
haxe.ds.ObjectMap.getId = function(obj) {
	return obj.__id__;
};
haxe.ds.ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.add(Std.string(i));
			s.b += " => ";
			s.add(Std.string(this.h[i.__id__]));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			if(i == null) s.b += "null"; else s.b += "" + i;
			s.b += " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds.WeakMap = function() {
	throw "Not implemented for this platform";
};
$hxClasses["haxe.ds.WeakMap"] = haxe.ds.WeakMap;
haxe.ds.WeakMap.__name__ = ["haxe","ds","WeakMap"];
haxe.ds.WeakMap.__interfaces__ = [IMap];
haxe.ds.WeakMap.prototype = {
	set: function(key,value) {
	}
	,get: function(key) {
		return null;
	}
	,exists: function(key) {
		return false;
	}
	,remove: function(key) {
		return false;
	}
	,keys: function() {
		return null;
	}
	,iterator: function() {
		return null;
	}
	,toString: function() {
		return null;
	}
	,__class__: haxe.ds.WeakMap
};
haxe.macro = {};
haxe.macro.Context = function() { };
$hxClasses["haxe.macro.Context"] = haxe.macro.Context;
haxe.macro.Context.__name__ = ["haxe","macro","Context"];
haxe.macro.Constant = $hxClasses["haxe.macro.Constant"] = { __ename__ : ["haxe","macro","Constant"], __constructs__ : ["CInt","CFloat","CString","CIdent","CRegexp"] };
haxe.macro.Constant.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CIdent = function(s) { var $x = ["CIdent",3,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CRegexp = function(r,opt) { var $x = ["CRegexp",4,r,opt]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.__empty_constructs__ = [];
haxe.macro.Binop = $hxClasses["haxe.macro.Binop"] = { __ename__ : ["haxe","macro","Binop"], __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe.macro.Binop.OpAdd = ["OpAdd",0];
haxe.macro.Binop.OpAdd.toString = $estr;
haxe.macro.Binop.OpAdd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMult = ["OpMult",1];
haxe.macro.Binop.OpMult.toString = $estr;
haxe.macro.Binop.OpMult.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpDiv = ["OpDiv",2];
haxe.macro.Binop.OpDiv.toString = $estr;
haxe.macro.Binop.OpDiv.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpSub = ["OpSub",3];
haxe.macro.Binop.OpSub.toString = $estr;
haxe.macro.Binop.OpSub.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssign = ["OpAssign",4];
haxe.macro.Binop.OpAssign.toString = $estr;
haxe.macro.Binop.OpAssign.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpEq = ["OpEq",5];
haxe.macro.Binop.OpEq.toString = $estr;
haxe.macro.Binop.OpEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpNotEq = ["OpNotEq",6];
haxe.macro.Binop.OpNotEq.toString = $estr;
haxe.macro.Binop.OpNotEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGt = ["OpGt",7];
haxe.macro.Binop.OpGt.toString = $estr;
haxe.macro.Binop.OpGt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGte = ["OpGte",8];
haxe.macro.Binop.OpGte.toString = $estr;
haxe.macro.Binop.OpGte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLt = ["OpLt",9];
haxe.macro.Binop.OpLt.toString = $estr;
haxe.macro.Binop.OpLt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLte = ["OpLte",10];
haxe.macro.Binop.OpLte.toString = $estr;
haxe.macro.Binop.OpLte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAnd = ["OpAnd",11];
haxe.macro.Binop.OpAnd.toString = $estr;
haxe.macro.Binop.OpAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpOr = ["OpOr",12];
haxe.macro.Binop.OpOr.toString = $estr;
haxe.macro.Binop.OpOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpXor = ["OpXor",13];
haxe.macro.Binop.OpXor.toString = $estr;
haxe.macro.Binop.OpXor.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe.macro.Binop.OpBoolAnd.toString = $estr;
haxe.macro.Binop.OpBoolAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolOr = ["OpBoolOr",15];
haxe.macro.Binop.OpBoolOr.toString = $estr;
haxe.macro.Binop.OpBoolOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShl = ["OpShl",16];
haxe.macro.Binop.OpShl.toString = $estr;
haxe.macro.Binop.OpShl.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShr = ["OpShr",17];
haxe.macro.Binop.OpShr.toString = $estr;
haxe.macro.Binop.OpShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpUShr = ["OpUShr",18];
haxe.macro.Binop.OpUShr.toString = $estr;
haxe.macro.Binop.OpUShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMod = ["OpMod",19];
haxe.macro.Binop.OpMod.toString = $estr;
haxe.macro.Binop.OpMod.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe.macro.Binop; $x.toString = $estr; return $x; };
haxe.macro.Binop.OpInterval = ["OpInterval",21];
haxe.macro.Binop.OpInterval.toString = $estr;
haxe.macro.Binop.OpInterval.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpArrow = ["OpArrow",22];
haxe.macro.Binop.OpArrow.toString = $estr;
haxe.macro.Binop.OpArrow.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.__empty_constructs__ = [haxe.macro.Binop.OpAdd,haxe.macro.Binop.OpMult,haxe.macro.Binop.OpDiv,haxe.macro.Binop.OpSub,haxe.macro.Binop.OpAssign,haxe.macro.Binop.OpEq,haxe.macro.Binop.OpNotEq,haxe.macro.Binop.OpGt,haxe.macro.Binop.OpGte,haxe.macro.Binop.OpLt,haxe.macro.Binop.OpLte,haxe.macro.Binop.OpAnd,haxe.macro.Binop.OpOr,haxe.macro.Binop.OpXor,haxe.macro.Binop.OpBoolAnd,haxe.macro.Binop.OpBoolOr,haxe.macro.Binop.OpShl,haxe.macro.Binop.OpShr,haxe.macro.Binop.OpUShr,haxe.macro.Binop.OpMod,haxe.macro.Binop.OpInterval,haxe.macro.Binop.OpArrow];
haxe.macro.Unop = $hxClasses["haxe.macro.Unop"] = { __ename__ : ["haxe","macro","Unop"], __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe.macro.Unop.OpIncrement = ["OpIncrement",0];
haxe.macro.Unop.OpIncrement.toString = $estr;
haxe.macro.Unop.OpIncrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpDecrement = ["OpDecrement",1];
haxe.macro.Unop.OpDecrement.toString = $estr;
haxe.macro.Unop.OpDecrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNot = ["OpNot",2];
haxe.macro.Unop.OpNot.toString = $estr;
haxe.macro.Unop.OpNot.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNeg = ["OpNeg",3];
haxe.macro.Unop.OpNeg.toString = $estr;
haxe.macro.Unop.OpNeg.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNegBits = ["OpNegBits",4];
haxe.macro.Unop.OpNegBits.toString = $estr;
haxe.macro.Unop.OpNegBits.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.__empty_constructs__ = [haxe.macro.Unop.OpIncrement,haxe.macro.Unop.OpDecrement,haxe.macro.Unop.OpNot,haxe.macro.Unop.OpNeg,haxe.macro.Unop.OpNegBits];
haxe.macro.ExprDef = $hxClasses["haxe.macro.ExprDef"] = { __ename__ : ["haxe","macro","ExprDef"], __constructs__ : ["EConst","EArray","EBinop","EField","EParenthesis","EObjectDecl","EArrayDecl","ECall","ENew","EUnop","EVars","EFunction","EBlock","EFor","EIn","EIf","EWhile","ESwitch","ETry","EReturn","EBreak","EContinue","EUntyped","EThrow","ECast","EDisplay","EDisplayNew","ETernary","ECheckType","EMeta"] };
haxe.macro.ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArray = function(e1,e2) { var $x = ["EArray",1,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",2,op,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EField = function(e,field) { var $x = ["EField",3,e,field]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EParenthesis = function(e) { var $x = ["EParenthesis",4,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EObjectDecl = function(fields) { var $x = ["EObjectDecl",5,fields]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArrayDecl = function(values) { var $x = ["EArrayDecl",6,values]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECall = function(e,params) { var $x = ["ECall",7,e,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ENew = function(t,params) { var $x = ["ENew",8,t,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EUnop = function(op,postFix,e) { var $x = ["EUnop",9,op,postFix,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EVars = function(vars) { var $x = ["EVars",10,vars]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFunction = function(name,f) { var $x = ["EFunction",11,name,f]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBlock = function(exprs) { var $x = ["EBlock",12,exprs]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFor = function(it,expr) { var $x = ["EFor",13,it,expr]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIn = function(e1,e2) { var $x = ["EIn",14,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIf = function(econd,eif,eelse) { var $x = ["EIf",15,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EWhile = function(econd,e,normalWhile) { var $x = ["EWhile",16,econd,e,normalWhile]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ESwitch = function(e,cases,edef) { var $x = ["ESwitch",17,e,cases,edef]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETry = function(e,catches) { var $x = ["ETry",18,e,catches]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EReturn = function(e) { var $x = ["EReturn",19,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBreak = ["EBreak",20];
haxe.macro.ExprDef.EBreak.toString = $estr;
haxe.macro.ExprDef.EBreak.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EContinue = ["EContinue",21];
haxe.macro.ExprDef.EContinue.toString = $estr;
haxe.macro.ExprDef.EContinue.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EUntyped = function(e) { var $x = ["EUntyped",22,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EThrow = function(e) { var $x = ["EThrow",23,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECast = function(e,t) { var $x = ["ECast",24,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplay = function(e,isCall) { var $x = ["EDisplay",25,e,isCall]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplayNew = function(t) { var $x = ["EDisplayNew",26,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETernary = function(econd,eif,eelse) { var $x = ["ETernary",27,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECheckType = function(e,t) { var $x = ["ECheckType",28,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EMeta = function(s,e) { var $x = ["EMeta",29,s,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.__empty_constructs__ = [haxe.macro.ExprDef.EBreak,haxe.macro.ExprDef.EContinue];
haxe.macro.ComplexType = $hxClasses["haxe.macro.ComplexType"] = { __ename__ : ["haxe","macro","ComplexType"], __constructs__ : ["TPath","TFunction","TAnonymous","TParent","TExtend","TOptional"] };
haxe.macro.ComplexType.TPath = function(p) { var $x = ["TPath",0,p]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TFunction = function(args,ret) { var $x = ["TFunction",1,args,ret]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TAnonymous = function(fields) { var $x = ["TAnonymous",2,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TParent = function(t) { var $x = ["TParent",3,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TExtend = function(p,fields) { var $x = ["TExtend",4,p,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TOptional = function(t) { var $x = ["TOptional",5,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.__empty_constructs__ = [];
haxe.macro.TypeParam = $hxClasses["haxe.macro.TypeParam"] = { __ename__ : ["haxe","macro","TypeParam"], __constructs__ : ["TPType","TPExpr"] };
haxe.macro.TypeParam.TPType = function(t) { var $x = ["TPType",0,t]; $x.__enum__ = haxe.macro.TypeParam; $x.toString = $estr; return $x; };
haxe.macro.TypeParam.TPExpr = function(e) { var $x = ["TPExpr",1,e]; $x.__enum__ = haxe.macro.TypeParam; $x.toString = $estr; return $x; };
haxe.macro.TypeParam.__empty_constructs__ = [];
haxe.macro.Access = $hxClasses["haxe.macro.Access"] = { __ename__ : ["haxe","macro","Access"], __constructs__ : ["APublic","APrivate","AStatic","AOverride","ADynamic","AInline","AMacro"] };
haxe.macro.Access.APublic = ["APublic",0];
haxe.macro.Access.APublic.toString = $estr;
haxe.macro.Access.APublic.__enum__ = haxe.macro.Access;
haxe.macro.Access.APrivate = ["APrivate",1];
haxe.macro.Access.APrivate.toString = $estr;
haxe.macro.Access.APrivate.__enum__ = haxe.macro.Access;
haxe.macro.Access.AStatic = ["AStatic",2];
haxe.macro.Access.AStatic.toString = $estr;
haxe.macro.Access.AStatic.__enum__ = haxe.macro.Access;
haxe.macro.Access.AOverride = ["AOverride",3];
haxe.macro.Access.AOverride.toString = $estr;
haxe.macro.Access.AOverride.__enum__ = haxe.macro.Access;
haxe.macro.Access.ADynamic = ["ADynamic",4];
haxe.macro.Access.ADynamic.toString = $estr;
haxe.macro.Access.ADynamic.__enum__ = haxe.macro.Access;
haxe.macro.Access.AInline = ["AInline",5];
haxe.macro.Access.AInline.toString = $estr;
haxe.macro.Access.AInline.__enum__ = haxe.macro.Access;
haxe.macro.Access.AMacro = ["AMacro",6];
haxe.macro.Access.AMacro.toString = $estr;
haxe.macro.Access.AMacro.__enum__ = haxe.macro.Access;
haxe.macro.Access.__empty_constructs__ = [haxe.macro.Access.APublic,haxe.macro.Access.APrivate,haxe.macro.Access.AStatic,haxe.macro.Access.AOverride,haxe.macro.Access.ADynamic,haxe.macro.Access.AInline,haxe.macro.Access.AMacro];
haxe.macro.FieldType = $hxClasses["haxe.macro.FieldType"] = { __ename__ : ["haxe","macro","FieldType"], __constructs__ : ["FVar","FFun","FProp"] };
haxe.macro.FieldType.FVar = function(t,e) { var $x = ["FVar",0,t,e]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.FieldType.FFun = function(f) { var $x = ["FFun",1,f]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.FieldType.FProp = function(get,set,t,e) { var $x = ["FProp",2,get,set,t,e]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.FieldType.__empty_constructs__ = [];
haxe.macro.TypeDefKind = $hxClasses["haxe.macro.TypeDefKind"] = { __ename__ : ["haxe","macro","TypeDefKind"], __constructs__ : ["TDEnum","TDStructure","TDClass","TDAlias","TDAbstract"] };
haxe.macro.TypeDefKind.TDEnum = ["TDEnum",0];
haxe.macro.TypeDefKind.TDEnum.toString = $estr;
haxe.macro.TypeDefKind.TDEnum.__enum__ = haxe.macro.TypeDefKind;
haxe.macro.TypeDefKind.TDStructure = ["TDStructure",1];
haxe.macro.TypeDefKind.TDStructure.toString = $estr;
haxe.macro.TypeDefKind.TDStructure.__enum__ = haxe.macro.TypeDefKind;
haxe.macro.TypeDefKind.TDClass = function(superClass,interfaces,isInterface) { var $x = ["TDClass",2,superClass,interfaces,isInterface]; $x.__enum__ = haxe.macro.TypeDefKind; $x.toString = $estr; return $x; };
haxe.macro.TypeDefKind.TDAlias = function(t) { var $x = ["TDAlias",3,t]; $x.__enum__ = haxe.macro.TypeDefKind; $x.toString = $estr; return $x; };
haxe.macro.TypeDefKind.TDAbstract = function(tthis,from,to) { var $x = ["TDAbstract",4,tthis,from,to]; $x.__enum__ = haxe.macro.TypeDefKind; $x.toString = $estr; return $x; };
haxe.macro.TypeDefKind.__empty_constructs__ = [haxe.macro.TypeDefKind.TDEnum,haxe.macro.TypeDefKind.TDStructure];
haxe.macro.Error = function(m,p) {
	this.message = m;
	this.pos = p;
};
$hxClasses["haxe.macro.Error"] = haxe.macro.Error;
haxe.macro.Error.__name__ = ["haxe","macro","Error"];
haxe.macro.Error.prototype = {
	message: null
	,pos: null
	,toString: function() {
		return this.message;
	}
	,__class__: haxe.macro.Error
};
haxe.macro.Format = function() { };
$hxClasses["haxe.macro.Format"] = haxe.macro.Format;
haxe.macro.Format.__name__ = ["haxe","macro","Format"];
haxe.macro.Type = $hxClasses["haxe.macro.Type"] = { __ename__ : ["haxe","macro","Type"], __constructs__ : ["TMono","TEnum","TInst","TType","TFun","TAnonymous","TDynamic","TLazy","TAbstract"] };
haxe.macro.Type.TMono = function(t) { var $x = ["TMono",0,t]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TEnum = function(t,params) { var $x = ["TEnum",1,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TInst = function(t,params) { var $x = ["TInst",2,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TType = function(t,params) { var $x = ["TType",3,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TFun = function(args,ret) { var $x = ["TFun",4,args,ret]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TAnonymous = function(a) { var $x = ["TAnonymous",5,a]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TDynamic = function(t) { var $x = ["TDynamic",6,t]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TLazy = function(f) { var $x = ["TLazy",7,f]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TAbstract = function(t,params) { var $x = ["TAbstract",8,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.__empty_constructs__ = [];
haxe.macro.AnonStatus = $hxClasses["haxe.macro.AnonStatus"] = { __ename__ : ["haxe","macro","AnonStatus"], __constructs__ : ["AClosed","AOpened","AConst","AClassStatics","AEnumStatics","AAbstractStatics"] };
haxe.macro.AnonStatus.AClosed = ["AClosed",0];
haxe.macro.AnonStatus.AClosed.toString = $estr;
haxe.macro.AnonStatus.AClosed.__enum__ = haxe.macro.AnonStatus;
haxe.macro.AnonStatus.AOpened = ["AOpened",1];
haxe.macro.AnonStatus.AOpened.toString = $estr;
haxe.macro.AnonStatus.AOpened.__enum__ = haxe.macro.AnonStatus;
haxe.macro.AnonStatus.AConst = ["AConst",2];
haxe.macro.AnonStatus.AConst.toString = $estr;
haxe.macro.AnonStatus.AConst.__enum__ = haxe.macro.AnonStatus;
haxe.macro.AnonStatus.AClassStatics = function(t) { var $x = ["AClassStatics",3,t]; $x.__enum__ = haxe.macro.AnonStatus; $x.toString = $estr; return $x; };
haxe.macro.AnonStatus.AEnumStatics = function(t) { var $x = ["AEnumStatics",4,t]; $x.__enum__ = haxe.macro.AnonStatus; $x.toString = $estr; return $x; };
haxe.macro.AnonStatus.AAbstractStatics = function(t) { var $x = ["AAbstractStatics",5,t]; $x.__enum__ = haxe.macro.AnonStatus; $x.toString = $estr; return $x; };
haxe.macro.AnonStatus.__empty_constructs__ = [haxe.macro.AnonStatus.AClosed,haxe.macro.AnonStatus.AOpened,haxe.macro.AnonStatus.AConst];
haxe.macro.ClassKind = $hxClasses["haxe.macro.ClassKind"] = { __ename__ : ["haxe","macro","ClassKind"], __constructs__ : ["KNormal","KTypeParameter","KExtension","KExpr","KGeneric","KGenericInstance","KMacroType","KAbstractImpl","KGenericBuild"] };
haxe.macro.ClassKind.KNormal = ["KNormal",0];
haxe.macro.ClassKind.KNormal.toString = $estr;
haxe.macro.ClassKind.KNormal.__enum__ = haxe.macro.ClassKind;
haxe.macro.ClassKind.KTypeParameter = function(constraints) { var $x = ["KTypeParameter",1,constraints]; $x.__enum__ = haxe.macro.ClassKind; $x.toString = $estr; return $x; };
haxe.macro.ClassKind.KExtension = function(cl,params) { var $x = ["KExtension",2,cl,params]; $x.__enum__ = haxe.macro.ClassKind; $x.toString = $estr; return $x; };
haxe.macro.ClassKind.KExpr = function(expr) { var $x = ["KExpr",3,expr]; $x.__enum__ = haxe.macro.ClassKind; $x.toString = $estr; return $x; };
haxe.macro.ClassKind.KGeneric = ["KGeneric",4];
haxe.macro.ClassKind.KGeneric.toString = $estr;
haxe.macro.ClassKind.KGeneric.__enum__ = haxe.macro.ClassKind;
haxe.macro.ClassKind.KGenericInstance = function(cl,params) { var $x = ["KGenericInstance",5,cl,params]; $x.__enum__ = haxe.macro.ClassKind; $x.toString = $estr; return $x; };
haxe.macro.ClassKind.KMacroType = ["KMacroType",6];
haxe.macro.ClassKind.KMacroType.toString = $estr;
haxe.macro.ClassKind.KMacroType.__enum__ = haxe.macro.ClassKind;
haxe.macro.ClassKind.KAbstractImpl = function(a) { var $x = ["KAbstractImpl",7,a]; $x.__enum__ = haxe.macro.ClassKind; $x.toString = $estr; return $x; };
haxe.macro.ClassKind.KGenericBuild = ["KGenericBuild",8];
haxe.macro.ClassKind.KGenericBuild.toString = $estr;
haxe.macro.ClassKind.KGenericBuild.__enum__ = haxe.macro.ClassKind;
haxe.macro.ClassKind.__empty_constructs__ = [haxe.macro.ClassKind.KNormal,haxe.macro.ClassKind.KGeneric,haxe.macro.ClassKind.KMacroType,haxe.macro.ClassKind.KGenericBuild];
haxe.macro.FieldKind = $hxClasses["haxe.macro.FieldKind"] = { __ename__ : ["haxe","macro","FieldKind"], __constructs__ : ["FVar","FMethod"] };
haxe.macro.FieldKind.FVar = function(read,write) { var $x = ["FVar",0,read,write]; $x.__enum__ = haxe.macro.FieldKind; $x.toString = $estr; return $x; };
haxe.macro.FieldKind.FMethod = function(k) { var $x = ["FMethod",1,k]; $x.__enum__ = haxe.macro.FieldKind; $x.toString = $estr; return $x; };
haxe.macro.FieldKind.__empty_constructs__ = [];
haxe.macro.VarAccess = $hxClasses["haxe.macro.VarAccess"] = { __ename__ : ["haxe","macro","VarAccess"], __constructs__ : ["AccNormal","AccNo","AccNever","AccResolve","AccCall","AccInline","AccRequire"] };
haxe.macro.VarAccess.AccNormal = ["AccNormal",0];
haxe.macro.VarAccess.AccNormal.toString = $estr;
haxe.macro.VarAccess.AccNormal.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccNo = ["AccNo",1];
haxe.macro.VarAccess.AccNo.toString = $estr;
haxe.macro.VarAccess.AccNo.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccNever = ["AccNever",2];
haxe.macro.VarAccess.AccNever.toString = $estr;
haxe.macro.VarAccess.AccNever.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccResolve = ["AccResolve",3];
haxe.macro.VarAccess.AccResolve.toString = $estr;
haxe.macro.VarAccess.AccResolve.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccCall = ["AccCall",4];
haxe.macro.VarAccess.AccCall.toString = $estr;
haxe.macro.VarAccess.AccCall.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccInline = ["AccInline",5];
haxe.macro.VarAccess.AccInline.toString = $estr;
haxe.macro.VarAccess.AccInline.__enum__ = haxe.macro.VarAccess;
haxe.macro.VarAccess.AccRequire = function(r,msg) { var $x = ["AccRequire",6,r,msg]; $x.__enum__ = haxe.macro.VarAccess; $x.toString = $estr; return $x; };
haxe.macro.VarAccess.__empty_constructs__ = [haxe.macro.VarAccess.AccNormal,haxe.macro.VarAccess.AccNo,haxe.macro.VarAccess.AccNever,haxe.macro.VarAccess.AccResolve,haxe.macro.VarAccess.AccCall,haxe.macro.VarAccess.AccInline];
haxe.macro.MethodKind = $hxClasses["haxe.macro.MethodKind"] = { __ename__ : ["haxe","macro","MethodKind"], __constructs__ : ["MethNormal","MethInline","MethDynamic","MethMacro"] };
haxe.macro.MethodKind.MethNormal = ["MethNormal",0];
haxe.macro.MethodKind.MethNormal.toString = $estr;
haxe.macro.MethodKind.MethNormal.__enum__ = haxe.macro.MethodKind;
haxe.macro.MethodKind.MethInline = ["MethInline",1];
haxe.macro.MethodKind.MethInline.toString = $estr;
haxe.macro.MethodKind.MethInline.__enum__ = haxe.macro.MethodKind;
haxe.macro.MethodKind.MethDynamic = ["MethDynamic",2];
haxe.macro.MethodKind.MethDynamic.toString = $estr;
haxe.macro.MethodKind.MethDynamic.__enum__ = haxe.macro.MethodKind;
haxe.macro.MethodKind.MethMacro = ["MethMacro",3];
haxe.macro.MethodKind.MethMacro.toString = $estr;
haxe.macro.MethodKind.MethMacro.__enum__ = haxe.macro.MethodKind;
haxe.macro.MethodKind.__empty_constructs__ = [haxe.macro.MethodKind.MethNormal,haxe.macro.MethodKind.MethInline,haxe.macro.MethodKind.MethDynamic,haxe.macro.MethodKind.MethMacro];
haxe.macro.TConstant = $hxClasses["haxe.macro.TConstant"] = { __ename__ : ["haxe","macro","TConstant"], __constructs__ : ["TInt","TFloat","TString","TBool","TNull","TThis","TSuper"] };
haxe.macro.TConstant.TInt = function(i) { var $x = ["TInt",0,i]; $x.__enum__ = haxe.macro.TConstant; $x.toString = $estr; return $x; };
haxe.macro.TConstant.TFloat = function(s) { var $x = ["TFloat",1,s]; $x.__enum__ = haxe.macro.TConstant; $x.toString = $estr; return $x; };
haxe.macro.TConstant.TString = function(s) { var $x = ["TString",2,s]; $x.__enum__ = haxe.macro.TConstant; $x.toString = $estr; return $x; };
haxe.macro.TConstant.TBool = function(b) { var $x = ["TBool",3,b]; $x.__enum__ = haxe.macro.TConstant; $x.toString = $estr; return $x; };
haxe.macro.TConstant.TNull = ["TNull",4];
haxe.macro.TConstant.TNull.toString = $estr;
haxe.macro.TConstant.TNull.__enum__ = haxe.macro.TConstant;
haxe.macro.TConstant.TThis = ["TThis",5];
haxe.macro.TConstant.TThis.toString = $estr;
haxe.macro.TConstant.TThis.__enum__ = haxe.macro.TConstant;
haxe.macro.TConstant.TSuper = ["TSuper",6];
haxe.macro.TConstant.TSuper.toString = $estr;
haxe.macro.TConstant.TSuper.__enum__ = haxe.macro.TConstant;
haxe.macro.TConstant.__empty_constructs__ = [haxe.macro.TConstant.TNull,haxe.macro.TConstant.TThis,haxe.macro.TConstant.TSuper];
haxe.macro.ModuleType = $hxClasses["haxe.macro.ModuleType"] = { __ename__ : ["haxe","macro","ModuleType"], __constructs__ : ["TClassDecl","TEnumDecl","TTypeDecl","TAbstract"] };
haxe.macro.ModuleType.TClassDecl = function(c) { var $x = ["TClassDecl",0,c]; $x.__enum__ = haxe.macro.ModuleType; $x.toString = $estr; return $x; };
haxe.macro.ModuleType.TEnumDecl = function(e) { var $x = ["TEnumDecl",1,e]; $x.__enum__ = haxe.macro.ModuleType; $x.toString = $estr; return $x; };
haxe.macro.ModuleType.TTypeDecl = function(t) { var $x = ["TTypeDecl",2,t]; $x.__enum__ = haxe.macro.ModuleType; $x.toString = $estr; return $x; };
haxe.macro.ModuleType.TAbstract = function(a) { var $x = ["TAbstract",3,a]; $x.__enum__ = haxe.macro.ModuleType; $x.toString = $estr; return $x; };
haxe.macro.ModuleType.__empty_constructs__ = [];
haxe.macro.FieldAccess = $hxClasses["haxe.macro.FieldAccess"] = { __ename__ : ["haxe","macro","FieldAccess"], __constructs__ : ["FInstance","FStatic","FAnon","FDynamic","FClosure","FEnum"] };
haxe.macro.FieldAccess.FInstance = function(c,cf) { var $x = ["FInstance",0,c,cf]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.FStatic = function(c,cf) { var $x = ["FStatic",1,c,cf]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.FAnon = function(cf) { var $x = ["FAnon",2,cf]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.FDynamic = function(s) { var $x = ["FDynamic",3,s]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.FClosure = function(c,cf) { var $x = ["FClosure",4,c,cf]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.FEnum = function(e,ef) { var $x = ["FEnum",5,e,ef]; $x.__enum__ = haxe.macro.FieldAccess; $x.toString = $estr; return $x; };
haxe.macro.FieldAccess.__empty_constructs__ = [];
haxe.macro.TypedExprDef = $hxClasses["haxe.macro.TypedExprDef"] = { __ename__ : ["haxe","macro","TypedExprDef"], __constructs__ : ["TConst","TLocal","TArray","TBinop","TField","TTypeExpr","TParenthesis","TObjectDecl","TArrayDecl","TCall","TNew","TUnop","TFunction","TVar","TBlock","TFor","TIf","TWhile","TSwitch","TPatMatch","TTry","TReturn","TBreak","TContinue","TThrow","TCast","TMeta","TEnumParameter"] };
haxe.macro.TypedExprDef.TConst = function(c) { var $x = ["TConst",0,c]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TLocal = function(v) { var $x = ["TLocal",1,v]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TArray = function(e1,e2) { var $x = ["TArray",2,e1,e2]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TBinop = function(op,e1,e2) { var $x = ["TBinop",3,op,e1,e2]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TField = function(e,fa) { var $x = ["TField",4,e,fa]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TTypeExpr = function(m) { var $x = ["TTypeExpr",5,m]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TParenthesis = function(e) { var $x = ["TParenthesis",6,e]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TObjectDecl = function(fields) { var $x = ["TObjectDecl",7,fields]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TArrayDecl = function(el) { var $x = ["TArrayDecl",8,el]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TCall = function(e,el) { var $x = ["TCall",9,e,el]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TNew = function(c,params,el) { var $x = ["TNew",10,c,params,el]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TUnop = function(op,postFix,e) { var $x = ["TUnop",11,op,postFix,e]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TFunction = function(tfunc) { var $x = ["TFunction",12,tfunc]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TVar = function(v,expr) { var $x = ["TVar",13,v,expr]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TBlock = function(el) { var $x = ["TBlock",14,el]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TFor = function(v,e1,e2) { var $x = ["TFor",15,v,e1,e2]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TIf = function(econd,eif,eelse) { var $x = ["TIf",16,econd,eif,eelse]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TWhile = function(econd,e,normalWhile) { var $x = ["TWhile",17,econd,e,normalWhile]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TSwitch = function(e,cases,edef) { var $x = ["TSwitch",18,e,cases,edef]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TPatMatch = ["TPatMatch",19];
haxe.macro.TypedExprDef.TPatMatch.toString = $estr;
haxe.macro.TypedExprDef.TPatMatch.__enum__ = haxe.macro.TypedExprDef;
haxe.macro.TypedExprDef.TTry = function(e,catches) { var $x = ["TTry",20,e,catches]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TReturn = function(e) { var $x = ["TReturn",21,e]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TBreak = ["TBreak",22];
haxe.macro.TypedExprDef.TBreak.toString = $estr;
haxe.macro.TypedExprDef.TBreak.__enum__ = haxe.macro.TypedExprDef;
haxe.macro.TypedExprDef.TContinue = ["TContinue",23];
haxe.macro.TypedExprDef.TContinue.toString = $estr;
haxe.macro.TypedExprDef.TContinue.__enum__ = haxe.macro.TypedExprDef;
haxe.macro.TypedExprDef.TThrow = function(e) { var $x = ["TThrow",24,e]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TCast = function(e,m) { var $x = ["TCast",25,e,m]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TMeta = function(m,e1) { var $x = ["TMeta",26,m,e1]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.TEnumParameter = function(e1,ef,index) { var $x = ["TEnumParameter",27,e1,ef,index]; $x.__enum__ = haxe.macro.TypedExprDef; $x.toString = $estr; return $x; };
haxe.macro.TypedExprDef.__empty_constructs__ = [haxe.macro.TypedExprDef.TPatMatch,haxe.macro.TypedExprDef.TBreak,haxe.macro.TypedExprDef.TContinue];
haxe.rtti = {};
haxe.rtti.Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe.rtti.Meta;
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.obj == null) return { }; else return meta.obj;
};
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.statics == null) return { }; else return meta.statics;
};
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.fields == null) return { }; else return meta.fields;
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js.Boot.isClass = function(o) {
	return o.__name__;
};
js.Boot.isEnum = function(e) {
	return e.__ename__;
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
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
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
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
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
var library = {};
library.core = {};
library.core.Add = function() {
	this.name = "Add";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input1",flower.RetroType.RNumber);
	this.inputs.add("input2",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Add"] = library.core.Add;
library.core.Add.__name__ = ["library","core","Add"];
library.core.Add.__interfaces__ = [flower.JobComponent];
library.core.Add.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input1 + input2));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Add";
	}
	,__class__: library.core.Add
};
library.core.And = function() {
	this.name = "And";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input1",flower.RetroType.RNumber);
	this.inputs.add("input2",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.And"] = library.core.And;
library.core.And.__name__ = ["library","core","And"];
library.core.And.__interfaces__ = [flower.JobComponent];
library.core.And.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input1 && input2));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.And";
	}
	,__class__: library.core.And
};
library.core.Compare = function() {
	this.name = "Compare";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("value",flower.RetroType.RNumber);
	this.inputs.add("comparison",flower.RetroType.RNumber);
	this.inputs.add("operator",flower.RetroType.RString);
	this.outputs.add("pass",flower.RetroType.RNumber);
};
$hxClasses["library.core.Compare"] = library.core.Compare;
library.core.Compare.__name__ = ["library","core","Compare"];
library.core.Compare.__interfaces__ = [flower.JobComponent];
library.core.Compare.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var operator = params.get("operator");
		var pass = false;
		switch(operator) {
		case "eq":case "==":
			pass = value == comparison;
			break;
		case "ne":case "!=":
			pass = value != comparison;
			break;
		case "gt":case ">":
			pass = value > comparison;
			break;
		case "lt":case "<":
			pass = value < comparison;
			break;
		case "ge":case ">=":
			pass = value >= comparison;
			break;
		case "le":case "<=":
			pass = value <= comparison;
			break;
		default:
			cb(null);
			return;
		}
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("pass",flower.Message.Msg(pass));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Compare";
	}
	,__class__: library.core.Compare
};
library.core.Drop = function() {
	this.name = "Drop";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input",flower.RetroType.RNumber);
};
$hxClasses["library.core.Drop"] = library.core.Drop;
library.core.Drop.__name__ = ["library","core","Drop"];
library.core.Drop.__interfaces__ = [flower.JobComponent];
library.core.Drop.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		cb(null);
	}
	,getModuleName: function() {
		return "core.Drop";
	}
	,__class__: library.core.Drop
};
library.core.Entry = function() {
	this.name = "Entry";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Entry"] = library.core.Entry;
library.core.Entry.__name__ = ["library","core","Entry"];
library.core.Entry.__interfaces__ = [flower.JobComponent];
library.core.Entry.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(1));
			$r = _g;
			return $r;
		}(this)));
	}
	,onInputRecieved: function(params,cb) {
		return;
	}
	,getModuleName: function() {
		return "core.Entry";
	}
	,__class__: library.core.Entry
};
library.core.Equal = function() {
	this.name = "Equal";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("value",flower.RetroType.RNumber);
	this.inputs.add("comparison",flower.RetroType.RNumber);
	this.outputs.add("result",flower.RetroType.RNumber);
};
$hxClasses["library.core.Equal"] = library.core.Equal;
library.core.Equal.__name__ = ["library","core","Equal"];
library.core.Equal.__interfaces__ = [flower.JobComponent];
library.core.Equal.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var result = new haxe.ds.StringMap();
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("result",flower.Message.Msg(value == comparison));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Equal";
	}
	,__class__: library.core.Equal
};
library.core.Filter = function() {
	this.name = "Filter";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("value",flower.RetroType.RNumber);
	this.inputs.add("comparison",flower.RetroType.RNumber);
	this.inputs.add("operator",flower.RetroType.RString);
	this.outputs.add("pass",flower.RetroType.RNumber);
};
$hxClasses["library.core.Filter"] = library.core.Filter;
library.core.Filter.__name__ = ["library","core","Filter"];
library.core.Filter.__interfaces__ = [flower.JobComponent];
library.core.Filter.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var value = params.get("value");
		var comparison = params.get("comparison");
		var operator = params.get("operator");
		var pass = false;
		switch(operator) {
		case "eq":case "==":
			pass = value == comparison;
			break;
		case "ne":case "!=":
			pass = value != comparison;
			break;
		case "gt":case ">":
			pass = value > comparison;
			break;
		case "lt":case "<":
			pass = value < comparison;
			break;
		case "ge":case ">=":
			pass = value >= comparison;
			break;
		case "le":case "<=":
			pass = value <= comparison;
			break;
		default:
			cb(null);
			return;
		}
		if(pass == false) {
			cb(null);
			return;
		}
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("pass",flower.Message.Msg(value));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Filter";
	}
	,__class__: library.core.Filter
};
library.core.Gate = function() {
	this.name = "Gate";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input",flower.RetroType.RNumber);
	this.inputs.add("gate",flower.RetroType.RNumber);
	this.outputs.add("true",flower.RetroType.RNumber);
	this.outputs.add("false",flower.RetroType.RNumber);
};
$hxClasses["library.core.Gate"] = library.core.Gate;
library.core.Gate.__name__ = ["library","core","Gate"];
library.core.Gate.__interfaces__ = [flower.JobComponent];
library.core.Gate.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		var gate = params.get("gate");
		if(gate) cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("true",flower.Message.Msg(input));
			_g.set("false",flower.Message.NoMsg);
			$r = _g;
			return $r;
		}(this))); else cb((function($this) {
			var $r;
			var _g1 = new haxe.ds.StringMap();
			_g1.set("true",flower.Message.NoMsg);
			_g1.set("false",flower.Message.Msg(input));
			$r = _g1;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Gate";
	}
	,__class__: library.core.Gate
};
library.core.Not = function() {
	this.name = "Not";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Not"] = library.core.Not;
library.core.Not.__name__ = ["library","core","Not"];
library.core.Not.__interfaces__ = [flower.JobComponent];
library.core.Not.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(!input));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Not";
	}
	,__class__: library.core.Not
};
library.core.Or = function() {
	this.name = "Or";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input1",flower.RetroType.RNumber);
	this.inputs.add("input2",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Or"] = library.core.Or;
library.core.Or.__name__ = ["library","core","Or"];
library.core.Or.__interfaces__ = [flower.JobComponent];
library.core.Or.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input1 || input2));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Or";
	}
	,__class__: library.core.Or
};
library.core.Remainder = function() {
	this.name = "Remainder";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input1",flower.RetroType.RNumber);
	this.inputs.add("input2",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Remainder"] = library.core.Remainder;
library.core.Remainder.__name__ = ["library","core","Remainder"];
library.core.Remainder.__interfaces__ = [flower.JobComponent];
library.core.Remainder.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input1 % input2));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Remainder";
	}
	,__class__: library.core.Remainder
};
library.core.Through = function() {
	this.name = "Through";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Through"] = library.core.Through;
library.core.Through.__name__ = ["library","core","Through"];
library.core.Through.__interfaces__ = [flower.JobComponent];
library.core.Through.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input = params.get("input");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Through";
	}
	,__class__: library.core.Through
};
library.core.Times = function() {
	this.name = "Times";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("input1",flower.RetroType.RNumber);
	this.inputs.add("input2",flower.RetroType.RNumber);
	this.outputs.add("output",flower.RetroType.RNumber);
};
$hxClasses["library.core.Times"] = library.core.Times;
library.core.Times.__name__ = ["library","core","Times"];
library.core.Times.__interfaces__ = [flower.JobComponent];
library.core.Times.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("input1");
		var input2 = params.get("input2");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("output",flower.Message.Msg(input1 * input2));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Times";
	}
	,__class__: library.core.Times
};
library.core.Transistor = function() {
	this.name = "Transistor";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("emitter",flower.RetroType.RNumber);
	this.inputs.add("base",flower.RetroType.RNumber);
	this.outputs.add("collector",flower.RetroType.RNumber);
};
$hxClasses["library.core.Transistor"] = library.core.Transistor;
library.core.Transistor.__name__ = ["library","core","Transistor"];
library.core.Transistor.__interfaces__ = [flower.JobComponent];
library.core.Transistor.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var emitter = params.get("emitter");
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("collector",flower.Message.Msg(emitter));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "core.Transistor";
	}
	,__class__: library.core.Transistor
};
library.map = {};
library.map.Getter = function() {
	this.name = "Getter";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("key",flower.RetroType.RNumber);
	this.outputs.add("value",flower.RetroType.RNumber);
	this.outputs.add("exists",flower.RetroType.RNumber);
};
$hxClasses["library.map.Getter"] = library.map.Getter;
library.map.Getter.__name__ = ["library","map","Getter"];
library.map.Getter.__interfaces__ = [flower.JobComponent];
library.map.Getter.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var key = params.get("key");
		var exists = Pod.getInstance().exists(key);
		var value = Pod.getInstance().get(key);
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("exists",flower.Message.Msg(exists));
			_g.set("value",flower.Message.Msg(value));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "map.Getter";
	}
	,__class__: library.map.Getter
};
library.map.Setter = function() {
	this.name = "Setter";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("key",flower.RetroType.RNumber);
	this.inputs.add("value",flower.RetroType.RNumber);
	this.outputs.add("result",flower.RetroType.RNumber);
};
$hxClasses["library.map.Setter"] = library.map.Setter;
library.map.Setter.__name__ = ["library","map","Setter"];
library.map.Setter.__interfaces__ = [flower.JobComponent];
library.map.Setter.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var input1 = params.get("key");
		var input2 = params.get("value");
		Pod.getInstance().set(input1,input2);
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("result",flower.Message.Msg(true));
			$r = _g;
			return $r;
		}(this)));
	}
	,getModuleName: function() {
		return "map.Setter";
	}
	,__class__: library.map.Setter
};
library.milkclient = {};
library.milkclient.MilkClient = function() {
	this.name = "MlikCCocoa";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("host",flower.RetroType.RNumber);
	this.outputs.add("milkcocoa",flower.RetroType.RNumber);
};
$hxClasses["library.milkclient.MilkClient"] = library.milkclient.MilkClient;
library.milkclient.MilkClient.__name__ = ["library","milkclient","MilkClient"];
library.milkclient.MilkClient.__interfaces__ = [flower.JobComponent];
library.milkclient.MilkClient.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		var host = params.get("host");
		var milkcocoa = new MilkCocoa(host);
		cb((function($this) {
			var $r;
			var _g = new haxe.ds.StringMap();
			_g.set("milkcocoa",flower.Message.Msg(milkcocoa));
			$r = _g;
			return $r;
		}(this)));
	}
	,onInputRecieved: function(params,cb) {
	}
	,getModuleName: function() {
		return "milkcocoa.MilkCocoa";
	}
	,__class__: library.milkclient.MilkClient
};
library.milkclient.Push = function() {
	this.name = "Push";
	this.inputs = new externs.Inputs();
	this.outputs = new externs.Outputs();
	this.inputs.add("milkcocoa",flower.RetroType.RNumber);
	this.inputs.add("path",flower.RetroType.RNumber);
	this.inputs.add("value",flower.RetroType.RNumber);
};
$hxClasses["library.milkclient.Push"] = library.milkclient.Push;
library.milkclient.Push.__name__ = ["library","milkclient","Push"];
library.milkclient.Push.__interfaces__ = [flower.JobComponent];
library.milkclient.Push.prototype = {
	name: null
	,inputs: null
	,outputs: null
	,onPlay: function(params,cb) {
		return;
	}
	,onInputRecieved: function(params,cb) {
		var milkcocoa = params.get("milkcocoa");
		var path = params.get("path");
		var value = params.get("value");
		var dataStore = milkcocoa.dataStore(path);
		dataStore.push(value);
	}
	,getModuleName: function() {
		return "milkcocoa.Push";
	}
	,__class__: library.milkclient.Push
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
if(Array.prototype.lastIndexOf) HxOverrides.lastIndexOf = function(a1,o1,i1) {
	return Array.prototype.lastIndexOf.call(a1,o1,i1);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
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
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
CompileTimeClassList.__meta__ = { obj : { classLists : [["library,true,","library.core.Add,library.core.And,library.core.Compare,library.core.Drop,library.core.Entry,library.core.Equal,library.core.Filter,library.core.Gate,library.core.Not,library.core.Or,library.core.Remainder,library.core.Through,library.core.Times,library.core.Transistor,library.map.Getter,library.map.Setter,library.milkclient.MilkClient,library.milkclient.Push"]]}};
CompileTimeClassList.lists = null;
haxe.ds.ObjectMap.count = 0;
})(typeof window != "undefined" ? window : exports);
