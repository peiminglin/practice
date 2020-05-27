(function () {
    'use strict';

    angular.module('app')
        .controller('TestCtrl', ['$scope', function ($scope) {
            var model = this;
            model.message = 'hahatest';
        }]);
}());