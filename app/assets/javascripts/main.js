var Site = {
	// adds page event listenters and transitions
	initialize: function() {
		$('.nav_link').click(function(e){
			e.preventDefault();
			app.navigate($(this).attr('href'), true);
		});
	}
};