/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('calendar', calendar);

  /** @ngInject */
  function calendar() {
    return {
      restrict: 'EA',
      controller: 'calendarDemo',
      templateUrl: 'app/pages/dashboard/calendar/cal.html'
    };
  }
})();
