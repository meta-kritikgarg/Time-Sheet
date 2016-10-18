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


function checkAccessOnStateChange($rootScope,$location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log("works fine");

     //   event.preventDefault();
      //  $location.path('../auth.html');
        //$state.transitionTo('dashboard');
        //$state.go('dashboard');

    });
}