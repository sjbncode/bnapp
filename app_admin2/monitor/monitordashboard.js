// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('monitordashboard', ['$scope', '$interval','$http', function($scope, $interval,$http) {
			$scope.synclog = [];
			function getSyncLog(){
				//$scope.synclog.total += 1;
				 $http.get('/api/synclog/').then(function(result){

				 	$scope.synclog=[];
				 	result.data.data.forEach(function(x){
				 		$scope.synclog.push(x);
				 	})
				 });
			}
			$interval(getSyncLog, 5000);
		}])
})();