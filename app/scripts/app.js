'use strict';

angular
    .module('lunchFrontendApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);