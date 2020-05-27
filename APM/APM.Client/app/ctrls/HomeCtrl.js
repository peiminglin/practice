(function () {
    'use strict';

    angular.module('app')
        .controller('HomeCtrl', ['$scope', function ($scope) {
            var model = this;
            model.message = 'haha';
        }]);
}());