(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TimeSheetService', TimeSheetService);

 TimeSheetService.$inject = ['$resource', 'CommonConstant'];

 function TimeSheetService ($resource, CommonConstant) {
   //ToDo:
   var TimeSheetServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/timesheets/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getTimeSheet: {
         method: 'GET',
         isArray: true,
         params: {
           operation: 'me'
         }
       }

   });

   return TimeSheetServiceResource;
 }

})();
