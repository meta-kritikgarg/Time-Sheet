(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('ProjectController', ProjectController);

    ProjectController.$inject = ['ProjectService'];

    function ProjectController (ProjectService) {
      console.info(ProjectService.get());
      console.info(ProjectService.get({id: 5}));
      var ProjectData = {
        name: 'abc', description: 'asdasdasdadasd'
      };

      console.info(ProjectService.addProject(ProjectData));
    }
})();
