'use strict';

angular.module('simpleApp')
    .controller('ModalController', function($scope) {
        $scope.click = function() {
            console.log("appel controller click")
            window.alert("Alert");
            window.history.back();
        };
    });
