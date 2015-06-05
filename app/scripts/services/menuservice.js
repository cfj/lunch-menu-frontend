'use strict';

angular.module('lunchFrontendApp').factory('menuService', function ($http) {
    var apiUrl = 'https://mysterious-wave-8770.herokuapp.com'

    return {
        getMenus: function () {
            return $http.get(apiUrl + '/api/menus');
        }
    };
});