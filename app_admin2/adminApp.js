(function() {
	angular.module('adminApp', ['ngRoute', 'ui.router', // Routing
			'oc.lazyLoad', // ocLazyLoad
			'ui.bootstrap', // Ui Bootstrap
			'pascalprecht.translate', // Angular Translate
			'ngIdle', // Idle timer
			'ngSanitize' // ngSanitize
		]
		//['ngRoute', 'ngSanitize', 'ui.bootstrap']
	);

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/common/views/genericText.view.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			.when('/about', {
				templateUrl: '/common/views/genericText.view.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			//.when('/login', {})
			.otherwise({
				rederiteTo: ''
			});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}

	angular.module('adminApp')
		.config(['$routeProvider', '$locationProvider', config])

})();