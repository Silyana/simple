'use strict';

angular.module('simpleApp')
    .controller('NewsDetailController', function ($scope, $rootScope, $stateParams, entity, News) {
        $scope.news = entity;
        $scope.load = function (id) {
            News.get({id: id}, function(result) {
                $scope.news = result;
            });
        };
        var unsubscribe = $rootScope.$on('simpleApp:newsUpdate', function(event, result) {
            $scope.news = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
