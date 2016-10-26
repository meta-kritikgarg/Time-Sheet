(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('ProjectController', ProjectController);

    ProjectController.$inject = ['ProjectService', '$scope', '$filter', 'editableOptions', 'editableThemes','ProjectList'];

    function ProjectController(ProjectService, $scope, $filter, editableOptions, editableThemes,ProjectList) {

      console.log(ProjectService.getProjects());
      console.log(ProjectService.get({id:4}));
      // console.log(ProjectService.get({id:4}));

      var ProjectVM = this;

      ProjectVM.projects =ProjectList;

      console.info(ProjectVM.users);

      ProjectVM.addProject = addProject;
      ProjectVM.createProject = createProject;

      function addProject() {
        ProjectVM.inserted = {
            name: '',
            description: ''
          };
          ProjectVM.projects.push(ProjectVM.inserted);
      }

      $scope.a = function(data){
        console.info(data);
      }

      function createProject(project) {
        console.info(project);
        if (project.id) {
          ProjectService.updateProject(project);
        }else{
          ProjectService.createProject(project);
        }
      }
    //
    // $scope.addProject = function() {
    //   $scope.inserted = {
    //       id: ProjectVM.users.length+1,
    //       name: '',
    //       description: ''
    //     };
    //     ProjectVM.users.push($scope.inserted);
    //   };

      editableOptions.theme = 'bs3';
      editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
      editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


    }
})();
