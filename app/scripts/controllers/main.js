'use strict';

angular.module('lunchFrontendApp').controller('MainCtrl', function (menuService) {
    var vm = this;
    var today = new Date().getDay() - 1;
    var todaysMenu = [];
    var isWeekend = today > 4;

    vm.isLoaded = false;
    vm.isWeekend = isWeekend;

    if(!isWeekend) {
        menuService.getMenus().then(function (response) {
            var menus = response.data;

            angular.forEach(Object.getOwnPropertyNames(menus), function (name) {
                todaysMenu.push({
                    restaurant: name,
                    dish: menus[name][today]
                });
            });

            vm.isLoaded = true;
            vm.todaysMenu = todaysMenu;
        });
    }
});