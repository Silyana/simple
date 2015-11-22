'use strict';

angular.module('simpleApp')
    .controller('ModalController', function($scope, $translate, AlertService) {

        AlertService.success("This is a success message, it is green");

        AlertService.info("This is an info message, it is blue");

        AlertService.warning("This is a warning message, it is amber");

        AlertService.error("This is an error message, it is red");

        AlertService.clear();  // clear all alerts

        AlertService.get(); // get all open alerts

    });
