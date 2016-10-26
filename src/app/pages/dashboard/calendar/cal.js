angular.module("BlurAdmin.pages.dashboard")
    .controller("calendarDemo", function($scope, TaskService) {
        $scope.currentMonthStartDate = moment().set('date', 1);
        $scope.daysObjs = [];
        daysPrint($scope);

        function daysPrint($scope) {
            $scope.month = $scope.currentMonthStartDate.get('month');
            $scope.daysObjs = [];
            var isSelected = false;
            console.log(isSelected);


            for (; $scope.currentMonthStartDate.get('month') == $scope.month;) {
                var tmp = $scope.currentMonthStartDate;
                if (tmp.get('date') == moment().get('date') && tmp.get('month') == moment().get('month')) {
                    isSelected = true;
                } else {
                    isSelected = false;
                }
                $scope.mon = $scope.currentMonthStartDate.format("MMMM");
                $scope.year = $scope.currentMonthStartDate.format("YYYY");
                //  console.log($scope.currentMonthStartDate.format("D, ddd"));
                temp = {
                    "date": $scope.currentMonthStartDate.format("D"),
                    "day": $scope.currentMonthStartDate.format("dd"),
                    "isSelected": isSelected
                }
                $scope.daysObjs.push(temp);
                $scope.currentMonthStartDate.add(1, 'd')
            }
            //console.log($scope.daysObjs);
        }

        $scope.next = function() {
            //    $scope.daysObjs.clear();
            $scope.currentMonthStartDate.add(0, 'M');
            daysPrint($scope);
        }

        $scope.previous = function() {
            $scope.currentMonthStartDate.add(-2, 'M');
            daysPrint($scope);
        }

        //dateClick(day)

        $scope.dateClick = function(day) {
            var date = moment().set({'year': $scope.year, 'month': $scope.mon, 'date': day.date, 'hours':0, 'minutes':0, 'seconds':0, 'millisecond':0});
            var currentSelectedDate = moment().set({year:$scope.year, month:$scope.mon,date:day.date, minute: 0, hour:0, second:1,millisecond:0});
            for (var i = 0; i < $scope.daysObjs.length; i++) {
                $scope.daysObjs[i].isSelected = false;
            }
            day.isSelected = true;
            TaskService.getTasks({operation1: date.valueOf()}, function(resp) {
              $scope.taskList = [];
              for (var i = 0; i < resp.length; i++) {
                $scope.taskList.push(resp[i]);
                $scope.taskList[i].duration = $scope.taskList[i].taskDurationModel[0].duration;
              }

              $scope.display(angular.copy($scope.taskList), angular.copy(currentSelectedDate));
            }, function(badResp){
              console.info(badResp);
            });
        }


    });
