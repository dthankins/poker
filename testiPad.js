console.log("end global var section");


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

for (i = 0; i <suit.length; i++) {

    for (rank = 13; rank > 0; rank--) {
    cards.push({
      rank: rank,
      suit: suit[i] // previously just suit
      
    });
    }
}

for(i=0;i<imageNamesArray.length;i++){
    
    //console.log(imageNamesArray[i]);

    imagesArray[i] = 'https://dthankins.github.io/cards/' + imageNamesArray[i] + '.png';

    //console.log(imagesArray[i]);

}



function preload() {


    for(i=0;i<cards.length;i++){

        cards[i].cardImage = loadImage(imagesArray[i]);
    }
}






console.log("before setup section");

function setup() {
    console.log("within setup section");
    
    createCanvas(600, 600);

    frameRate(10);

    console.log("END setup section");

    console.log(" next is draw section");
    
    // noLoop();

    background(0);

    if (nextHand < 1){

        cards = shuffle(cards);

        nextHand = 1;

    }

    flop1 = cards[0].cardImage;
    flop2 = cards[1].cardImage;
    flop3 = cards[2].cardImage;
    turn = cards[3].cardImage;
    river = cards[4].cardImage;

    
    
  
} // end setup




function draw() {

    console.log(" within draw section");

    //dealEvent = mouseClicked();

    if(dealEvent==='flop'){

        flopEvent=true;

    }
    
    if(dealEvent==='turn'){

        turnEvent=true;

    }

    if(dealEvent==='river'){

        riverEvent=true;

    }


    console.log(dealEvent);


  
    fill(255, 255, 0);

    

    stroke('yellow');
    noFill();
    strokeWeight(4);

    console.log(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY);

    rect(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY, 20);

    rect(turnX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);

    rect(riverX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);



    if (flopEvent){

        image(flop1,flopCornerTopLeftX+10,110);
        image(flop2,flopCornerTopLeftX+107,110);
        image(flop3,flopCornerTopLeftX+201,110);

    }


    

    

    if (turnEvent){
        if (flopEvent){
            image(turn,turnX,turnY);
        } else {
            turnEvent = false;
        }
    }

    

    
    if (riverEvent){
        
        if (turnEvent){
            image(river,riverX,riverY);
        } else {
            riverEvent = false;
        }
        
        
    }
    

    console.log(" END draw section");


} // end main draw function


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








