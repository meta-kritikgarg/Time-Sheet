/**
 * @author kritik
 */
(function () {
  'use strict';

  angular.module('BlurAdmin')
      .controller('TimeSheetController', TimeSheetController);

  TimeSheetController.$inject = ['$scope', 'baConfig', '$element', 'layoutPaths', 'TimeSheetService']

  /** @ngInject */
  function TimeSheetController($scope, baConfig, $element, layoutPaths, TimeSheetService) {

    // chartData = [];
    TimeSheetService.getTimeSheet(function (resp) {
      var weeklyHours = getWeeklyHours(resp);
      var chartData = [{
        week: 'Week 1',
        hour: weeklyHours[0],
        color: layoutColors.primary
      },
      {
        week: 'Week 2',
        hour: weeklyHours[1],
        color: layoutColors.danger

      },
      {
        week: 'Week 3',
        hour: weeklyHours[2],
        color: layoutColors.info
      },
      {
        week: 'Week 4',
        hour: weeklyHours[3],
        color: layoutColors.success
      },
      {
        week: 'Week 5',
        hour: weeklyHours[4],
        color: layoutColors.warning
      }];
      makeChart(chartData);
    }, function(badResp){
      console.info(badResp);
    });

    function getWeeklyHours(timeSheetData) {
      var month = moment(angular.copy(timeSheetData[0].taskDurationModel[0].date)).month();
      var year = moment(angular.copy(timeSheetData[0].taskDurationModel[0].date)).year();
      var week = moment().set({year: year, month: month, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}).week();

      // array to keep total working hours per week
      var weeklyHours = [0,0,0,0,0];

      for (var i = 0; i < timeSheetData.length; i++) {
        var dateWeek = moment(timeSheetData[i].taskDurationModel[0].date).week();
        for (var j = 0; j < weeklyHours.length; j++) {
          // checking week
          // dateWeek = week of current date (w.r.t year eg: 40,41)
          // week = week of first date of the month (w.r.t year eg: 40,41)
          if (dateWeek - week + 1 == j+1) {
            weeklyHours[j] += timeSheetData[i].taskDurationModel[0].duration;
            break;
          }
        }
      }
      return weeklyHours;
    }

    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    function makeChart(chartData) {
      var barChart = AmCharts.makeChart(id, {
        type: 'serial',
        theme: 'blur',
        color: layoutColors.defaultText,
        dataProvider: chartData,
        valueAxes: [
          {
            axisAlpha: 0,
            position: 'left',
            title: 'Hours',
            gridAlpha: 0.5,
            gridColor: layoutColors.border,
          }
        ],
        startDuration: 1,
        graphs: [
          {
            balloonText: '<b>[[category]]: [[value]]</b>',
            fillColorsField: 'color',
            fillAlphas: 0.7,
            lineAlpha: 0.2,
            type: 'column',
            valueField: 'hour'
          }
        ],
        chartCursor: {
          categoryBalloonEnabled: false,
          cursorAlpha: 0,
          zoomable: false
        },
        categoryField: 'week',
        categoryAxis: {
          gridPosition: 'start',
          labelRotation: 45,
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        },
        export: {
          enabled: true
        },
        creditsPosition: 'top-right',
        pathToImages: layoutPaths.images.amChart
      });
    }


  }
})();
