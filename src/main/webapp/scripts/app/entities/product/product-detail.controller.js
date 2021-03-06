'use strict';

angular.module('simpleApp')
    .controller('ProductDetailController', function ($scope, $rootScope, $stateParams, entity, Product, Cart) {
        $scope.product = entity;
        $scope.load = function (id) {
            Product.get({id: id}, function(result) {
                $scope.product = result;
            });
        };
        var unsubscribe = $rootScope.$on('simpleApp:productUpdate', function(event, result) {
            $scope.product = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
