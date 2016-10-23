(function() {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthController', AuthController);

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
      isTokenValid(token)

    //  $state.go("/dashboard");
      // else redirect to index page, after removing the token in query.

    }

    function isTokenValid(token) {
      AuthService.validateToken(token, function (resp){
        //console.log(resp);
        console.log(angular.isDefined(resp.accessToken)+"fjhuh"+angular.isDefined(resp.name));
        // Validate Token
        // if successfull, go to dashboard
        console.log("token"+ isTokenValid(token));
        if(angular.isDefined(resp.name)&&angular.isDefined(resp.accessToken)){
          //save data in storage
          StorageService.setUserData(resp.name);
          StorageService.setToken(resp.accessToken);
          StorageService.setToken(resp.accessToken);
          //console.log("valid"+valid);
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
