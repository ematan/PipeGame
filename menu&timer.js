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
    pause_label = game.add.text(600, 530, 'Pause', { font: 'bold 25pt Annie Use Your Telescope' , fill: '#ff2626'});
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        game.paused = true;
        // Then add the menu
        menu = game.add.sprite(gridW/2, gridH/2, 'valikko.png');
        menu.anchor.setTo(0.5, 0.5);
        // And a label to illustrate which menu item was chosen. (This is not necessary)
        choiseLabel = game.add.text(gridW/2+50, gridH-150, 'Klikkaa valikon ulkopuolella aloittaaksesi/jatkaaksesi', { font: 'bold 30px Annie Use Your Telescope', fill: '#ff2626' });
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
                var choisemap = ['taso1', 'taso2', 'taso3', 'äänet', 'ohjeet', 'tekijät'];
                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;
                // Calculate the choice 
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);
                // Display the choice
                if(choisemap[choise]=='taso1'){
                    
                }
                else if(choisemap[choise]=='taso2'){
                    
                }
                else if(choisemap[choise]=='taso3'){
                    
                }
                else if(choisemap[choise]=='äänet'){
                    
                }
                else if(choisemap[choise]=='ohjeet'){
                    
                }
                else if(choisemap[choise]=='tekijät'){
                    
                }
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
