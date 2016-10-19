/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl)
       .factory('TaskService',TaskService);

  // DashboardTodoCtrl.$inject = ['TaskService'];
  //TaskService.$inject = [$resource];

  function TaskService($resource){
    console.log("functionq task");
    return $resource('http://localhost:8080/TimesheetVersion1/timesheet/task/:id');
  };


  /** @ngInject */

  function DashboardTodoCtrl($scope,$http, baConfig,TaskService) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }
    console.log(colors);

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      //console.log(i);
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Check me out' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Get in touch with akveo team' },
      { text: 'Write email to business cat' },
      { text: 'Have fun with blur admin' },
      { text: 'What do you think?' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });
    //
    var tasks = TaskService.query(function(){
      console.log(tasks);
    })

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';

      }
    };
  }


})();
