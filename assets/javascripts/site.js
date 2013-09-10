//var Site = {
//	scrollToTop: function() {
//		if($(window).scrollTop !== 0){
//			this.animateScroll(0);
//		}
//	},
//	scrollToStudents: function(){
//		if($(window).scrollTop != $('#students').offset().top - 45){
//			this.animateScroll($('#students').offset().top);
//		}
//	},
//
//	scrollToAbout: function() {
//		this.animateScroll($('#about').offset().top);
//	},
//
//	scrollToContact: function() {
//		this.animateScroll($('#contact').offset().top);
//	},
//
//	animateScroll: function(scrollTo) {
//			$('html, body').animate({
//			scrollTop: scrollTo - $('#navbar').height()
//		}, 1000);
//	}
//};

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});