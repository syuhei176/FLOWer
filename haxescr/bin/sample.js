(function () { "use strict";
var js = {}
js.Browser = function() { }
var retro = {}
retro.view = {}
retro.view.JobView = function() { }
retro.view.JobView.main = function() {
	var load = function(_) {
		var s = new Snap("#svg");
		console.log(s);
		var bigCircle = s.circle(150,150,100);
		bigCircle.attr({ fill : "#bada55", stroke : "#000", strokeWidth : 5});
	};
	js.Browser.window.onload = load;
}
js.Browser.window = typeof window != "undefined" ? window : null;
retro.view.JobView.main();
})();
