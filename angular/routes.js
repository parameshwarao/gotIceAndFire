mapp.config(['$routeProvider', function($routeProvider){
$routeProvider
.when('/',{
  templateUrl  : 'views/mainpage.html',
  controller   : 'mainController',
  controllerAs : 'first'
})

.when('/Bdet/:id',{
  templateUrl : 'views/bookDetail.html',
  controller  : 'BKController',
  controllerAs : 'bookde'

})

.when('/Hdet/:id',{
  templateUrl :'views/housedetail.html',
  controller : 'HKController',
  controllerAs : 'housede'
})

.when('/Cdet/:id',{
  templateUrl : 'views/characterDetail.html',
  controller : 'CKController',
  controllerAs : 'characterde'
})

.otherwise({
  template : '<h1>Error 404 page not found</h1>'
});
}]);
