(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TaskService', TaskService);

 TaskService.$inject = ['$resource', 'CommonConstant'];

 function TaskService ($resource, CommonConstant) {

  //  /api/v1/tasks
  //  /getUser/{id}
  //  /getUser/{id}/{date}
   var TaskServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/tasks/:operation/:id/:date', {
     id: '@id',
     date: '@date',
     operation: '@operation'
   }, {
       getTasks: {
         method: 'GET',
         isArray: true,
           params: {
               operation: 'me'
           }
       },
       addTodo: {
         method: 'POST'
       }

   });

   return TaskServiceResource;
 }

})();
