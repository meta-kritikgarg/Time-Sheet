/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  DashboardTodoCtrl.$inject = ['$scope','$http','baConfig','TodoService'];
  function DashboardTodoCtrl($scope,$http, baConfig,TodoService) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }
    console.log(colors);


    $scope.todoList=TodoService.getTodo({ id: 1 });
    console.log($scope.todoList);

    TodoService.addTodo($scope.todoList[0]);

  }


})();
