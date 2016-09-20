(function () {

  angular
    .module('adminApp')
    .controller('pageHeaderCtrl', pageHeaderCtrl);

  pageHeaderCtrl.$inject = ['$location', 'authentication'];
  function pageHeaderCtrl($location, authentication) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function() {
      authentication.logout();
      $location.path('/');
    };

  }
})();