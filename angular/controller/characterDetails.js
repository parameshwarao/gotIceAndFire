mapp.controller('CKController',['$scope','$log','$routeParams','ApiService',function($scope,$log, $routeParams, ApiService){
console.log("the character controller is initialized");
console.log("character controller parameter is:"+$routeParams.id);
var main = this;
this.details;
ApiService.charDet($routeParams.id)
      .then(function successCallback(response){
        console.log(response.data);
        main.details = response.data;
      }, function errorCallback(response){
     console.log(response.data);
     console.log("error in retriving the character details data");
      });
}]);
