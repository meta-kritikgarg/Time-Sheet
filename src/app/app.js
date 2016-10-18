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
]).run();

console.log("app.js is loaded");


// function checkAccessOnStateChange($rootScope,$location) {
//     $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//         console.log("works fine");
//         $location.path('../auth.html');
//       //   $state.transitionTo('dashboard');
//       //  event.preventDefault();
//       //   $state.go('dashboard');
//
//     });
// }
