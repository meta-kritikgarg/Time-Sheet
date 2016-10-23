(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TimeSheetService', TimeSheetService);

 TimeSheetService.$inject = ['$resource', 'CommonConstant'];

 function TimeSheetService ($resource, CommonConstant) {
   //ToDo:
   var TimeSheetServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/TimeSheets/:id/:operation', {
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
