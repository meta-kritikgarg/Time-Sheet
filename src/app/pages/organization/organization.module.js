(function () {
  'use strict';

  angular.module('BlurAdmin.pages.organization', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('organization', {
          url: '/organization',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Organization',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('organization.new', {
          url: '/new',
          templateUrl: 'app/pages/organization/views/new-organization.html',
          controller: 'OrganizationController as organizationVM',
          title: 'Add organization',
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
