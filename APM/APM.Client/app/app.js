(function () {
    'use strict';
    angular.module('app', ['ui.router', 'common.services'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HomeCtrl',
                    controllerAs: 'home',
                    templateUrl: '/app/views/home.html'
                })
                .state('test', {
                    url: '/test',
                    controller: 'TestCtrl',
                    controllerAs: 'test',
                    templateUrl: '/app/views/testView.html'
                })
                .state('products', {
                    url: '/products',
                    controller: 'ProductListCtrl',
                    controllerAs: 'products',
                    templateUrl: '/app/views/productListView.html'
                })
                .state('ideas', {
                    url: '/ideas',
                    controller: 'IdeasCtrl',
                    controllerAs: 'ideas',
                    templateUrl: '/app/views/ideasView.html',
                    resolve: {
                        ideas: function (ideaResource) {
                            return ideaResource.get();
                        }
                    }
                })
                .state('ideaForm', {
                    url: '/ideaForm/:id',
                    controller: 'IdeaFormCtrl',
                    controllerAs: 'ideaForm',
                    templateUrl: '/app/views/ideaFormView.html'
                })
                ;
        }]);
}());