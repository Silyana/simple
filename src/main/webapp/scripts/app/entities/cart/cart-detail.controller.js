'use strict';

angular.module('simpleApp')
    .controller('CartDetailController', function ($scope, $rootScope, $stateParams, entity, Cart, User, Product) {
        $scope.cart = entity;
        $scope.load = function (id) {
            Cart.get({id: id}, function(result) {
                $scope.cart = result;
            });
        };
        var unsubscribe = $rootScope.$on('simpleApp:cartUpdate', function(event, result) {
            $scope.cart = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
