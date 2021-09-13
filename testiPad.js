console.log("end global var section");


/*
flop1.hide();
flop2.hide();
flop3.hide();
turn.hide();
river.hide();
*/

/*
var flopCornerTopLeftX = 0;
var flopCornerTopRightX = 300;

var flopCornerTopLeftY = 210;
var flopCornerBottomLeftY = 300;
*/



let img;
let flop1,flop2,flop3,turn,river;

var dealEvent = false;
var flopEvent = false;
var turnEvent = false;
var riverEvent = false;

var flopCornerTopLeftX = 5;
var flopCornerTopRightX = 304;

var flopCornerTopLeftY = 210;
var flopCornerBottomLeftY = 150;

let turnX = 340;
let turnY = 220;

let riverX = 470;
let riverY = 220;

function preload() {
  //img = loadImage('assets/laDefense.jpg');
    flop1 = loadImage('https://dthankins.github.io/cards/ah.png');
    flop2 = loadImage('https://dthankins.github.io/cards/as.png');
    flop3 = loadImage('https://dthankins.github.io/cards/ad.png');
    turn = loadImage('https://dthankins.github.io/cards/ac.png');
    river = loadImage('https://dthankins.github.io/cards/kh.png');
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

    

    stroke('red');
    noFill();
    strokeWeight(4);

    console.log(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY);

    rect(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY, 20);

    rect(turnX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);

    rect(riverX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);



    if (flopEvent){

        image(flop1,flopCornerTopLeftX+10,220);
        image(flop2,flopCornerTopLeftX+107,220);
        image(flop3,flopCornerTopLeftX+201,220);

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

/*

rect(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY, 20);

rect(turnX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);

rect(riverX-10, flopCornerTopLeftY, 112, flopCornerBottomLeftY, 20);

*/



//function keyTyped() {
//mouseClicked
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
    return false //_dealEvent = 'nothing';
  }
  
  //return _dealEvent

  dealEvent=_dealEvent;

  // uncomment to prevent any default behavior
  // return false;
}




/*
function mousePressed() {

    return false; // prevent any default behaviour

} // end mousePressed
*/



