'use strict';

angular.module('simpleApp')
    .controller('ModalController', function($scope, $translate, AlertService) {
        $scope.click = function() {
            console.log("appel controller click")
            AlertService.success("This is a success message, it is green");
            window.history.back();
        };
    });
