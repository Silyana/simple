'use strict';

angular.module('simpleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


