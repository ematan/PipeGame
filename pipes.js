//uusi putki-olio, joka ottaa ominaisuuksia alla olevista "putkityypeistä"
function createPipe(){
    var arvottu = allPipes[randomPipe()]
    var pipe = {
        up: arvottu.up ,
        down: arvottu.down,
        left: arvottu.left,
        rigth: arvottu.rigth,
        img: arvottu.img
    }
    return pipe
}

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
var conrner1={
    up: true,
    down: false,
    left: false,
    rigth: true,
    img: 'corner1'
};
var conrner2={
    up: false,
    down: true,
    left: false,
    rigth: true,
    img: 'corner2'
};
var conrner3={
    up: false,
    down: true,
    left: true,
    rigth: false,
    img: 'corner3'
};
var conrner4={
    up: true,
    down: false,
    left: true,
    rigth: false,
    img: 'corner4'
}

var startingPipe={
    up: false,
    down: false,
    left: false,
    rigth: true,
    img: 'start'
}

var allPipes = [
    straight1,
    straight2,
    conrner1,
    conrner2,
    conrner3,
    conrner4
];


function getRandomInteger(min, max) {
    return (Math.random() * (max - min) + min)|2;
};   

function randomPipe(){
    var x = getRandomInteger(0, allPipes.length-1);
    return x;
}

function enableDrag(pipe){
    pipe.inputEnabled = true;
    pipe.input.enableDrag(true);
}

function unEnableDrag(pipe){
    pipe.inputEnabled = false;
    pipe.input.enableDrag(false);
}

//vain vasemmasta ruudukosta voi dragata vain oikeaan  ruudukkoon, eli tsekkaa koordinaateilla, että putket pysyvät ruudukkojen sisällä.
/*function checkPipeLocation(pipe){
    if()
}*/








//tuskin tarvii
/*function pipeToGrid(newX, newY, pipeIndex){
    var newPipe = straight1
    newPipe.x = newX
    newPipe.y = newY
    pipesInGame.add(newPipe)
};

function drawPipe(context){
    for(var i=0; i<pipesInGame.length;i++){
        var m = pipesInGame[i]
        context.drawImage(m.img, 100+m.x*squareSize, m.y*squareSize);
    }
};*/






