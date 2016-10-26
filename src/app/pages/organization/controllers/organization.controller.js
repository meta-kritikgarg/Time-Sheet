(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService','$scope'];

    function OrganizationController (OrganizationService,$scope) {
      //declaring organization view model
       var organizationVM = this;
       organizationVM.organization={};

       organizationVM.addOrganization = addOrganization;

       function addOrganization() {
          OrganizationService.addOrganization(organizationVM.organization);
       }

    }
})();
