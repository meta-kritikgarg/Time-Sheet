(function () {
  'use strict';

  angular.module('BlurAdmin.pages.timesheet', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('timesheet', {
          url: '/timesheet',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'TimeSheet',
          sidebarMeta: {
            icon: 'ion-clock',
            order: 250,
          },
        })
        .state('timesheet.my', {
          url: '/my',
          templateUrl: 'app/pages/timesheet/views/timesheet.html',
          resolve: {
            TimeSheetData: function(TimeSheetService) {
              return TimeSheetService.getTimeSheet();
            }
          },
          controller: 'TimeSheetController',
          title: 'My Timesheet',
          sidebarMeta: {
            order: 0,
          },
        })
  }
})();
