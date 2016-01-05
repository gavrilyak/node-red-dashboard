/* global angular */
angular.module('ui').directive('uiIcon',
    function () {
        var url = /^https?:\/\//i;
        var fa = /^fa-/i;
        return {
            restrict: 'E',
            templateUrl: 'templates/ui-icon.html',
            scope: {
                icon: '@'
            },
            //replace: true,
            link: function (scope, element, attributes, ctrl) {
                scope.$watch('icon', function (newValue) {
                    if (url.test(newValue)) {
                        scope.iconType = 'image';
                        scope.url = newValue;
                    } else if (fa.test(newValue)) {
                        scope.iconType = 'fa';
                    } else {
                        scope.iconType = 'angular-material';
                    }
                });
            }
        };
    });