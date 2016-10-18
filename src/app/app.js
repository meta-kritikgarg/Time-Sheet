'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]).run(checkAccessOnStateChange);

console.log("app.js is loaded");


function checkAccessOnStateChange($rootScope,$window) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log(toState+angular.isUndefined($rootScope.login));
        if(toState.authRequired==true && angular.isUndefined($rootScope.login)) {
          console.log("sign in required");
        // event.preventDefault();
        //  $window.open("../auth.html", '_self');
        }

        // $location.path('../auth.html');
        // //$state.transitionTo('dashboard');
        // event.preventDefault();
        //$state.go('dashboard');

    });
}
