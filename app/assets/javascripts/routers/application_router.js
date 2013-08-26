Wdi6.Routers.Application = Backbone.Router.extend({

	routes: {
		'': 'home',
		'students': 'students',
		'about': 'about',
		'contact': 'contact'
	},

	home: function() {
		Site.scrollToTop();
	},

	students: function() {
		Site.scrollToStudents();
	},

	about: function() {
		Site.scrollToAbout();
	},

	contact: function() {
		Site.scrollToContact();
	}
});
