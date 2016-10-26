(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('TaskListController', TaskListController);

    TaskListController.$inject = ['ProjectService', '$scope', '$filter', 'editableOptions', 'editableThemes', 'TaskService'];

    function TaskListController(ProjectService, $scope, $filter, editableOptions, editableThemes, TaskService) {

        var TaskListVM = this;

        TaskListVM.saveTask = saveTask;

        var d = moment();
        d.set({'hours':0, 'minutes':0, 'seconds':0});

        TaskService.getTasks({operation1: d.valueOf()}, function(resp){
          for (var i = 0; i < resp.length; i++) {
            $scope.taskList.push(resp[i]);
            $scope.taskList[i].duration = $scope.taskList[i].taskDurationModel[0].duration;
          }
        }, function(badResp) {
          console.info(badResp);
        });

        $scope.showStatus = showStatus;

        $scope.statuses = [
            {value: 0, text: 'Due'},
            {value: 1, text: 'Done'},
            {value: 2, text: 'Postpone'},
        ];

      $scope.addTask = function() {
      $scope.inserted = {
          id: $scope.taskList.length+1,
          description: '',
          subTask: null,
          duration: 0,
          status : 0,
          priority: 2
        };
        $scope.taskList.push($scope.inserted);
      };


      function saveTask(task) {
        task.date = $scope.currentSelectedDate.valueOf();
        console.info(task);
        TaskService.addTodo(task);
      }

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
