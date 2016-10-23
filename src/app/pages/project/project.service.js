(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('ProjectService', ProjectService);

 ProjectService.$inject = ['$resource', 'CommonConstant', 'StorageService'];

 function ProjectService ($resource, CommonConstant, StorageService) {
   var ProjectServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/projects/:id/:operation', {
     id: '@id',
     operation: '@operation'
   },
   {
       getProjects: {
         method: 'GET',
         params: {
           operation: "me"
         },
         headers: {"token": StorageService.getToken()},
         isArray: true
       },
       createProject: {
         method: 'POST'
       },
       updateProject: {
         method: 'PUT'
       }

   }

 );

   return ProjectServiceResource;
 }

})();
