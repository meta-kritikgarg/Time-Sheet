// (function() {
//  'use strict';
//  angular.module('BlurAdmin').factory ('TodoService', TodoService);
//
//  TodoService.$inject = ['$resource'];
//
//  function TodoService ($resource) {
//
//   //  /api/v1/tasks
//   //  /getUser/{id}
//   //  /getUser/{id}/{date}
//    var TodoServiceResource = $resource('http://localhost:8080/TimeSheet/api/v1/tasks/getUser/:id/:date/:operation', {
//      id: '@id',
//      date: '@date',
//      operation: '@operation'
//    }, {
//        getTodo: {
//          method: 'GET',
//          isArray: true
//        },
//        addTodo: {
//          method: 'POST'
//        }
//
//    });
//
//    return TodoServiceResource;
//  }
//
// })();
