/* globals $ */
'use strict';

angular.module('simpleApp')
    .directive('simpleAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
