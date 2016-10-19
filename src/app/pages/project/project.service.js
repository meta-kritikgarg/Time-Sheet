(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('ProjectService', ProjectService);

 ProjectService.$inject = ['$resource'];

 function ProjectService ($resource) {
   var ProjectServiceResource = $resource('http://localhost:8080/timesheet/api/v1/projects/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getProject: {
         method: 'GET'
       },
       addProject: {
         method: 'POST'
       }

   });

   return ProjectServiceResource;
 }

})();
