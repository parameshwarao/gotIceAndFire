mapp.directive("directoBook",function(){
console.log("this is initialized book");
 return {

   restrict :"E",
   templateUrl :"views/books.html",
   controller : function($scope){

   }//controller end
 }//return end


})

mapp.directive("directoCharacter",function(){
  console.log("this is initialized character");

 return {

   restrict :"E",
   templateUrl :"views/characters.html",
   controller : function($scope){

   }//controller end
 }//return end


})

mapp.directive("directoHouse",function(){
console.log("this is initialized house");
 return {

   restrict :"E",
   templateUrl :"views/houses.html",
   controller : function($scope){

   }//controller end
 }//return end


})
