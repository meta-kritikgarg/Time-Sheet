(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TimeSheetService', TimeSheetService);

 TimeSheetService.$inject = ['$resource'];

 function TimeSheetService ($resource) {
   //ToDo:
   var TimeSheetServiceResource = $resource('http://localhost:8080/TimeSheet/api/v1/TimeSheets/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getTimeSheets: {
         method: 'GET',
         isArray: true,
         params: {
           operation: 'list'
         }
       },
       addTimeSheet: {
         method: 'POST'
       }

   });

   return TimeSheetServiceResource;
 }

})();
