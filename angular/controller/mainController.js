//var mapp = angular.module('myApp',['ngRoute']); this has been moved to initialize.js as it has to be loaded before services
mapp.controller('mainController',['$scope','$log','ApiService', function($scope, $log, ApiService){
  var main = this;
  //variables to control the display
  this.house = false ;  // SHOW/HIDE HOUSE

	this.character = false ;  //  SHOW/HIDE BOOKS

	this.books = false ;  //  SHOW/HIDE CHARACTER
  //variables to hold response data
  this.masterdata=[];

  this.temp = [];

  this.bookDAT = {}; //to store book related data in list
  this.charDAT = {}; //to store character related data in list
  this.houseDAT = {}; //to store house realated data in list
  this.update=0;//default

  this.characterDisplay = function(){  // For hiding and showing on LIST-ALL click
	main.character = !main.character;
  main.house = false;
  main.books =false;
	};
  this.housesDisplay = function(){  // For hiding and showing on LIST-ALL click
	main.character = false;
  main.house = !main.house;
  main.books =false;
	};

  this.booksDisplay = function(){  // For hiding and showing on LIST-ALL click
	main.character = false;
  main.house = false;
  main.books = !main.books;
	};

  //-----------------listing all data's-----------------//
this.masterBookList = function(){
  ApiService.booksRet()
  .then(function successCallback(response){
    //line to display
    var temp2;
    main.bookDAT = response.data;
    main.masterdata.push.apply(main.masterdata,main.bookDAT);

  /*  for(var x in main.bookDAT){
      temp2=main.bookDAT[x].url;
      console.log(temp2);
      main.bookDAT[x].url=encodeURIComponent(temp2);
      console.log("converted"+x+main.bookDAT[x].url);
    }*/
    console.log("for ended");
    //main.bookDAT.url=encodeURIComponent(main.bookDAT.url);
    //console.log("booasf"+main.bookDAT[0].url);
    //console.log("sample encoded:"+encodeURIComponent(main.bookDAT[0].url));




		console.log(main.bookDAT);
    console.log("to check if names is correct:"+main.bookDAT[1].name);
  }, function errorCallback(response){
    alert("error fetching data from api for books");
    console.log(response);
  });
}//master book END
this.masterBookList();

this.masterHouseList = function(item){
    console.log("page:"+item);
  ApiService.housesRet(item)
  .then(function successCallback(response){
    //line to display

    main.houseDAT = response.data;
    main.masterdata.push.apply(main.masterdata,main.houseDAT);
		console.log(main.houseDAT);
    console.log("to check if names is correct:"+main.houseDAT[1].name);
  }, function errorCallback(response){
    alert("error fetching data from api for house");
    console.log(response);
  });
}//master house END
this.masterHouseList(1);

this.masterCharacterList = function(item){
  console.log("page:"+item);
  ApiService.characRet(item)
  .then(function successCallback(response){
    //line to display
    main.charDAT = response.data;
    main.masterdata.push.apply(main.masterdata,main.charDAT);
    console.log(main.charDAT);
		 console.log("to check if charcter name is correct:"+main.charDAT[1].name);
  }, function errorCallback(response){
    alert("error fetching data from api for character. API problem");
    console.log(response);
  });
}
this.masterCharacterList(1);


//---utilites---//
this.Hpagy=1;
this.Cpagy=1;
//to scroll through the pages//
//function for house page//
this.pageHouse = function(decider){
  if(decider==1){ //1 is for going forward
    main.Hpagy++;
    this.masterHouseList(main.Hpagy);
  }
  else if(decider==2){ //2 is for going backward
        if(main.Hpagy>1){
        main.Hpagy--;
        this.masterHouseList(main.Hpagy);
      }
  }
  else if (decider==3) {
    main.Hpagy=1;
    this.masterHouseList(1);

  }
  else{} //just
}

//function for character page
this.pageChar = function(decider){
  if(decider==1){ //1 is for going forward
    main.Cpagy++;
    this.masterCharacterList(main.Cpagy);
  }
  else if(decider==2){ //2 is for going backward
        if(main.Cpagy>1){
        main.Cpagy--;
        this.masterCharacterList(main.Cpagy);
      }
  }
  else if (decider==3) {
    main.Cpagy=1;
    this.masterCharacterList(main.Cpagy);

  }
  else{} //just
}
//date function//
function parseDate(input) {
  var parts = input.split('-');
  return new Date(parts[2], parts[1]-1, parts[0]);
}
//--------utilites--//
//this.encodeURL = function(uri){
  //console.log(encodeURIComponent(uri));
    //return encodeURIComponent(uri);


//-------------------listing all data's END---------------//*/
console.log("maincontroller is initialized with no problem");
}]);
