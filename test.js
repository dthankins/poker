console.log("end global var section");

var flop1 = createImg('https://dthankins.github.io/cards/ah.png');
var flop2 = createImg('https://dthankins.github.io/cards/as.png');
var flop3 = createImg('https://dthankins.github.io/cards/ad.png');
var turn = createImg('https://dthankins.github.io/cards/ac.png');
var river = createImg('https://dthankins.github.io/cards/kh.png');
/*
flop1.hide();
flop2.hide();
flop3.hide();
turn.hide();
river.hide();
*/

var flopCornerTopLeftX = 0;
var flopCornerTopRightX = 300;

var flopCornerTopLeftY = 210;
var flopCornerBottomLeftY = 300;









console.log("before setup section");

function setup() {
    console.log("within setup section");
    
    createCanvas(600, 600);

    frameRate(10);

    var screenWidth=windowWidth;
    var screenHeight=windowHeight;

    console.log("END setup section");

    console.log(" next is draw section");
    
    noLoop();

    background(0);
    
  
} // end setup




function draw() {

    console.log(" within draw section");

    //background(0);

    //fill(255, 0, 0);
    
    //ellipse(103,175,55,55);


    
    fill(255, 255, 0);
    rect(flopCornerTopLeftX, flopCornerTopLeftY, flopCornerTopRightX, flopCornerBottomLeftY, 20);


    image(flop1,10,220);
    image(flop2,105,220);
    image(flop3,200,220);

    image(turn,335,220);

    image(river,430,220);

    console.log(" END draw section");


} // end main draw function




/*
function mousePressed() {

    return false; // prevent any default behaviour

} // end mousePressed
*/



