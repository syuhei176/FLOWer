(function(){
	Function.prototype.extend = function(parent) {
		var child = this;
		child.prototype = parent;
		child.prototype.$super = parent;
		child.prototype = new child(Array.prototype.slice.call(1, arguments));
		child.prototype.constructor = child;
	}
	window.retro = function() {}
}())