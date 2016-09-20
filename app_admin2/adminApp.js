(function() {
	angular.module('adminApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {})
			.when('/about', {
				templateUrl: '/common/views/genericText.view.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			.when('/login', {})
			.otherwise({
				rederiteTo: ''
			});

		$locationProvider.html5Mode(true);
	}

	angular.module('adminApp')
		.config(['$routeProvider', '$locationProvider', config])
})();