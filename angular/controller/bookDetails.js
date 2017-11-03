mapp.controller('BKController',['$scope','$log','$routeParams','ApiService',function($scope,$log, $routeParams,ApiService){
console.log("book details controller is initialized:" +$routeParams.id);
var main = this;
this.details;
ApiService.bookDet($routeParams.id)
      .then(function successCallback(response){
        console.log(response.data);
        main.details = response.data;
      
      }, function errorCallback(response){
     console.log(response.data);
     console.log("error in retriving the book details data");
      });





}]);
