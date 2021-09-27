//**********
/*
testing
https://shiffman.net/a2z/firebase/
https://console.firebase.google.com/project/poker-2ba41/database/poker-2ba41-default-rtdb/data
file:///C:/Users/dthan/Documents/CODE/poker/database.html


*/
//***********


console.log("BEGIN global var section");

var cardWidth, windowWidth, cardHeight, yStartCard, padding, xStartCard;

var rectWidthFlop, rectWidthTurn, rectHeight, rectX, rectY;



var cards = [];

var nextHand = 0;

var suit = ["c","d","h","s"];

var imagesArray = [];

var imageNamesArray = [
    'kc',
    'qc',
    'jc',
    'tc',
    '9c',
    '8c',
    '7c',
    '6c',
    '5c',
    '4c',
    '3c',
    '2c',
    'ac',

    'kd',
    'qd',
    'jd',
    'td',
    '9d',
    '8d',
    '7d',
    '6d',
    '5d',
    '4d',
    '3d',
    '2d',
    'ad',

    'kh',
    'qh',
    'jh',
    'th',
    '9h',
    '8h',
    '7h',
    '6h',
    '5h',
    '4h',
    '3h',
    '2h',
    'ah',

    'ks',
    'qs',
    'js',
    'ts',
    '9s',
    '8s',
    '7s',
    '6s',
    '5s',
    '4s',
    '3s',
    '2s',
    'as'];


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

for (i = 0; i <suit.length; i++) {

    for (rank = 13; rank > 0; rank--) {
    cards.push({
      rank: rank,
      suit: suit[i] // previously just suit
      
    });
    }
}

/*

for(i=0;i<imageNamesArray.length;i++){
    
    //console.log(imageNamesArray[i]);

    imagesArray[i] = 'https://dthankins.github.io/cards/' + imageNamesArray[i] + '.png';

    //console.log(imagesArray[i]);

}
*/


var cardsWithImages = cards;
// remove preload for now as too large for the database i think
/*
function preload() {


    for(i=0;i<cardsWithImages.length;i++){

        cardsWithImages[i].cardImage = loadImage(imagesArray[i]);
    }
}
*/



console.log("END global var section");


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

  // window.myApp = app; // this makes a global variable

/*

  var gameDay = database.ref('gameDay');

  gameDay.push('9/14/2021');

  var players = database.ref('gameDay/players');

  var playerData = {
    number: 1,
    initials: 'DH'
  }

  players.push(playerData);

  playerData = {
    number: 2,
    initials: 'RTW'
  }

  players.push(playerData);
*/

  var decks = database.ref('gameDay/decks');

//  var deckCards = ['1s','13s', '12s', '11s'];

//  var handData = {
//    cardsToDeal: deckCards
//  }


/*

  if (nextHand < 1){

      cards = shuffle(cards);

      nextHand = 1;

  }

  hands.push(handData);
  hands.push(handData);
  hands.push(handData);

*/

