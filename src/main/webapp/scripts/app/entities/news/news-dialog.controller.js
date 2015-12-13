'use strict';

angular.module('simpleApp').controller('NewsDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'News',
        function($scope, $stateParams, $modalInstance, entity, News) {

        $scope.news = entity;
        $scope.load = function(id) {
            News.get({id : id}, function(result) {
                $scope.news = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('simpleApp:newsUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.news.id != null) {
                News.update($scope.news, onSaveSuccess, onSaveError);
            } else {
                News.save($scope.news, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
