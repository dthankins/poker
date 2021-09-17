//**********
/*
testing
https://shiffman.net/a2z/firebase/
https://console.firebase.google.com/project/poker-2ba41/database/poker-2ba41-default-rtdb/data
file:///C:/Users/dthan/Documents/CODE/poker/database.html


*/
//***********


console.log("BEGIN global var section");

var newFlopX = 10;
var newFlopY = 242;
var newFlopLength = 314;
var newFlopHeight = 150;

var newTurnX = 343;
var newTurnY = 242;
var newTurnLength = 110;
var newTurnHeight = 150;

var newRiverX = 470;
var newRiverY = 242;
var newRiverLength = 110;
var newRiverHeight = 150;

var cards = [];

var myNewDeck = [];

var nextHand = 0;

var suit = ["c","d","h","s"];

var imagesArray = [];

var player1Cards, player2Cards; //, flop, turn, river;

var imageAddressString;

let img;
let flop1,flop2,flop3,turn,river;

var dealEvent = false;
var flopEvent = false;
var turnEvent = false;
var riverEvent = false;

var flopCornerTopLeftX = 5;
var flopCornerTopRightX = 304;

var flopCornerTopLeftY = 100;//210;
var flopCornerBottomLeftY = 150;

let turnX = 340;
let turnY = 110;//220;

let riverX = 470;
let riverY = 110;//220;

var the23Cards = [];



var namesArray = [
    '13c',
    '12c',
    '11c',
    '10c',
    '9c',
    '8c',
    '7c',
    '6c',
    '5c',
    '4c',
    '3c',
    '2c',
    '1c',

    '13d',
    '12d',
    '11d',
    '10d',
    '9d',
    '8d',
    '7d',
    '6d',
    '5d',
    '4d',
    '3d',
    '2d',
    '1d',

    '13h',
    '12h',
    '11h',
    '10h',
    '9h',
    '8h',
    '7h',
    '6h',
    '5h',
    '4h',
    '3h',
    '2h',
    '1h',

    '13s',
    '12s',
    '11s',
    '10s',
    '9s',
    '8s',
    '7s',
    '6s',
    '5s',
    '4s',
    '3s',
    '2s',
    '1s'];






console.log("END global var section");


// PRELOAD

function preload() {



  for(i=0;i<namesArray.length;i++){

    console.log("namesArray[i]: " + namesArray[i]);

    imagesArray.push(loadImage('https://dthankins.github.io/cards/' + namesArray[i] + '.png'));

  }


}





function setup() {

  console.log("BEGIN setup");

// ******************************************************************************************************
 
  var config = {
      apiKey: "AIzaSyAHvwkz2jSqLhltzaaAD6VHWHpjO1wBad0",
      authDomain: "poker-2ba41.firebaseapp.com",
      databaseURL: "https://poker-2ba41-default-rtdb.firebaseio.com",
      projectId: "poker-2ba41",
      storageBucket: "poker-2ba41.appspot.com",
      messagingSenderId: "1005606801576",
      //appId: "1:1005606801576:web:9b6069c58bbdbf22f4b29d",
      //measurementId: "G-KBVYKTXNJ6"
    };

  firebase.initializeApp(config);

  // ******************************************************************************************************


  // Get a reference to the database service
  var database = firebase.database();

  var decks = database.ref('gameDay/decks');



// I only pushed 23 or 24 cards and i pushed as text and 13s was a king of spades

  var ref = database.ref("gameDay/decks");
  ref.on("value", gotData, errData); // event value triggers when there is new data

  function gotData(data) {
    var cardsToDeal = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(cardsToDeal);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      
      myNewDeck = cardsToDeal[key];
      console.log(myNewDeck);
      //console.log(k.rank + k.suit);  the23cards is not an object but just an array of strings so k is just one card string
      
    }

    //console.log("last one should be the one displayed on picture");

    console.log('is this an array? ');  // YES!!!

    console.log(myNewDeck[0]);
    
    

  // moved end of gotData to end of setup
/*
  }

  function errData(err){
    console.log('error danny!');
    console.log(err);

  }
  */

  console.log('is myNewDeck array visible outside of the gotData function? ');  // 

  console.log(myNewDeck[0]);



  createCanvas(700, 700);

  frameRate(10);

  

  //noLoop();

  background(0);

  for(i=0;i<myNewDeck.length;i++){ // we only need 23 cards max bc 9 people 2 cards each plus 5 board cards

    //  this is hopefully looking at the first two items in the string

    if(myNewDeck[i][0]==='1' && myNewDeck[i][1]==='3'){ //13
      myNewDeck[i][0]= 'k';
    }
    if(myNewDeck[i][0]==='1' && myNewDeck[i][1]==='2'){ //12
      myNewDeck[i][0]= 'q';
    }
    if(myNewDeck[i][0]==='1' && myNewDeck[i][1]==='1'){ //11
      myNewDeck[i][0]= 'j';
    }
    if(myNewDeck[i][0]==='1' && myNewDeck[i][1]==='0'){ //10
      myNewDeck[i][0]= 't';
    }

    if(myNewDeck[i][0]==='1'){ 
      myNewDeck[i][0]= 'a';
    }
    

    imageAddressString = 'https://dthankins.github.io/cards/' + myNewDeck[i] + '.png';
    //cards[i].cardImage = loadImage(imageAddressString);
    cards[i] = loadImage(imageAddressString);

  }




  var flopCard1 = myNewDeck[0].toString();
  var flopCard2 = myNewDeck[1].toString();
  var flopCard3 = myNewDeck[2].toString();
  var turnCard = myNewDeck[3].toString();
  var riverCard = myNewDeck[4].toString();

  card1 = myNewDeck[5].toString();
  card2 = myNewDeck[6].toString();

  var player2Card1 = myNewDeck[7].toString();
  var player2Card2 = myNewDeck[8].toString();


  var card1Index = namesArray.indexOf(card1);
  var card2Index = namesArray.indexOf(card2);

  var player2Card1Index = namesArray.indexOf(player2Card1);
  var player2Card2Index = namesArray.indexOf(player2Card2);

  var flopCard1Index = namesArray.indexOf(flopCard1);
  var flopCard2Index = namesArray.indexOf(flopCard2);
  var flopCard3Index = namesArray.indexOf(flopCard3);
  var turnCardIndex = namesArray.indexOf(turnCard);
  var riverCardIndex = namesArray.indexOf(riverCard);


  image(imagesArray[card1Index],110,50);
  image(imagesArray[card2Index],210,50);

  image(imagesArray[player2Card1Index],410,50);
  image(imagesArray[player2Card2Index],510,50);

  flop1 = imagesArray[flopCard1Index];  // , 10, 250;
  flop2 = imagesArray[flopCard2Index];  // , 110, 250;
  flop3 = imagesArray[flopCard3Index];  // , 210, 250;
  turn = imagesArray[turnCardIndex];  // , 360, 250;
  river = imagesArray[riverCardIndex];  // , 490, 250;



  


/*
  flop1 = cards[0];
  flop2 = cards[1];
  flop3 = cards[2];
  turn = cards[3];
  river = cards[4];


  flop1 = cards[0].cardImage;
  flop2 = cards[1].cardImage;
  flop3 = cards[2].cardImage;
  turn = cards[3].cardImage;
  river = cards[4].cardImage;

cards 0 to 4 are the community cards
player1 is 5,6
player 2 is 7,8
player 3 is 9,10
player 4 is 11,12
player 5 is 13,14
player 6 is 15,16
player 7 is 17,18
player 8 is 19,20
player 9 is 21,22

*/

  } // end gotData

  function errData(err){
    console.log('error danny!');
    console.log(err);

  } // end errData

  console.log("END setup section");

  console.log(" next is draw section");
  
} // end setup


