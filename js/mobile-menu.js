$(function(){
	$('.menu-button').click(function(){
		$('.mobile-menu').toggleClass('closed');
	});

	$('.nav-dropdown-toggle').click(function(){
		$('.has-dropdown').toggleClass('active');
	})
});
