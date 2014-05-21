angular.module("spacebar", ['ngAnimate'])
.controller("SpaceController", function($scope) {
  $scope.messages = []
  
  $scope.messages.push({text:"Spacebar when you are ready", size:30, first:true})
  $scope.messages.push({text:"Hi there", size:30})
  $scope.messages.push({text:"I am written in Angular", size:30})
  $scope.messages.push({text:"a bit of HTML", size:40})
  $scope.messages.push({text:"and CSS transitions", size:50})
  $scope.messages.push({text:"cool no? :-)", size:25})
  $scope.messages.push({text:"Inspired by: http://thequietplaceproject.com/", size:15, last:true})
  
  $scope.next = function() {
    $scope.messages.shift()
  }
  $scope.first = function() {
    return $scope.messages[$scope.messages.length-1];
  }

})
.directive('ngSpacebar', function () {
  return function (scope, elm, attrs) {
    elm.bind('keypress', function (e) {
      var intKey = (window.Event) ? e.which : e.keyCode;
      if (intKey === 32) {
        scope.$apply(attrs.ngSpacebar);
      }
    });
  };
});