var game = new Phaser.Game(900, 590, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render }, true);

var gridH = 490;
var gridW = 735;
var squareSize = 70;

function preload() {
    game.stage.backgroundColor = '';
    game.load.image('start', 'putket/start.png');
    game.load.image('straight1', 'putket/straight1.png');
    game.load.image('straight2', 'putket/straight2.png');
    game.load.image('corner1', 'putket/corner1.png');
    game.load.image('corner2', 'putket/corner2.png');
    game.load.image('corner3', 'putket/corner3.png');
    game.load.image('corner4', 'putket/corner4.png');
    game.load.image('menu', 'valikko.png');
    //Tällä ladataan spritet (esim. ne kalat)
    //game.load.spritesheet('fisu', 'assets/dude.png', 32, 48);
}

function create() {
    drawGrid(1.5*squareSize, 0, gridW, gridH);
    drawGrid(0, 0, squareSize, gridH);
    //drawTimer(0, 7*squareSize, 11*squareSize, squareSize);
    var pipesInGame = game.add.group();
    var pipesWaiting = game.add.group();
    startingPipe = game.add.sprite(140, 350, 'start');
    endingPipe = game.add.sprite(840, 70, 'straight2');
    createMega();
    fillWaitingRoom();
    drawWaitingRoom();
    createTimer();
    createPause();
    //spriten luominen
    //game.add.sprite(0, 0, 'fisu');
}
 
function render() {
    game.debug.text('DEADLINE LÄHESTYY : ' + timer.duration.toFixed(0), 100, 525, { font: 'bold 25pt Annie Use Your Telescope' , fill: '#ff2626'});
}

var updateW = false

function update() {
    game.input.onDown.add(updateY, this)
    //fillWaitingRoom();
    if(updateW){
      drawWaitingRoom();
      updateW =false
    }
}


