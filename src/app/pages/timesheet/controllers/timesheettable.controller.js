(function () {
  'use strict';

  angular.module('BlurAdmin')
      .controller('TimeSheetTableController', TimeSheetTableController);

  /** @ngInject */
  TimeSheetTableController.$inject = ['$scope', '$filter', 'editableOptions', 'editableThemes','TimeSheetService'];

  function TimeSheetTableController($scope, $filter, editableOptions, editableThemes,TimeSheetService) {
    TimeSheetService.getTimeSheet(function (resp) {
      $scope.timesheetdata = formatTimeSheetData(resp);
    }, function(badResp){
      console.info(badResp);
    });

    function formatTimeSheetData(timeSheetData) {
      var taskDates = [];
      var tempTasks = [];
      timeSheetData = $filter('orderBy')(timeSheetData, function(a){return a.taskDurationModel[0].date;}, false);
      for (var i = 0; i < timeSheetData.length; i++) {
        angular.copy(timeSheetData[i].taskDurationModel[0].date, taskDates[i]);
        timeSheetData[i].taskDurationModel[0].date = moment(timeSheetData[i].taskDurationModel[0].date).format("MMM Do YYYY");
        tempTasks[i]={data: timeSheetData[i], date: taskDates[i]};
      }
      return tempTasks;
    }
  }

})();
