'use strict';

angular.module('simpleApp')
    .controller('CartController', function ($scope, $state, $modal, Cart) {
      
        $scope.carts = [];
        $scope.loadAll = function() {
            Cart.query(function(result) {
               $scope.carts = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.cart = {
                id: null
            };
        };
    });
