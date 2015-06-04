'use strict';

angular.module('lunchFrontendApp').factory('menuService', function ($http) {
    var apiUrl = 'http://localhost:8080'

    return {
        getMenus: function () {
            return $http.get(apiUrl + '/api/menus');
        }
    };
});