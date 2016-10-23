(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('TaskListController', TaskListController);

    TaskListController.$inject = ['ProjectService', '$scope', '$filter', 'editableOptions', 'editableThemes'];

    function TaskListController(ProjectService, $scope, $filter, editableOptions, editableThemes) {

        var TaskListVM = this;

      TaskListVM.users = [
        {
          "id": 1,
          "name": "Esther Vang",
        "description":"dsfgfwghgdjuwh"
        },
        {
          "id": 2,
          "name": "Leah Freeman",
          "description":"dsfgfwghgdjuwh"
        },
        {
          "id": 3,
          "name": "Mathews Simpson",
          "description":"dsfgfwghgdjuwh"
        },
        {
          "id": 4,
          "name": "Buckley Hopkins",
          "description":"dsfgfwghgdjuwh"
        }
       ];

      $scope.addUser = function() {
      $scope.inserted = {
          id: TaskListVM.users.length+1,
          name: '',
          description: ''
        };
        TaskListVM.users.push($scope.inserted);
      };

      editableOptions.theme = 'bs3';
      editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
      editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


    }
})();
