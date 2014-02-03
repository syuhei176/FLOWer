$(function(){
	$('#joblist > li').click(function(){
		$(this).toggleClass("active");
		$('.main_menu',this).toggleClass("active");
	});

	var listeners = [];
	function CreateSvgDialog() {
	}

	CreateSvgDialog.prototype.on = function(listener) {
		listeners[0] = listener;
	}
	CreateSvgDialog.prototype.open = function() {
		var modal =	$('<a href="#sub_svg"></a>');
		modal.leanModal();
		$(modal).click();
	}

	window.CreateSvgDialog = CreateSvgDialog;
});