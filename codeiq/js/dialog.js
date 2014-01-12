(function(){
	var packages = {"core":["Through","Add","Times","Remainder","Filter","Compare","And","Or","Not","Transistor"],
			"array":["Create","Length","Push","Pop","Shift","Get"],
			"data":["Stack"],
			"sphero":["SetBackLED","SetHeading","Roll",],
			"string":["Split","IndexOf","ChatAt","Substr","Length","LastIndexOf",],
			"point2d":["Add","Sub","Create","Distance",],"http":["Post","Get",],
			"line2d":["Create","Distance",],
			"list":["Length","Add","Clear","First","IsEmpty","Join","Last","Pop","Push","Remove",],
			"math":["Abs","Acos","Asin","Atan","Atan2","Cos","Sin","Floor","Log","Max","Min","Pow","Random","Sqrt",],
			"snapsvg":["Rect","Circle",],
			"snapelement":["Translate","Fill",],
			"jquery":["Find","Html",],
			"system":["Print","Scan"]};

	var modalMemu = $("#joblist");

	for( pkg in packages ){
		var pkgUl = $('<ul class="sub_menu"/>');
		$(modalMemu).append($("<li/>").append($('<div class="main_menu">'+pkg+'</div>')).append(pkgUl));
		for( job in packages[pkg] ){
			$(pkgUl).append('<a><li class="item" pkg="' + pkg + '">'+packages[pkg][job]+'</li></a>');
		}
	}

	$('.sub_menu').hide();
    $('.main_menu').click(function(e){
        $('+ul.sub_menu',this).slideToggle(100);
    });

    var listeners = [];
    $(".item").click(function(e){
		listeners[0]($(this).attr("pkg"), $(this).text(),e.pageX, e.pageY);
	});

	function CreateJobDialog() {
	}

	CreateJobDialog.prototype.on = function(listener) {
		listeners[0] = listener;
	}
	CreateJobDialog.prototype.open = function() {
		var modal =	$('<a href="#test"></a>');
		modal.leanModal({closeButton:".sub_menu"});
		$(modal).click();
	}

	window.CreateJobDialog = CreateJobDialog;
}())