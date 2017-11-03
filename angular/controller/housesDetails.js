mapp.controller('HKController',['$scope','$log','$routeParams','ApiService',function($scope, $log, $routeParams, ApiService){
var main = this;
console.log("houses controller is initialized with ");
console.log("paramter passed for house is:"+$routeParams.id);
this.details;
ApiService.houseDet($routeParams.id)
      .then(function successCallback(response){
        console.log(response.data);
        main.details = response.data;
      }, function errorCallback(response){
     console.log(response.data);
     console.log("error in retriving the house details data");
      });

}]);
