// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('monitordashboard', ['$scope', '$interval', '$http','ngclipboard' function($scope, $interval, $http,ngClipboard) {
			$scope.synclog = [];
			$scope.syncErrors = [];
			var promise;
			$scope.start = function() {
				$scope.stop();
				promise = $interval(getSyncLog, 5000);
			};
			$scope.stop = function() {
				$interval.cancel(promise);
			};
			$scope.$on('$destroy', function() {
				$scope.stop();
			});

			function getSyncLog() {
				//$scope.synclog.total += 1;
				$http.get('/api/synclog/').then(function(result) {

					$scope.synclog = [];
					result.data.data.forEach(function(x) {
						$scope.synclog.push(x);
					})
				});
			};


			$scope.getSyncErrors = function() {
				$http.get('/api/syncErrors/').then(function(result) {
					$scope.syncErrors = [];
					result.data.data.forEach(function(x) {
						$scope.syncErrors.push(x);
					})
				});
			}
			$scope.showhide = function() {

			}
			$scope.showErrorDetail = function(txt) {
				 ngClipboard.toClipboard(txt);
			}

			$scope.start();
		}])
})();