(function () {
  'use strict';

  angular.module('BlurAdmin.pages.project', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('project', {
          url: '/project',
          templateUrl : 'app/pages/project/views/project-list.html',
          controller: 'ProjectController as ProjectVM',
          title: 'Project',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
  }
})();
