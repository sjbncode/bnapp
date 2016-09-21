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
			 .when('/layouts', {
			templateUrl: "views/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
			 })
			.when('/',{template:'这是首页页面'})
			.when('/about', {
				templateUrl: '/common/views/genericText.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			//.when('/login', {})
			.otherwise({
				rederiteTo: ''
			});

		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requireBase: false
		// });
	}

	angular.module('adminApp')
		.config(['$routeProvider', '$locationProvider', config])

})();