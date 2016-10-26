(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('TimeSheetController', TimeSheetController);

    TimeSheetController.$inject = ['TimeSheetService','$scope'];

    function TimeSheetController (TimeSheetService,$scope) {
      //declaring TimeSheet view model
       var TimeSheetVM = this;
       TimeSheetVM.TimeSheet={};

       TimeSheetVM.addTimeSheet = addTimeSheet;
    }
})();
