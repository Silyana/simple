'use strict';

angular.module('simpleApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('modal', {
                parent: 'site',
                url: '/modal',
                data: {
                    roles: ['ROLE_USER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/modal/modal.html',
                        controller: 'ModalController'
                    }
                }
            });
    });
