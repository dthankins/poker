var imageAddressStringArray=[];

var stringToPush;

let img;

var the23Cards = [];

var card1,card2;
var card1Image, card2Image;

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


var imagesArray = [];



console.log("END global var section");

function preload() {



  for(i=0;i<namesArray.length;i++){

    console.log("namesArray[i]: " + namesArray[i]);

    imagesArray.push(loadImage('https://dthankins.github.io/cards/' + namesArray[i] + '.png'));

  }


}


function setup() {

  createCanvas(600, 600);

  background(0);

  //frameRate(10);

  




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

  

  //var decks = database.ref('gameDay/decks');


  var ref = database.ref("gameDay/decks");
  ref.on("value", gotData, errData); // event value triggers when there is new data

  function gotData(data) {
    var cardsToDeal = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(cardsToDeal);

    console.log("keys BELOW: ");
    console.log(keys);



    

    console.log("i only want the last one");

    var indexOfTheLastKey = keys.length-1;

    console.log("indexOfTheLastKey BELOW: ");
    console.log(indexOfTheLastKey);

    var key = keys[indexOfTheLastKey];

    console.log("THE key BELOW: ");
    console.log(key);

    console.log("cardsToDeal[key] BELOW: ");
    console.log(cardsToDeal[key]);

    the23Cards = cardsToDeal[key];

    console.log("THE the23Cards BELOW: ");
    console.log(the23Cards);

    console.log("player1 Cards BELOW: ");
    console.log(the23Cards[5]);
    console.log(the23Cards[6]);

  //noLoop();

  console.log('the23Cards UP NEXT: ');
  console.log(the23Cards);


  console.log('player1 cards UP NEXT: ');
  console.log(the23Cards[5], the23Cards[6]);

// not sure if the next part is needed at all

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
    

  }



 

  console.log('cards needed 5: ' + the23Cards[5]);
  console.log('cards needed 6: ' + the23Cards[6]);

  card1 = the23Cards[5].toString();
  card2 = the23Cards[6].toString();

  console.log('card1: ' + card1);
  console.log('card2: ' + card2);

  var card1Index = namesArray.indexOf(card1);
  var card2Index = namesArray.indexOf(card2);

  console.log('card1Index: ' + card1Index);
  console.log('card2Index: ' + card2Index);

  image(imagesArray[card1Index],110,110);
  image(imagesArray[card2Index],210,110);

  
  }



  function errData(err){
    console.log('error danny!');
    console.log(err);

  }





  console.log("END setup section");

  console.log(" next is draw section");
  
} // end setup


function draw() {

  
   

 

} // end draw



 /*
function mousePressed() {

 
    var _dealEvent;
  if (mouseX>flopCornerTopLeftX && mouseX< (flopCornerTopLeftX+flopCornerTopRightX) 
    && mouseY>flopCornerTopLeftY && mouseY <(flopCornerTopLeftY+flopCornerBottomLeftY)) {
    _dealEvent = 'flop';
  } else if (mouseX>(turnX-10) && mouseX< (turnX-10+112) 
    && mouseY>flopCornerTopLeftY && mouseY <(flopCornerTopLeftY+flopCornerBottomLeftY)) {
    _dealEvent = 'turn';
  } else if (mouseX>(riverX-10) && mouseX< (riverX-10+112) 
    && mouseY>flopCornerTopLeftY && mouseY <(flopCornerTopLeftY+flopCornerBottomLeftY)) {
    _dealEvent = 'river';
  } else {
    return false 
  }
 
  dealEvent=_dealEvent;
  

}  // end mousePressed

*/
