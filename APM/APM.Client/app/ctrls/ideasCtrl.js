
(function () {
    "use strict";
    angular.module('app')
        .controller('IdeasCtrl', ['$scope', 'ideaResource', 'ideas', function ($scope, ideaResource, ideas) {
            var model = this;
            model.ideas = ideas;

            //ideaResource.query(function (data) {
            //    model.ideas = data;
            //});
        }]);
}());
