(function () {
  'use strict';

  angular.module('BlurAdmin.pages.project', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('project', {
          url: '/project',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Project',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('project.new', {
          url: '/new',
          templateUrl: 'app/pages/project/views/new-project.html',
          title: 'Add Project',
          sidebarMeta: {
            order: 0,
          },
        })
  }
})();
