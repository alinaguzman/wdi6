Wdi6.Routers.Application = Backbone.Router.extend({

	routes: {
		'': 'home',
		'students': 'students'
	},

	home: function() {
		Site.scrollToTop();
	},

	students: function() {
		Site.scrollToStudents();
	}
});
