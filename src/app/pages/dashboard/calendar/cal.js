angular.module("BlurAdmin.pages.dashboard")
.controller("calendarDemo", function($scope) {
  $scope.currentMonthStartDate = moment().set('date', 1);
    $scope.daysObjs=[];
    daysPrint($scope);
        function daysPrint($scope){
              $scope.month = $scope.currentMonthStartDate.get('month');
              $scope.daysObjs=[];
            for(; $scope.currentMonthStartDate.get('month')==$scope.month ; ) {
              $scope.mon=$scope.currentMonthStartDate.format("MMMM");
              $scope.year=$scope.currentMonthStartDate.format("YYYY");
          //  console.log($scope.currentMonthStartDate.format("D, ddd"));
            temp = {"date" :$scope.currentMonthStartDate.format("D"),"day" :$scope.currentMonthStartDate.format("dd")};
            $scope.daysObjs.push(temp);
            $scope.currentMonthStartDate.add(1, 'd')
          }
          //console.log($scope.daysObjs);
        }

        $scope.next=function() {
      //    $scope.daysObjs.clear();
          $scope.currentMonthStartDate.add(0, 'M');
          daysPrint($scope);
        }

        $scope.previous=function() {
          $scope.currentMonthStartDate.add(-2, 'M');
          daysPrint($scope);
        }

//dateClick(day)

        $scope.dateClick=function(day) {
        //  console.log(day );
        
        }

});
