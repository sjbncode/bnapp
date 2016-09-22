(function() {
	angular
    .module('adminApp')
    .directive('pageTitle', pageTitle);
	pageTitle.$inject=['$rootScope', '$timeout'];
	function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'BN';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'BN | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};
})();