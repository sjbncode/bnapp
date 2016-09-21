(function() {

    angular
        .module('adminApp')
        .directive('side-navigation', sidenavigation);
    sidenavigation.$inject = ['$timeout']

    function sidenavigation($timeout) {
        return {
            restrict: 'EA',
            link: function(scope, element) {
                // Call the metsiMenu plugin and plug it to sidebar navigation
                $timeout(function() {
                    element.metisMenu();
                });
            }
        };
    };

})();