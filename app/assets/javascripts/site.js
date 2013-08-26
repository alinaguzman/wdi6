var Site = {
	scrollToTop: function() {
		if($(window).scrollTop !== 0){
			this.animateScroll(0);
		}
	},
	scrollToStudents: function(){
		this.animateScroll($('#students').offset().top);
	},

	animateScroll: function(scrollTo) {
			$('html, body').animate({
			scrollTop: scrollTo - 45
		}, 1000);
	}
};