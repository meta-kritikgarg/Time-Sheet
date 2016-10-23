(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TaskService', TaskService);

 TaskService.$inject = ['$resource', 'CommonConstant'];

 function TaskService ($resource, CommonConstant) {

  //  /api/v1/tasks
  //  /getUser/{id}
  //  /getUser/{id}/{date}
   var TaskServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/tasks/getUser/:id/:date/:operation', {
     id: '@id',
     date: '@date',
     operation: '@operation'
   }, {
       getTodo: {
         method: 'GET',
         isArray: true
       },
       addTodo: {
         method: 'POST'
       }

   });

   return TaskServiceResource;
 }

})();
