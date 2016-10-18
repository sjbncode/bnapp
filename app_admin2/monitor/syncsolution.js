// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('syncsolution', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {
			$scope.solution = {};
			$scope.ex={};
			$scope.findSolution=function(){
				//$http({method:'post',url:'/api/getSyncErrorByID/',data:{ID:$stateParams.ID}})
				$http.post('/api/SyncErrorByID/',{ID:$stateParams.ID})	
				.then(function(result) {
					$scope.ex=result.data.data[0];
					anlysis();
				});
			}
			function anlysis(){
				if($scope.ex.DataName&&$scope[$scope.ex.DataName])
				{
					x='$scope.'+$scope.ex.DataName+'()';
					eval(x);
				}
				else{
					$scope.solution={s:"solution not found"}
				}
			}
			$scope.ChinaInvoice=function(){
				var err=$scope.ex;
				var s="solution not found";
				if(err.Result.indexOf('Invalid location reference key 0 for subsidiary 4')>=0){

					s='Possible root casue:Process site is not set\n';
					s+='\n';s+='\n';
					s+='query verify: \n';
					s+='\n';
					s+='SELECT * FROM dbo.FinalInvoiceDetail \n';
					s+='WHERE FinalInvoiceID=\''+err.Key1+'\' \n';
					s+='\n';
					s+='\n';
					s+='fix script: \n';
					s+='\n';
					s+='UPDATE dbo.FinalInvoiceDetail \n';
					s+='SET ProcessSite=11 \n';
					s+='WHERE FinalInvoiceID=\''+err.Key1+'\' AND ProcessSite=0 \n';
				}
				$scope.solution={s:s}
			}

			$scope.findSolution();
		}])
})();