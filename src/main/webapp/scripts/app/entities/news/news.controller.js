'use strict';

angular.module('simpleApp')
    .controller('NewsController', function ($scope, $state, $modal, News) {

        $scope.newss = [];
        $scope.loadAll = function() {
            News.query(function(result) {
               $scope.newss = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.news = {
                text: null,
                id: null
            };
        };
    });
