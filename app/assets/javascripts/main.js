var Site = {
	// adds page event listenters and transitions
	initialize: function() {
		window.scrollTop(0);
		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 1000);
			return false;
		});
	}
};