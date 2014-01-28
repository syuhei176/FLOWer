(function(){

	var packages =  {
	 "core": ["Through","Add","Times","Remainder","Filter","Compare","And","Or","Not","Transistor",], 
	 "data": ["Stack",], 
	 "list": ["Length","Add","Clear","First","IsEmpty","Join","Last","Pop","Push","Remove",], 
	 "math": ["Abs","Acos","Asin","Atan","Atan2","Cos","Sin","Floor","Log","Max","Min","Pow","Random","Sqrt",], 
	 "snapsvg": ["Rect","Circle",], 
	 "point2d": ["Add","Sub","Create","Distance","Post","Get",], 
	 "line2d": ["Create","Distance",], 
	 "system": ["Print","Scan",], 
	 "snapelement": ["Translate","Fill",], 
	 "pigpio": ["Write","Read",], 
	 "string": ["Split","IndexOf","ChatAt","Substr","Length","LastIndexOf",], 
	 "number": ["C0","C1","C2","C3","C4","C5","C6","C7","C8","C9",], 
	 "array": ["Create","Length","Push","Pop","Shift","Get",], 
	 "sphero": ["SetBackLED","SetHeading","Roll",], 
	 "jquery": ["Find","Html",], 
	 "" : []};

	var modalMemu = $("#joblist");

	for( pkg in packages ){
		var pkgUl = $('<ul/>').addClass("sub_menu");
		$(modalMemu).append($("<li/>").append($('<div/>').addClass("main_menu").text(pkg)).append(pkgUl));
		for( job in packages[pkg] ){
			$(pkgUl).append($('<a/>').append($('<li pkg="' + pkg + '"/>').addClass('item').text(packages[pkg][job])));
		}
	}

	$('.sub_menu').hide();
    $('.main_menu').click(function(e){
        $('+ul.sub_menu',this).slideToggle(100);
    });


    var listeners = [];
    $(".item").click(function(e){
		listeners[0]($(this).attr("pkg"), $(this).text(), 100, 100);
	});


	function CreateJobDialog() {
	}

	CreateJobDialog.prototype.on = function(listener) {
		listeners[0] = listener;
	}
	CreateJobDialog.prototype.open = function() {
		var modal =	$('<a href="#jobdiv"></a>');
		modal.leanModal({closeButton:".sub_menu"});
		$(modal).click();
	}

	window.CreateJobDialog = CreateJobDialog;
}())