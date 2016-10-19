(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('TodoService', TodoService);

 TodoService.$inject = ['$resource'];

 function TodoService ($resource) {
   var TodoServiceResource = $resource('http://localhost:8080/timesheet/api/v1/tasks/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getTodo: {
         method: 'GET'
       },
       addTodo: {
         method: 'POST'
       }

   });

   return TodoServiceResource;
 }

})();
