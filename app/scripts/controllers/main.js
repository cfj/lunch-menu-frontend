'use strict';

angular.module('lunchFrontendApp').controller('MainCtrl', function (menuService) {
    var vm = this;
    var today = new Date().getDay() - 1;
    var todaysMenu = [];

    menuService.getMenus().then(function (response) {
        var menus = response.data;

        angular.forEach(Object.getOwnPropertyNames(menus), function (name) {
            todaysMenu.push({
                restaurant: name,
                dish: menus[name][today]
            });
        });

        vm.todaysMenu = todaysMenu;
    });
});