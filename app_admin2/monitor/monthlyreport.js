// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('monthlyReport', ['$scope', '$http', function($scope, $http) {		

			$scope.lineOptions = {
				scaleShowGridLines: true,
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleGridLineWidth: 1,
				bezierCurve: true,
				bezierCurveTension: 0.4,
				pointDot: true,
				pointDotRadius: 4,
				pointDotStrokeWidth: 1,
				pointHitDetectionRadius: 20,
				datasetStroke: true,
				datasetStrokeWidth: 2,
				datasetFill: true
			};
			$scope.lineData = {
				labels: ["2015-12","2016-01","2016-02","2016-03","2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
				datasets: [ {
					label: "Example dataset",
					fillColor: "rgba(26,179,148,0.5)",
					strokeColor: "rgba(26,179,148,0.7)",
					pointColor: "rgba(26,179,148,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(26,179,148,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0]
				}]
			};
			$scope.lineData2 = {
				labels: ["2015-12","2016-01","2016-02","2016-03","2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
				datasets: [ {
					label: "Example dataset",
					fillColor: "rgba(26,179,148,0.5)",
					strokeColor: "rgba(26,179,148,0.7)",
					pointColor: "rgba(26,179,148,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(26,179,148,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0]
				}]
			};
			function buildLineData(d,k) {
				// body...
				var dataList=[];
				for (var i = 0 ; i <$scope.lineData.labels.length; i++) {
					var v=0;
					var matchs=d.filter(function(x){return x.M==$scope.lineData.labels[i];});
					if(matchs.length>0){
						v=matchs[0][k];
					}
					dataList.push(v);
				}
				return dataList;
			}
			function getCompanySummary(cname){
				// cname=cname||'广西南宁宏唐生物科技有限公司'
				$http.post('/api/CompanyMonthlySummary/', {CompanyName:cname})
				.then(function(result){
					if(result.data.error)
					{
						console.log(JSON.stringify(result));
						return;
					}

					$scope.lineData.datasets[0].data=buildLineData(result.data.data,'amount');
					$scope.lineData2.datasets[0].data=buildLineData(result.data.data,'orders');
				})
			}
			getCompanySummary();

			$scope.cname='';
			$scope.search=function(){
				getCompanySummary($scope.cname);
			}
		}])
})();