//uusi putki-olio, joka ottaa ominaisuuksia alla olevista "putkityypeistä"
function createPipe(){
    var arvottu = allPipes[randomPipe()];
    return arvottu;
};

var straight1={
    up: true,
    down: true,
    left: false,
    rigth: false,
    img: 'straight1'
};
var straight2={
    up: false,
    down: false,
    left: true,
    rigth: true,
    img: 'straight2'
};
var corner1={
    up: true,
    down: false,
    left: false,
    rigth: true,
    img: 'corner1'
};
var corner2={
    up: false,
    down: true,
    left: false,
    rigth: true,
    img: 'corner2'
};
var corner3={
    up: false,
    down: true,
    left: true,
    rigth: false,
    img: 'corner3'
};
var corner4={
    up: true,
    down: false,
    left: true,
    rigth: false,
    img: 'corner4'
};
var startingPipe={
    up: false,
    down: false,
    left: false,
    rigth: true,
    img: 'start'
};
var allPipes = [
    straight1,
    straight2,
    corner1,
    corner2,
    corner3,
    corner4
];


function getRandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
};

function randomPipe(){
    var x = getRandomInteger(0, (allPipes.length-1));
    console.log(x)
    return x
}

function enableDrag(pipe){
    pipe.inputEnabled = true;
    pipe.input.enableDrag(true);
}

function unEnableDrag(pipe){
    pipe.inputEnabled = false;
    pipe.input.enableDrag(false);
}

//vain vasemmasta ruudukosta voi dragata vain oikeaan  ruudukkoon, eli tsekkaa koordinaateilla, että putket pysyvät ruudukkojen sisällä. ei toimi vielä? pitää kutsua tätä funktiota silloin, kun yritetään liikuttaa putkenpalaa
function checkPipeLocation(pipe){
    if((pipe.y >= 0 || pipe.y <= cheigth) && (pipe.x >= 0 || pipe.x <= squareSize)){
        enableDrag
    }
    else{unEnableDrag}
};

//lisää putken peliruudukkoon
function addPipe(pipe, x, y){
    megaArray[x][y] = pipe;
};

//poistaa putken peliruudukosta
function deletePipe(pipe, x, y){
    delete megaArray[pipe[x]][pipe[y]];
};

//tarkistaa, että menevätkö putket päällekäin peliruudukolla. Jos menee, niin pitäisi palauttaa alkuperäiselle paikalle.
function checkOverlap(sprite1, sprite2){
    if (sprite1.overlap(sprite2)) {
        //palauta raahattava putki takasin paikallensa.
    }
};


