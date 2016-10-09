(function() {

    angular
        .module('adminApp')
        .directive('iboxTools', iboxTools);

    iboxTools.$inject = ['$timeout'];

    function iboxTools($timeout) {
        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'common/directives/iboxTools/iboxTools.html',
            controller: function(scope, element) {
                // Function for collapse ibox
                scope.showhide = function() {
                    var ibox = element.closest('div.ibox');
                    var icon = element.find('i:first');
                    var content = ibox.find('div.ibox-content');
                    content.slideToggle(200);
                    // Toggle icon from up to down
                    icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                    ibox.toggleClass('').toggleClass('border-bottom');
                    $timeout(function() {
                        ibox.resize();
                        ibox.find('[id^=map-]').resize();
                    }, 50);
                };
                // Function for close ibox
                scope.closebox = function() {
                    var ibox = element.closest('div.ibox');
                    ibox.remove();
                }
            }
        };
    }

})();