(function () {
    'use strict';

    angular
        .module('app')
        .controller('IdeaFormCtrl', ['ideaResource', '$stateParams', '$state', '$log', function (ideaResource, $stateParams, $state, $log) {
            var model = this;
            model.idea = new ideaResource();
            //model.idea = { id: $stateParams.id };
            //ideaResource.get({ id: $stateParams.id }, function (data) {
            //    model.idea = data;
            //});

            model.submit = function () {
                model.idea.tags = model.tagstring.split(' ');
                model.idea.$save().then(function () {
                    $state.go('ideas');
                });
            }

            model.cancel = function () {
                $state.go('ideas');
            }
        }]);
}());