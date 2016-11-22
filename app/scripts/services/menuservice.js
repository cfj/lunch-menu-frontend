'use strict';

angular.module('lunchFrontendApp').factory('menuService', function ($http) {
    var jsonUrl = 'https://s3.eu-central-1.amazonaws.com/lunch-menu-api.cfj/menus.json';

    return {
        getMenus: function () {
            return $http.get(jsonUrl);
        }
    };
});
