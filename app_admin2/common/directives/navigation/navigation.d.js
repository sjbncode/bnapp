(function() {

    angular
        .module('adminApp')
        .directive('sideNavigation', sidenavigation)
        .directive('leftnavigation', leftnavigation)
        .directive('minimalizaSidebar', minimalizaSidebar);

    sidenavigation.$inject = ['$timeout'];
    minimalizaSidebar.$inject = ['$timeout'];

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

    function leftnavigation() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.html',
            controller: 'navigationCtrl as phvm',
        };
    }

    /**
     * minimalizaSidebar - Directive for minimalize sidebar
     */
    function minimalizaSidebar($timeout) {
        return {
            restrict: 'A',
            template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
            link: function(scope, element) {
                scope.minimalize = function() {
                    $("body").toggleClass("mini-navbar");
                    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                        // Hide menu in order to smoothly turn on when maximize menu
                        $('#side-menu').hide();
                        // For smoothly turn on menu
                        setTimeout(
                            function() {
                                $('#side-menu').fadeIn(400);
                            }, 200);
                    } else if ($('body').hasClass('fixed-sidebar')) {
                        $('#side-menu').hide();
                        setTimeout(
                            function() {
                                $('#side-menu').fadeIn(400);
                            }, 100);
                    } else {
                        // Remove all inline style from jquery fadeIn function to reset menu state
                        $('#side-menu').removeAttr('style');
                    }
                }
            }
        };
    };


})();