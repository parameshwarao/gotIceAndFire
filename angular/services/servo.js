mapp.service("ApiService",function($http){
var main = this;


this.startUrl= "https://anapioficeandfire.com/api";
//books api retrival
this.booksRet = function(){
  return $http.get(main.startUrl+"/books?page=1&pageSize=12");
}
//houses api retrival
this.housesRet = function(pagy){
  return $http.get(main.startUrl+"/houses/?page="+pagy+"&pageSize=50");
}
//characters api retrival
this.characRet = function(pagy){
  return $http.get(main.startUrl+"/characters/?page="+pagy+"&pageSize=50");
}

this.bookDet = function(parameter){
  return $http.get(main.startUrl+"/books/"+parameter);
}
this.houseDet = function(parameter){
  return $http.get(main.startUrl+"/houses/"+parameter);
}
this.charDet = function(parameter){
  return $http.get(main.startUrl+"/characters/"+parameter);
}



})
