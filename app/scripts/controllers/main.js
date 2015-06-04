'use strict';

angular.module('lunchFrontendApp').controller('MainCtrl', function (menuService) {
    var vm = this;
    var today = new Date().getDay() - 1;
    var isWeekend = today > 4;

    vm.isLoaded = false;
    vm.isWeekend = isWeekend;

    function getTodaysMenu (data) {
        var restaurants = data.data;
        var todaysMenu = [];
        
        Object.getOwnPropertyNames(restaurants).forEach(function (name) {
            todaysMenu.push({
                restaurant: name,
                dish: restaurants[name].menu[today],
                url: restaurants[name].url
            });
        });

        return todaysMenu;
    }

    function populateViewModel (menu) {
        vm.isLoaded = true;
        vm.todaysMenu = menu;
    }

    if(!isWeekend) {
        menuService.getMenus()
        .then(getTodaysMenu)
        .then(populateViewModel)
        .catch(console.log.bind(console));
    }
});