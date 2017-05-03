var game = new Phaser.Game(843, 490, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var gridH = 490;
var gridW = 735;
var squareSize = 70;

function preload() {
    game.stage.backgroundColor = '#005a77';
    game.load.image('start', 'putket/start.png');
    game.load.image('straight1', 'putket/straight1.png');
    game.load.image('straight2', 'putket/straight2.png');
    game.load.image('corner1', 'putket/corner1.png');
    game.load.image('corner2', 'putket/corner2.png');
    game.load.image('corner3', 'putket/corner3.png');
    game.load.image('corner4', 'putket/corner4.png');
    //Tällä ladataan spritet (esim. ne kalat)
    //game.load.spritesheet('fisu', 'assets/dude.png', 32, 48);
}

function create() {
    drawGrid(1.5*squareSize, 0, gridW, gridH);
    drawGrid(0, 0, squareSize, gridH);
    var pipesInGame = game.add.group();
    var pipesWaiting = game.add.group();
    startingPipe = game.add.sprite(140, 350, 'start');
    fillWaitingRoom();
    drawWaitingRoom();
    //spriten luominen
    //game.add.sprite(0, 0, 'fisu');
    
    
}


function update() {
    fillWaitingRoom
}

//var bench7 = ["","","","","","",""];

function drawWaitingRoom(){
  for(var i=0; i<7; i++){
    var x = game.add.sprite(0,i*squareSize, waitingRoom[i].img);
    enableDrag(x)
    x.input.enableSnap(squareSize, squareSize, false, true);
    //x.events.onDragStop.add(fixLocation);
    waitingRoom[i]=x
  }
};

function fixLocation(item) {

    // Move the items when it is already dropped.
    if (item.x < 90) {
        item.x = 90;
    }
    else if (item.x > 180 && item.x < 270) {
        item.x = 180;
    }
    else if (item.x > 360) {
        item.x = 270;
    }

}


/*function enableDragWaiting(){
    for(var i=0; i<7; i++){
        enableDrag(waitingRoom[i]);
    }
};
*/