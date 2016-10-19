(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('OrganizationService', OrganizationService);

 OrganizationService.$inject = ['$resource'];

 function OrganizationService ($resource) {
   var OrganizationServiceResource = $resource('http://localhost:8080/timesheet/api/v1/organizations/:id/:operation', {
     id: '@id',
     operation: '@operation'
   }, {
       getOrganization: {
         method: 'GET'
       },
       addOrganization: {
         method: 'POST'
       }

   });

   return OrganizationServiceResource;
 }

})();
