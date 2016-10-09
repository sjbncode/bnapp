(function() {
	angular.module('adminApp', [ //'ngRoute',
		'ui.router', // Routing
		'oc.lazyLoad', // ocLazyLoad
		'ui.bootstrap', // Ui Bootstrap
		'pascalprecht.translate', // Angular Translate
		'ngIdle', // Idle timer
		// 'ngSanitize' // ngSanitize
		//  ,'ngclipboard'
	]);

	function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider, IdleProvider) {

		// Configure Idle settings
		IdleProvider.idle(5); // in seconds
		IdleProvider.timeout(120); // in seconds

		$ocLazyLoadProvider.config({
			// Set to true if you want to see what and when is dynamically loaded
			debug: true
		});
		$urlRouterProvider.otherwise("/dashboards/dashboard_2");
		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "auth/login/login.html",
				data: {
					pageTitle: 'Login',
					specialClass: 'gray-bg'
				}
			}).state('register', {
				url: "/register",
				templateUrl: "auth/register/register.html",
				data: {
					pageTitle: 'Login',
					specialClass: 'gray-bg'
				}
			})
			.state('dashboards', {
				abstract: true,
				url: "/dashboards",
				templateUrl: "common/views/layout.html",
			})
			.state('dashboards.monitor', {
				url: "/monitor",
				templateUrl: "monitor/monitordashboard.html",
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}, {
							name: 'angles',
							files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
						}, {
							name: 'angular-peity',
							files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
						}
						, {
                            files: ['js/plugins/ngclipboard/clipboard.min.js']
                        },
                        {
                            name: 'ngclipboard',
                            files: ['js/plugins/ngclipboard/ngclipboard.min.js']
                        }
                        ]);
					}
				}
			})

		.state('dashboards.dashboard_1', {
				url: "/dashboard_1",
				templateUrl: "views/dashboard_1.html",
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{

							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}, {
							name: 'angles',
							files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
						}, {
							name: 'angular-peity',
							files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
						}]);
					}
				}
			})
			.state('dashboards.dashboard_2', {
				url: "/dashboard_2",
				templateUrl: "views/dashboard_2.html",
				data: {
					pageTitle: 'Dashboard 2'
				},
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}, {
							serie: true,
							files: ['js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', 'js/plugins/jvectormap/jquery-jvectormap-2.0.2.css']
						}, {
							serie: true,
							files: ['js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
						}, {
							name: 'ui.checkbox',
							files: ['js/bootstrap/angular-bootstrap-checkbox.js']
						}]);
					}
				}
			})
			.state('dashboards.dashboard_3', {
				url: "/dashboard_3",
				templateUrl: "views/dashboard_3.html",
				data: {
					pageTitle: 'Dashboard 3'
				},
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							name: 'angles',
							files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
						}, {
							name: 'angular-peity',
							files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
						}, {
							name: 'ui.checkbox',
							files: ['js/bootstrap/angular-bootstrap-checkbox.js']
						}]);
					}
				}
			})
			.state('dashboards_top', {
				abstract: true,
				url: "/dashboards_top",
				templateUrl: "views/common/content_top_navigation.html",
			})
			.state('dashboards_top.dashboard_4', {
				url: "/dashboard_4",
				templateUrl: "views/dashboard_4.html",
				data: {
					pageTitle: 'Dashboard 4'
				},
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							name: 'angles',
							files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
						}, {
							name: 'angular-peity',
							files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
						}, {
							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}]);
					}
				}
			})
			.state('dashboards.dashboard_4_1', {
				url: "/dashboard_4_1",
				templateUrl: "views/dashboard_4_1.html",
				data: {
					pageTitle: 'Dashboard 4'
				},
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							name: 'angles',
							files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
						}, {
							name: 'angular-peity',
							files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
						}, {
							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}]);
					}
				}
			})
			.state('dashboards.dashboard_5', {
				url: "/dashboard_5",
				templateUrl: "views/dashboard_5.html",
				data: {
					pageTitle: 'Dashboard 5'
				},
				resolve: {
					loadPlugin: function($ocLazyLoad) {
						return $ocLazyLoad.load([{
							serie: true,
							name: 'angular-flot',
							files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
						}, {
							files: ['js/plugins/sparkline/jquery.sparkline.min.js']
						}]);
					}
				}
			})
			.state('layouts', {
				url: "/layouts",
				templateUrl: "views/layouts.html",
				data: {
					pageTitle: 'Layouts'
				},
			})
			// $locationProvider.html5Mode({
			// 	enabled: true,
			// 	requireBase: false
			// });
	}

	angular.module('adminApp')
		.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', 'IdleProvider', config])
		.run(function($rootScope, $state) {
			$rootScope.$state = $state;
		});
})();