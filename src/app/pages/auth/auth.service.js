(function() {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .factory ('AuthService', AuthService);

      AuthService.$inject = ['$resource'];

      function AuthService ($resource) {
        var AuthServiceResource = $resource('http://localhost:8080/TimeSheet/validate/:token',{
          token: '@token'
        }, {
            validateToken: {
              method: 'POST',
              isArray: false
            }
        });
        return AuthServiceResource;
      }

}());
