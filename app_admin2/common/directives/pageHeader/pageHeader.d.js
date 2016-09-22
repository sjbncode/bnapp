(function() {
  angular
    .module('adminApp')
    .directive('pageheader', pageHeader);

  function pageHeader() {
    return {
      restrict: 'EA',
      controller: 'pageHeaderCtrl as phvm',
      templateUrl: '/common/directives/pageHeader/pageHeader.html'
    };
  }

})();