(function() {
 'use strict';
 angular.module('BlurAdmin').factory ('OrganizationService', OrganizationService);

 OrganizationService.$inject = ['$resource', 'CommonConstant'];

 function OrganizationService ($resource, CommonConstant) {
   var OrganizationServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/api/v1/organizations/:id/:operation', {
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
