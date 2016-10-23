// (function() {
//  'use strict';
//  angular.module('BlurAdmin').factory ('TodoService', TodoService);
//
//  TodoService.$inject = ['$resource', 'CommonConstant'];
//
//  function TodoService ($resource, CommonConstant) {
//
//   //  /api/v1/tasks
//   //  /getUser/{id}
//   //  /getUser/{id}/{date}
//    var TodoServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/tasks/getUser/:id/:date/:operation', {
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
