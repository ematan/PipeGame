var game = new Phaser.Game(900, 590, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

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
    game.debug.text('DEADLINE LÄHESTYY : ' + timer.duration.toFixed(0), 100, 550, { font: 'bold 25pt Annie Use Your Telescope' , fill: '#ff2626'});
}

var updateW = false

function update() {
    game.input.onDown.add(updateY, this)
    //fillWaitingRoom();
    if(updateW){
      drawWaitingRoom();
      updateW =false
    }
    //BH.progress.drawRoundedRect(101,501,298*percentDone,25,10);
}




/*
var progress = game.add.image(0, 0, "rectangle.jpg");
progress.width = 0;
progress.initialWidth = 300 // the original image width in pixels// then on 
updateprogress.width = percentDone*progress.initialWidth; // percentDone should be in decimals 
//20% = 0.2// so this will finaly result in 
//1 * 300 = 100%


var drawTimer = function(startX, startY, w, h) {

    var gfx = game.add.graphics(startX, startY);
    gfx.lineStyle(3, 0xffffff, 5);

    for (x=startX; x<=w; x+=11*squareSize) {
        for (y=startY; y<=h; y+=squareSize) {
            gfx.moveTo(x, startY);
            gfx.lineTo(x, h);
            gfx.endFill();
            gfx.moveTo(startX, y);
            gfx.lineTo(w, y);
            gfx.endFill();
        }
    }
};


var progress = {
    game.add.graphics(0,0);
    progress.lineStyle(2, '0x000000');
    //For drawing progress
    progress.beginFill('0x000000',1);
    progress.drawRoundedRect(100,500,300,27,10);
    progress.endFill();
    progress.beginFill('0x999999',1); 
}
*/
