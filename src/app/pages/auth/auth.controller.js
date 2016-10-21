(function() {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthController', AuthController)
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

AuthController.$inject=['$scope', '$stateParams','$state','AuthService', 'StorageService','$location'];
function AuthController($scope, $stateParams,$state,AuthService, StorageService,$location){

  $scope.isLoggedIn = false;

  function getQueryStringValue (key) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

   var token = getQueryStringValue("token");
  // StorageService.setToken("sadsadsadsad");
  // console.log(StorageService.getToken());

// Would write the value of the QueryString-variable called name to the console
    // console.log(token);

    if (token != null && token != undefined && token != '') {

      isTokenValid(token);
      // Validate Token
      // if successfull, go to dashboard
      if (false) {
        console.log("going to dashboard");
         $state.go('dashboard');
         $scope.isLoggedIn = true;
      }else {
          console.log("going to index");
          $scope.isLoggedIn = false;
          StorageService.clearAll();
          window.location.href='http://localhost:3000/index.html';
          //$location.url('http://localhost:3000/index.html');
      }
    //  $state.go("/dashboard");
      // else redirect to index page, after removing the token in query.

    }

    function isTokenValid(token) {
      AuthService.validateToken({token:token}, function (resp){
        console.log(resp);
      }, function (badResp){
        console.log(badResp);
      })
    }

    function getPathFromUrl(url) {
      return url.split("?")[0];
    }

    // localStorage.setItem("token", $scope.data);
    // console.log(CommonService.setUserData($scope.data));
 }

}());
