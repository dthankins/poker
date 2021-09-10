// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424

console.log("start global var section");

var player1 = "Danny";

var cards = [];

var nextHand = 0;

//var fillColor = "255, 0, 0";

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





//let as;
//let ks;

var player1Cards, player2Cards, flop, turn, river;

console.log("end global var section");



console.log("before setup section");

function setup() {
    console.log("within setup section");
    createCanvas(windowWidth, windowHeight);
    
    //angleMode(DEGREES);
    //rectMode(CENTER);

    frameRate(10);

    screenWidth=windowWidth;
    screenHeight=windowHeight;

    // Create an image html element
    //aceSpades = 'https://raw.githubusercontent.com/dthankins/cards/main/ah.png';
    //aceSpades = 'https://lh3.googleusercontent.com/proxy/fhLaCMhn96i1DXEXKAHgoogowSJPTqHiYynamOTs8AEfCPQnTE2ommm0Pp3DSa_4B6QPqnYNsb-hyCRS6plAmjgA52I5xKE';
    //kingSpades = 'https://freesvg.org/img/1396931743.png';
    //as = createImg(aceSpades);
    //ks = createImg(kingSpades);

    //as = createImg(aceSapdes)
    //as = createImg('C:\Users\dthan\Documents\CODE\poker\cards\ah.png');
    //as.hide();

    // create cards array

    

    //for (suit = 4; suit > 0; suit--) {

    for (i = 0; i <suit.length; i++) {


    


        for (rank = 13; rank > 0; rank--) {
        cards.push({
          rank: rank,
          suit: suit[i] // previously just suit
          
        });
        }
    }


        // = 'https://raw.githubusercontent.com/dthankins/cards/main/ah.png';


    console.log(cards);
    //console.log(imageNamesArray);

    

    

    for(i=0;i<imageNamesArray.length;i++){
        
        console.log(imageNamesArray[i]);

        // https://raw.githubusercontent.com/dthankins/cards/main/2c.png
        // added http://cors.io/?

        imagesArray[i] = 'https://dthankins.github.io/cards/' + imageNamesArray[i] + '.png';

        console.log(imagesArray[i]);

    }

    // cardImage= createImg(imagesArray[i]);

    for(i=0;i<cards.length;i++){

        cards[i].cardImage = createImg(imagesArray[i]);

    }

    console.log(cards);

    








    console.log("END setup section");

    console.log(" next is draw section");

    
    noLoop();
    
  
} // end setup




function draw() {

    console.log(" within draw section");

    background(0);
    fill(255, 0, 0);
    ellipse(111,111,44,44);

    console.log(nextHand);

    if (nextHand < 1){

        //cards = shuffle(cards);

        nextHand = 1;

        console.log("cards now shuffled");

        console.log(cards);

        console.log(nextHand);

    }

    image(cards[0].cardImage,10,10);

    image(cards[1].cardImage,25,10);


    // burn cards 0 and 5 and 9, and 11 -- prob doesnt really matter.

    player1Cards = [[cards[2].rank + cards[2].suit] ,[cards[4].rank + cards[4].suit]];
    player2Cards = [[cards[1].rank+  cards[1].suit] ,[cards[3].rank + cards[3].suit]]; //cards[1],cards[3];
    
    flop = [[cards[6].rank + cards[6].suit] ,[cards[7].rank + cards[7].suit] ,[cards[8].rank + cards[8].suit]]; //cards[6], cards[7],cards[8];
    turn = [cards[10].rank + cards[10].suit]; //cards[10];
    river = [cards[12].rank + cards[12].suit]; //cards[12];

    console.log("player1Cards: "+ player1Cards); //cards[2].suit, cards[2].rank ,cards[4].suit ,cards[4].rank);
    console.log("player2Cards: "+ player2Cards);
    console.log("flop: "+ flop);
    console.log("turn: "+ turn);
    console.log("river: "+ river);





    


    //assignCard("Jc", "9c","player2");
    //assignCard("Ks", "Qh","player1");

    console.log(" END draw section");


// I addeded noLoop() to the setup to go through draw only once during testing.  remove later


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


function assignCard(card1, card2,playerID){

    if (document.getElementById(playerID+"card1")){

        //document.getElementById(playerID+"card1").innerHTML = card1;

        if (playerID==="player2"){
            fill(0, 255, 0);
        } else if (playerID==="player1"){
            fill(0, 0, 255);

            // sizing is not understood yet so just trial and error

            //image(as,10,10,windowWidth/6, as.height*2*(as.height/as.width));

            //image(ks,10+10+windowWidth/6,10,windowWidth/6, ks.height*(ks.height/ks.width)/2);


        } 

        
        ellipse(222,222,44,44);

    }

    if (document.getElementById(playerID+"card2")){

        //document.getElementById(playerID+"card2").innerHTML = card2;

    }

} // end assignCard

function mousePressed() {

    return false; // prevent any default behaviour

} // end mousePressed



