(function(){
    angular.module('app', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: 'templates/home.html'
                })
                .when('/page', {
                    controller: 'PageController',
                    controllerAs: 'page',
                    templateUrl: 'templates/page.html'
                })
                .otherwise('/')
                ;
        }]);
}());