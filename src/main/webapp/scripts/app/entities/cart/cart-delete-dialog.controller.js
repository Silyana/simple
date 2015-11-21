'use strict';

angular.module('simpleApp')
	.controller('CartDeleteController', function($scope, $modalInstance, entity, Cart) {

        $scope.cart = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Cart.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });