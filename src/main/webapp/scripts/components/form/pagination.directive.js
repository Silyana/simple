/* globals $ */
'use strict';

angular.module('simpleApp')
    .directive('simpleAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