/*
  for(i=0;i<5;i++){  // here I am trying to shuffle and save 5 decks to test.

    cards = shuffle(cards);

    for(n=0;n<24;n++){

      the23Cards[n] = cards[n].rank + cards[n].suit;

    }
    //console.log(the23Cards);

    decks.push(the23Cards);  // cards is never sent.

  }
  */



  cards = shuffle(cards);

  for(n=0;n<24;n++){

    the23Cards[n] = cards[n].rank + cards[n].suit;

  }

  decks.push(the23Cards);  // cards is never sent.

  



  

  var ref = database.ref("gameDay/decks");
  ref.on("value", gotData, errData); // event value triggers when there is new data

  function gotData(data) {
    var cardsToDeal = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(cardsToDeal);

    /*
    console.log('handsInfoRetreived: ');
    console.log(handsInfoRetreived);
    console.log('keys: ');
    console.log(keys);
    */

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      
      var k = cardsToDeal[key];
      console.log(k);
      //console.log(k.rank + k.suit);  the23cards is not an object but just an array of strings so k is just one card string
      
    }

    console.log("last one should be the one displayed on picture");
    
    

    
  }

  function errData(err){
    console.log('error danny!');
    console.log(err);

  }



  //createCanvas(600, 600);
  createCanvas(windowWidth, windowHeight);

  frameRate(10);

  

  //noLoop();

  background(0);

  for(i=0;i<the23Cards.length;i++){ // we only need 23 cards max bc 9 people 2 cards each plus 5 board cards

    //  this is hopefully looking at the first two items in the string

    if(the23Cards[i][0]==='1' && the23Cards[i][1]==='3'){ //13
      the23Cards[i][0]= 'k';
    }
    if(the23Cards[i][0]==='1' && the23Cards[i][1]==='2'){ //12
      the23Cards[i][0]= 'q';
    }
    if(the23Cards[i][0]==='1' && the23Cards[i][1]==='1'){ //11
      the23Cards[i][0]= 'j';
    }
    if(the23Cards[i][0]==='1' && the23Cards[i][1]==='0'){ //10
      the23Cards[i][0]= 't';
    }

    if(the23Cards[i][0]==='1'){ 
      the23Cards[i][0]= 'a';
    }
    

    imageAddressString = 'https://dthankins.github.io/cards/' + the23Cards[i] + '.png';
    cards[i].cardImage = loadImage(imageAddressString);

  }

  /*

  // this should add the images back. inefficient but should work for now.

  for(i=0;i<cards.length;i++){

    for(j=0;j<cardsWithImages.length;j++){

    if (cards[i].rank===cardsWithImages[j].rank && cards[i].suit===cardsWithImages[j].suit)

      cards[i].cardImage = cardsWithImages[j].cardImage; // = loadImage(imagesArray[i]);
    }
  }
  */

  
// move to draw
/*
  flop1 = cards[0].cardImage;
  flop2 = cards[1].cardImage;
  flop3 = cards[2].cardImage;
  turn = cards[3].cardImage;
  river = cards[4].cardImage;
  */

/*
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


  

  console.log("END setup section");

  console.log(" next is draw section");
  
} // end setup


function draw() {

  //console.log("BEGIN draw");

  
  
  fill(255, 255, 0);

  

  stroke('yellow');
  noFill();
  strokeWeight(4);

  flop1 = cards[0].cardImage;
  flop2 = cards[1].cardImage;
  flop3 = cards[2].cardImage;
  turn = cards[3].cardImage;
  river = cards[4].cardImage;

  cardWidth = windowWidth/6-5;

  flop1.resize(cardWidth,0);
  flop2.resize(cardWidth,0);
  flop3.resize(cardWidth,0);
  turn.resize(cardWidth,0);
  river.resize(cardWidth,0);

  cardHeight = flop1.height;
  padding = cardWidth/20;
  yStartCard = (windowHeight-cardHeight + 2 * padding)/2;
  xStartCard = 5 * padding;

  rectWidthFlop = cardWidth * 3 + 4 * padding;
  rectWidthTurn = cardWidth + 2 * padding;
  rectHeight = cardHeight + 2 * padding;
  rectX = xStartCard - padding;
  rectY = yStartCard-padding;

  console.log('cardWidth: ' + cardWidth)
  console.log('windowWidth: ' + windowWidth)
  console.log('cardHeight: ' + cardHeight)
  console.log('yStartCard: ' + yStartCard)
  console.log('padding: ' + padding)



  

  rect(rectX, rectY , rectWidthFlop, rectHeight, 20);

  rect(rectX + rectWidthFlop + 2 * padding, rectY, rectWidthTurn, rectHeight, 20);

  rect(rectX + rectWidthFlop + cardWidth + 6 * padding, rectY, rectWidthTurn, rectHeight, 20);





  image(flop1, xStartCard, yStartCard);
  image(flop2, xStartCard + cardWidth + padding, yStartCard);
  image(flop3, xStartCard + cardWidth*2 + padding*2, yStartCard);

  image(turn,xStartCard + cardWidth*3 + padding*6,yStartCard);

  image(river,xStartCard + cardWidth*4 + padding*10,yStartCard);

    




} // end draw

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
} // end windowResized
