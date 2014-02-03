$(function(){
	$('#joblist > li').click(function(){
		$(this).toggleClass("active");
		$('.main_menu',this).toggleClass("active");
	});
});