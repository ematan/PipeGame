var game = new Phaser.Game(900, 590, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

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
    game.debug.text('DEADLINE LÄHESTYY : ' + timer.duration.toFixed(0), 32, 550);
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

var timer;
var total = 0;

function createTimer() {
    //game.stage.backgroundColor = '#000';
    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 minute
    timer.loop(65000, updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
};

function updateCounter() {
    total++;
};

function createPause() {
    //Code for the pause menu
    //Create a label to use as a button
    pause_label = game.add.text(600, 530, 'Pause', { font: '24px Arial', fill: '#e00000' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        game.paused = true;
        // Then add the menu
        menu = game.add.sprite(gridW/2, gridH/2, 'menu');
        menu.anchor.setTo(0.5, 0.5);
        // And a label to illustrate which menu item was chosen. (This is not necessary)
        choiseLabel = game.add.text(gridW/2, gridH-150, 'Klikkaa valikon ulkopuolella jatkaaksesi', { font: '30px Arial', fill: '#e00000' });
        choiseLabel.anchor.setTo(0.5, 0.5);
    });

    // Add a input listener that can help us return from being paused
    game.input.onDown.add(unpause, self);

    // And finally the method that handels the pause menu
    function unpause(event){
        // Only act if paused
        if(game.paused){
            // Calculate the corners of the menu
            var x1 = gridW/2 - 270/2, x2 = gridW/2 + 270/2,
                y1 = gridH/2 - 180/2, y2 = gridH/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];
                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;
                // Calculate the choice 
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);
                // Display the choice
                choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                // Remove the menu and the label
                menu.destroy();
                choiseLabel.destroy();

                // Unpause the game
                game.paused = false;
            }
        }
    };
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
