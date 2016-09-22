(function () {

  angular
    .module('adminApp')
    .directive('footergeneric', footerGeneric);

  function footerGeneric () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/footerGeneric/footerGeneric.html'
    };
  }

})();