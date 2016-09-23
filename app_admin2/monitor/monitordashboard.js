// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('monitordashboard', ['$scope', '$interval', function($scope, $interval) {
			$scope.synclog = [{dataName:'xxx',success:100,noneedupload:200,new:20,inqueue:10,processing:30,exception:10}
			,{dataName:'xxx',success:100,noneedupload:200,new:20,inqueue:10,processing:30,exception:10}
			,{dataName:'xxx',success:100,noneedupload:200,new:20,inqueue:10,processing:30,exception:10}
			,{dataName:'xxx',success:100,noneedupload:200,new:20,inqueue:10,processing:30,exception:10}
			,{dataName:'xxx',success:100,noneedupload:200,new:20,inqueue:10,processing:30,exception:10}
			];
			function getSyncLog(){
				//$scope.synclog.total += 1;
			}
			$interval(getSyncLog, 100);
		}])
})();