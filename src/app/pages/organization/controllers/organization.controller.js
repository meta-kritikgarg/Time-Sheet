(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService'];

    function OrganizationController (OrganizationService) {
      console.info(OrganizationService.get());
      console.info(OrganizationService.get({id: 5}));
      var organizationData = {
        name: 'abc', description: 'asdasdasdadasd', address: 'asdasdasdasd', contactEmail: 'asdasd@asdasd.com'
      };

      console.info(OrganizationService.addOrganization(organizationData));
    }
})();
