(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', ['dndLists','ngResource'])
      .config(routeConfig);


  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          controller: function ($scope) {
            $scope.taskList = [];
              $scope.currentSelectedDate = null;
            $scope.display = function(value, currentSelectedDate){
              $scope.taskList = value;
                $scope.currentSelectedDate = currentSelectedDate;
            }
          },
          authRequired: true,
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
