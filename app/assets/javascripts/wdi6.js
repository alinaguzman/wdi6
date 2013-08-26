window.Wdi6 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var app = new Wdi6.Routers.Application();
		Backbone.history.start({pushState: true});
		$('.nav_link a').click(function(e){
			e.preventDefault();
			app.navigate($(this).attr('href'), true);
			return false;
		});
  }
};

$(document).ready(function(){
  Wdi6.initialize();
});
