(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('TaskListController', TaskListController);

    TaskListController.$inject = ['ProjectService', '$scope', '$filter', 'editableOptions', 'editableThemes'];

    function TaskListController(ProjectService, $scope, $filter, editableOptions, editableThemes) {

        var TaskListVM = this;

      TaskListVM.tasks = [
          {
              "id": 5,
              "description": "meeting with mentor",
              "createdBy": 5,
              "createdDate": 1476037800000,
              "subTask": null,
              "repeatFrequency": 365,
              "status": 0,
              "priority": 2
          },

          {
              "id": 6,
              "description": "assignmrnt",
              "createdBy": 5,
              "createdDate": 1476037800000,
              "subTask": null,
              "repeatFrequency": 365,
              "status": 1,
              "priority": 2
          }

       ];

        $scope.showStatus = showStatus;

        $scope.statuses = [
            {value: 0, text: 'Due'},
            {value: 1, text: 'Done'},
            {value: 2, text: 'Postpone'},
        ];

      $scope.addUser = function() {
      $scope.inserted = {
          id: TaskListVM.tasks.length+1,
          name: '',
          description: '',
          subTask: null,
          repeatFrequency: 0,
          status : 0,
          priority: 2
        };
        TaskListVM.tasks.push($scope.inserted);
      };

      editableOptions.theme = 'bs3';
      editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
      editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

        function  showStatus(task) {
            var selected = [];
            if(task.status) {
                selected = $filter('filter')($scope.statuses, {value: task.status});
            }
            //console.log(selected);
            return selected.length ? selected[0].text : 'Due';
        };

    }
})();
