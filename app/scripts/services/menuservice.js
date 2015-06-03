'use strict';

angular.module('lunchFrontendApp').factory('menuService', function ($http) {
    var apiUrl = 'http://localhost:8081'

    return {
        getMenus: function () {
            return $http.get(apiUrl + '/api/menus');
        }
    };
});