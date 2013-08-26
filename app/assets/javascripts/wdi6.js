window.Wdi6 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		Site.initialize();
		Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  Wdi6.initialize();
});
