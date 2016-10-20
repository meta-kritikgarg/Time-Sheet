(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('TimeSheetController', TimeSheetController);

    TimeSheetController.$inject = ['TimeSheetService','$scope'];

    function TimeSheetController (TimeSheetService,$scope) {
    //  console.info(TimeSheetService.getTimeSheet());
    //  console.info(TimeSheetService.get({id: 5}));
      // var TimeSheetData = {
      //   name: 'abc', description: 'asdasdasdadasd', address: 'asdasdasdasd', contactEmail: 'asdasd@asdasd.com'
      // };
//declering TimeSheet view model
       var TimeSheetVM = this;
       TimeSheetVM.TimeSheet={};
        console.info(TimeSheetService.get({id: 1}));
        console.info(TimeSheetService.getTimeSheets());

       TimeSheetVM.addTimeSheet = addTimeSheet;

       function addTimeSheet() {
         console.log(TimeSheetVM.TimeSheet);
          TimeSheetService.addTimeSheet(TimeSheetVM.TimeSheet);
       }

      //console.info(TimeSheetService.addTimeSheet(TimeSheetData));
    }
})();
