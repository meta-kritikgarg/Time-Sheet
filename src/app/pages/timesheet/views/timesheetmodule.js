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
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('organization.new', {
          url: '/new',
          templateUrl: 'app/pages/timesheet/views/timesheet.html',
          controller: 'TimeSheetController as timesheetVM',
          title: 'View Timesheet',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('organization.list', {
          url: '/list',
          templateUrl: 'app/pages/organization/views/organizationlist.html',
          controller: 'OrganizationListController as organizationListVM',
          title: 'List',
          sidebarMeta: {
            order: 1,
          },
        })
  }
})();
