(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService','$scope'];

    function OrganizationController (OrganizationService,$scope) {
    //  console.info(OrganizationService.getOrganization());
    //  console.info(OrganizationService.get({id: 5}));
      // var organizationData = {
      //   name: 'abc', description: 'asdasdasdadasd', address: 'asdasdasdasd', contactEmail: 'asdasd@asdasd.com'
      // };
//declering organization view model
       var organizationVM = this;
       organizationVM.organization={};
        console.info(OrganizationService.get({id: 1}));
        console.info(OrganizationService.getOrganizations());

       organizationVM.addOrganization = addOrganization;

       function addOrganization() {
         console.log(organizationVM.organization);
          OrganizationService.addOrganization(organizationVM.organization);
       }

      //console.info(OrganizationService.addOrganization(organizationData));
    }
})();
