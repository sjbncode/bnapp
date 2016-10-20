// monitordashboard
(function() {
	angular.module('adminApp')
		.controller('monitordashboard', ['$scope', '$interval', '$http', function($scope, $interval, $http) {
			$scope.synclog = [];
			$scope.synclog_exception = 0;
			$scope.syncErrors = [];
			$scope.lastRereshTime='';

			$scope.duplicateInvoice=[];

			var promise;
			$scope.start = function() {
				$scope.stop();
				promise = $interval(refresh, 5000);
			};
			$scope.stop = function() {
				$interval.cancel(promise);
			};
			$scope.$on('$destroy', function() {
				$scope.stop();
			});
			Date.prototype.format = function(format){ 
				var o = { 
				"M+" : this.getMonth()+1, //month 
				"d+" : this.getDate(), //day 
				"h+" : this.getHours(), //hour 
				"m+" : this.getMinutes(), //minute 
				"s+" : this.getSeconds(), //second 
				"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
				"S" : this.getMilliseconds() //millisecond 
				} 

				if(/(y+)/.test(format)) { 
				format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
				} 

				for(var k in o) { 
				if(new RegExp("("+ k +")").test(format)) { 
				format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
				} 
				} 
				return format; 
				} 
			function refresh(){
				getSyncLog();
				getDuplicateInvoice();
			}
			function getSyncLog() {
				//$scope.synclog.total += 1;
				$http.get('/api/synclog/').then(function(result) {

					$scope.synclog = [];
					$scope.synclog_exception = 0;
					result.data.data.forEach(function(x) {
						$scope.synclog.push(x);
						$scope.synclog_exception += x.Exception;
					});
				});
			};
			function getDuplicateInvoice(){
				$http.get('/api/duplicateInvoice/').then(function(result) {
					$scope.duplicateInvoice = [];
					result.data.data.forEach(function(x) {
						$scope.duplicateInvoice.push(x);
					});
					$scope.lastRereshTime=new Date().format("yyyy-MM-dd hh:mm:ss");
				});
			}

			$scope.getSyncErrors = function(dataName) {
				$http.get('/api/syncErrors/').then(function(result) {
					$scope.syncErrors = [];

					result.data.data.forEach(function(x) {
						if (dataName) {
							if (dataName == x.DataName) {
								$scope.syncErrors.push(x);
							}
						} else {
							$scope.syncErrors.push(x);
						}
					});
					if($scope.syncErrors.length>0)
						window.scroll('top',$('.ibox').height());
				});
			}
			$scope.showhide = function() {

			}
			$scope.showErrorDetail = function(txt) {
				// ngClipboard.toClipboard(txt);
			}
			$scope.propertyName = null;
			$scope.reverse = false;
			$scope.sortBy = function(x) {
				$scope.propertyName = x;
				$scope.reverse = !$scope.reverse;
			}

			$scope.start();
			refresh();
			$scope.getSyncErrors();
		}])
})();