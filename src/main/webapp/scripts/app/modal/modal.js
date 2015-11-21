'use strict';

angular.module('simpleApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('modal', {
                parent: 'site',
                url: '/modal',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/modal/modal.html',
                        //controller: 'MainController'
                    }
                }
            });
    });
