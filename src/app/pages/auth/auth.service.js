(function() {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .factory ('AuthService', AuthService);

      AuthService.$inject = ['$resource', 'CommonConstant'];

      function AuthService ($resource, CommonConstant) {
        var AuthServiceResource = $resource(CommonConstant.baseUrl+":"+CommonConstant.port+'/validate',{  }, {
            validateToken: {
              method: 'POST',
              isArray: false
            }
        });
        return AuthServiceResource;
      }

}());