function draw() {

  //console.log("BEGIN draw");

  if(dealEvent==='flop'){

        flopEvent=true;

    }
    
    if(dealEvent==='turn'){

        turnEvent=true;

    }

    if(dealEvent==='river'){

        riverEvent=true;

    }


    

  
    fill(255, 255, 0);

    

    stroke('yellow');
    noFill();
    strokeWeight(4);



   

    rect(newFlopX, newFlopY, newFlopLength, newFlopHeight, 20);  // the 20 is to round the edges with a radius 20 pixels 
    rect(newTurnX, newTurnY, newTurnLength, newTurnHeight, 20);  // the 20 is to round the edges with a radius 20 pixels 
    rect(newRiverX, newRiverY, newRiverLength, newRiverHeight, 20);  // the 20 is to round the edges with a radius 20 pixels 



    if (flopEvent){

        image(flop1, 20, 250); // ,flopCornerTopLeftX+10,110);
        image(flop2, 120, 250); // ,flopCornerTopLeftX+107,110);
        image(flop3, 220, 250); // ,flopCornerTopLeftX+201,110);

    }



    

    if (turnEvent){
        if (flopEvent){
            image(turn, newTurnX+8, newTurnY+10); // ,turnX,turnY);
        } else {
            turnEvent = false;
        }
    }

    

    
    if (riverEvent){
        
        if (turnEvent){
            image(river, newRiverX+8, newRiverY+10); //,riverX,riverY);
        } else {
            riverEvent = false;
        }
        
        
    }


 

} // end draw

function shuffle(aDeck){

    var j, x, i;
    for (i = aDeck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = aDeck[i];
        aDeck[i] = aDeck[j];
        aDeck[j] = x;
    }

    return aDeck;

}  // end shuffle


function mousePressed() {
    var _dealEvent;
  if (mouseX>newFlopX && mouseX< (newFlopX+newFlopLength) 
    && mouseY>newFlopY && mouseY <(newFlopY+newFlopHeight)) {
    _dealEvent = 'flop';
  } else if (mouseX>(newTurnX) && mouseX< (newTurnX+newTurnLength) 
    && mouseY>newTurnY && mouseY <(newTurnY+newTurnHeight)) {
    _dealEvent = 'turn';
  } else if (mouseX>(newRiverX) && mouseX< (newRiverX+newRiverLength) 
    && mouseY>newRiverY && mouseY <(newRiverY+newRiverHeight)) {
    _dealEvent = 'river';
  } else {
    return false 
  }
 
  dealEvent=_dealEvent;

}  // end mousePressed

