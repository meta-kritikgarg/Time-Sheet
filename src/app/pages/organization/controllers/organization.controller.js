(function() {
 'use strict';
    angular.module('BlurAdmin').controller ('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService'];

    function OrganizationController (OrganizationService) {
      console.info(OrganizationService.get());
      console.info(OrganizationService.get({id: 5}));
      var organizationData = {
        name: 'abc', description: 'asdasdasdadasd', addressLine1: 'asdasdasdasd', addressLine2: 'asdasdasda', contactEmail: 'asdasd@asdasd.com'
      };

      console.info(OrganizationService.create(organizationData));
    }
})();
