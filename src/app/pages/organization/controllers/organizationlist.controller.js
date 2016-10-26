(function() {
  'use strict';

  angular.module('BlurAdmin').controller ('OrganizationListController', OrganizationListController);

  OrganizationListController.$inject = ['OrganizationService','$scope'];

  function OrganizationListController (OrganizationService,$scope) {
    //declaring organization view model
     var organizationListVM = this;
     organizationListVM.organizations=OrganizationService.getOrganizations();
  }

}());
