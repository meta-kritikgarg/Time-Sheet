(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('ProjectService', ProjectService);

 ProjectService.$inject = ['$resource'];

 function ProjectService ($resource) {
   var ProjectServiceResource = $resource('http://localhost:8080/TimeSheet/api/v1/projects/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getProjects: {
         method: 'GET',
         isArray: true
       },
       createProject: {
         method: 'POST'
       },
       updateProject: {
         method: 'PUT'
       }

   });

   return ProjectServiceResource;
 }

})();
