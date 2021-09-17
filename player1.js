// I am stuck not being able to display the card images for some reason.

// maybe if i preload?

// for some reason it willl only show preloaded images by exact name this time 
// where as i did not even use a preload function in the main board

var imageAddressStringArray=[];

var stringToPush;

let img;

var the23Cards = [];

var card1,card2;
var card1Image, card2Image;

var namesArray = [
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

var imagesArray = [];



console.log("END global var section");

function preload() {

  // img = loadImage('https://dthankins.github.io/cards/2h.png');
  // img2 = loadImage('https://dthankins.github.io/cards/9s.png');

  for(i=0;i<namesArray.length;i++){

    console.log("namesArray[i]: " + namesArray[i]);

    imagesArray.push(loadImage('https://dthankins.github.io/cards/' + namesArray[i] + '.png'));

  }

  //= 'https://dthankins.github.io/cards/' + namesArray[i] + '.png';

}


function setup() {

  createCanvas(600, 600);

  background(0);

  //frameRate(10);

  
  
  //image(img,110,110);



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

 
    
    
/*
// i moved all this down so everything is in gotdata
    
  }

  //console.log("THE the23Cards BELOW outside of gotData: ");
  //console.log(the23Cards);

  function errData(err){
    console.log('error danny!');
    console.log(err);

  }

  */




  

  //noLoop();

  

  console.log('the23Cards UP NEXT: ');
  console.log(the23Cards);


  console.log('player1 cards UP NEXT: ');
  console.log(the23Cards[5], the23Cards[6]);


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
    
    // next i use imageAddressStringArray instead of imageAddressString that i used in the main board js
    stringToPush = 'https://dthankins.github.io/cards/' + the23Cards[i] + '.png';
    //console.log(stringToPush);
    imageAddressStringArray[i] = stringToPush;
    //cards[i].cardImage = loadImage(imageAddressString);
    // since i did not create the cards here i cannot use this but downt need to use the object just make new array

  }



  
/*
  flop1 = cards[0].cardImage;
  flop2 = cards[1].cardImage;
  flop3 = cards[2].cardImage;
  turn = cards[3].cardImage;
  river = cards[4].cardImage;
*/

  console.log('imageAddressStringArray BELOW');
  console.log(imageAddressStringArray);
  console.log('imageAddressStringArray [5] BELOW');
  console.log(imageAddressStringArray[5]);
  console.log('get the card images next');

  //var dog = loadImage('https://dthankins.github.io/cards/2h.png');
  
  //image(img,310,110);
  //image(img2,420,110);

  //https://dthankins.github.io/cards/9s.png


  card1 = imageAddressStringArray[5];
  card2 = imageAddressStringArray[6];

  console.log(card1)
  console.log(card2);
  

  card1Image = loadImage(card1);
  card2Image = loadImage(card2);
/*
  console.log(card2Image);



  console.log('images should be loaded');

  console.log('card1Image up next:');
  console.log(card1Image);

  //image(loadImage(card1),110,110);

  image(card1Image,110,110);
  */



  image(card1Image,110,110);
  image(card2Image,360,110);

  
  }

  //console.log("THE the23Cards BELOW outside of gotData: ");
  //console.log(the23Cards);

  function errData(err){
    console.log('error danny!');
    console.log(err);

  }





  console.log("END setup section");

  console.log(" next is draw section");
  
} // end setup


function draw() {

  
   

  //image(card1Image,110,110);
  //image(img,360,110);


    

 

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