var game = new Phaser.Game(870, 490, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var cheigth = 490;
var cwidth = 870;
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
    drawGrid(48+squareSize, 0, cwidth, cheigth);
    drawGrid(0, 0, squareSize, cheigth);
    var pipesInGame = game.add.group();
    var pipesWaiting = game.add.group();
    startingPipe = game.add.sprite(170, 350, 'start');
    enableDrag(startingPipe)
    fillWaitingRoom();
    //spriten luominen
    //game.add.sprite(0, 0, 'fisu');
    

}

function update() {
    fillWaitingRoom
}


var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;
var pos7;

var bench7 = [pos1, pos2, pos3, pos4, pos5, pos6, pos7]

function drawWaitingRoom(){
  for(var i=0; i<5, i++){
    bench[i] = game.add.sprite(0,i*squareSize, waitingRoom[i].img)
  }
}
