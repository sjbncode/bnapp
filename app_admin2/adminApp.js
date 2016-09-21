(function() {
	angular.module('adminApp', 
		['ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize'                    // ngSanitize
        ]
		//['ngRoute', 'ngSanitize', 'ui.bootstrap']
		);

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {})
			.when('/about', {
				templateUrl: '/common/views/genericText.view.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			//.when('/login', {})
			.otherwise({
				rederiteTo: ''
			});

		$locationProvider.html5Mode(true);
	}

	angular.module('adminApp')
		.config(['$routeProvider', '$locationProvider', config])
})();