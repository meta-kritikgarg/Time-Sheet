(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('OrganizationService', OrganizationService);

 OrganizationService.$inject = ['$resource'];

 function OrganizationService ($resource) {
   var OrganizationServiceResource = $resource('http://localhost:8080/TimeSheet/api/v1/organizations/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getOrganizations: {
         method: 'GET',
         isArray: true,
         params: {
           operation: 'list'
         }
       },
       addOrganization: {
         method: 'POST'
       }

   });

   return OrganizationServiceResource;
 }

})();
