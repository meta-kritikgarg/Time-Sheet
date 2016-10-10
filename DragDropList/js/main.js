angular.module("demo",["ui.router","dndLists"])
.config(function($stateProvider, $urlRouterProvider) {

    // for default and wrong states
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES
        .state('home', {
            url: '/home',
            templateUrl: '/partial/home.html'
        })

        .state('multi', {
          url: '/multi.html',
        templateUrl: '/partial/multi.html'
        })
});
