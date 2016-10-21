(function() {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('SignoutController', SignoutController);



SignoutController.$inject=['$scope', '$stateParams','$state', 'StorageService','$location'];
function SignoutController($scope, $stateParams,$state, StorageService,$location){
  signout();
  function signout(){
    StorageService.clearAll();
    console.log("signout is called");
    $state.go('auth1');
  }

}


}());
