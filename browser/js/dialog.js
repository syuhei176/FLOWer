(function(){
	function CreateJobDialog() {
	}

	CreateJobDialog.init = function(){
		var packages = Library.getPackage();
		packages[" "] = [];
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
	
	
    	CreateJobDialog.listeners = [];
    	$(".item").click(function(e){
			CreateJobDialog.listeners[0]($(this).attr("pkg"), $(this).text(), 100, 100);
		});
	}

	CreateJobDialog.prototype.on = function(listener) {
		CreateJobDialog.listeners[0] = listener;
	}

	CreateJobDialog.prototype.open = function() {
		var modal =	$('<a href="#jobdiv"></a>');
		modal.leanModal({closeButton:".sub_menu"});
		$(modal).click();
	}

	window.CreateJobDialog = CreateJobDialog;
}())