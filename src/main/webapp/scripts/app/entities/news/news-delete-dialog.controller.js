'use strict';

angular.module('simpleApp')
	.controller('NewsDeleteController', function($scope, $modalInstance, entity, News) {

        $scope.news = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            News.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });