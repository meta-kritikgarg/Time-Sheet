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

  function getQueryStringValue (key) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  function signout(){
    console.log("signout is called");
  }

   var token = getQueryStringValue("token");
  // StorageService.setToken("sadsadsadsad");
  // console.log(StorageService.getToken());

// Would write the value of the QueryString-variable called name to the console
    // console.log(token);
    $scope.isLoggedIn = StorageService.isUserLoggedIn();
    if (token != null && token != undefined && token != '') {

      //console.log(isTokenValid(token));

      // Validate Token
      // if successfull, go to dashboard
      console.log("token"+ isTokenValid(token));
      if (isTokenValid(token)) {
        console.log("going to dashboard, setting isLoggedIn true");
        $scope.isLoggedIn = true;
        window.location.href='http://localhost:3000/#/dashboard';
         $state.go('dashboard');
      }else {
          console.log("going to index");
          $scope.isLoggedIn = false;
          // StorageService.clearAll();
          //window.location.href='http://localhost:3000/index.html';
          //$location.url('http://localhost:3000/index.html');
      }
    //  $state.go("/dashboard");
      // else redirect to index page, after removing the token in query.

    }

    function isTokenValid(token) {
      $scope.valid=false;
      AuthService.validateToken(token, function (resp){
        //console.log(resp);
        console.log(angular.isDefined(resp.accessToken)+"fjhuh"+angular.isDefined(resp.name));
        if(angular.isDefined(resp.name)&&angular.isDefined(resp.accessToken)){
          //save data in storage
          StorageService.setUserData(resp.name);
          StorageService.setToken(resp.accessToken);
          $scope.valid= true;
          //console.log("valid"+valid);

        }
      }, function (badResp){
        console.log(badResp);
      })
      return $scope.valid;
    }

    function getPathFromUrl(url) {
      return url.split("?")[0];
    }

    // localStorage.setItem("token", $scope.data);
    // console.log(CommonService.setUserData($scope.data));
 }

}());
