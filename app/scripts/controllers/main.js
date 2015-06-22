'use strict';

angular.module('lunchFrontendApp').controller('MainCtrl', function (menuService) {
    var vm = this;
    var today = new Date().getDay() - 1;
    var isWeekend = today > 4 || today <= -1;

    vm.isLoaded = false;
    vm.isWeekend = isWeekend;
    vm.today = today;

    function getWeeklyMenu (data) {
        var restaurants = data.data.restaurants;
        var lastUpdated = data.data.updated;
        var weeklyMenu = [];

        Object.getOwnPropertyNames(restaurants).forEach(function (name) {
            weeklyMenu.push({
                restaurant: name,
                menu: restaurants[name].menu,
                url: restaurants[name].url
            });
        });

        return {
            weeklyMenu: weeklyMenu,
            lastUpdated: lastUpdated
        };
    }

    function populateViewModel (data) {
        vm.isLoaded = true;
        vm.weeklyMenu = data.weeklyMenu;
        vm.lastUpdated = data.lastUpdated;
    }

    if(!isWeekend) {
        menuService.getMenus()
        .then(getWeeklyMenu)
        .then(populateViewModel)
        .catch(console.log.bind(console));
    }
});