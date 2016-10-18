

angular.module('BlurAdmin',[])
.controller('loginController',loginController);

//loginController.$inject = ['LoginService'];

function loginController() {
    console.log("login controller");
  window.onSignIn = LoginService.onSignIn;
}
