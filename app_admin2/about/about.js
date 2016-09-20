(function(){
	angular.module('adminApp')
	.controller('aboutCtrl',aboutCtrl);

	function aboutCtrl() {
		var vm=this;
		vm.pageHeader={
			title:'bn app ws'
		};
		vm.main={
			content:'this is bn app website'
		}
	}
})();