'use strict';

angular
    .module('lunchFrontendApp', ['ngRoute', 'ngSanitize'])
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