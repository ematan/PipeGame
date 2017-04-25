var img1 = new Image
img1.src="man.jpg"

var straight1={
    x: 0,
    y: 0,
    up: true,
    down: true,
    left: false,
    rigth: false,
    img: document.createElement('straight1') 
};
var straight2={
    up: false,
    down: false,
    left: true,
    rigth: true
};
var conrner1={
    up: true,
    down: false,
    left: false,
    rigth: true
};
var conrner2={
    up: false,
    down: true,
    left: false,
    rigth: true
};
var conrner3={
    up: false,
    down: true,
    left: true,
    rigth: false
};
var conrner4={
    up: true,
    down: false,
    left: true,
    rigth: false
}

var startingPipe={
    up: false,
    down: false,
    left: false,
    rigth: true
}

var allPipes = [
    straight1,
    straight2,
    conrner1,
    conrner2,
    conrner3,
    conrner4
];

function pipeToGrid(newX, newY, pipeIndex){
    var newPipe = straight1
    newPipe.x = newX
    newPipe.y = newY
    pipesInGame.add(newPipe)
};

//tuskin tarvii
/*function drawPipe(context){
    for(var i=0; i<pipesInGame.length;i++){
        var m = pipesInGame[i]
        context.drawImage(m.img, 100+m.x*squareSize, m.y*squareSize);
    }
};*/







