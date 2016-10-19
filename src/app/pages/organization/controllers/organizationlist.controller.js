(function() {
  'use strict';

  angular.module('BlurAdmin').controller ('OrganizationListController', OrganizationListController);

  OrganizationListController.$inject = ['OrganizationService','$scope'];

  function OrganizationListController (OrganizationService,$scope) {
  //  console.info(OrganizationService.getOrganization());
  //  console.info(OrganizationService.get({id: 5}));
    // var organizationData = {
    //   name: 'abc', description: 'asdasdasdadasd', address: 'asdasdasdasd', contactEmail: 'asdasd@asdasd.com'
    // };
  //declering organization view model
     var organizationListVM = this;
     organizationListVM.organizations=OrganizationService.getOrganizations();
      console.info(OrganizationService.getOrganizations());
     //
    //  organizationVM.addOrganization = addOrganization;
     //
    //  function addOrganization() {
    //    console.log(organizationVM.organization);
    //     OrganizationService.addOrganization(organizationVM.organization);
    //  }
     //
    //console.info(OrganizationService.addOrganization(organizationData));
  }

}());
