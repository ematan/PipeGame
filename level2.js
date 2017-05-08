var level2 = function(game){}

  level2.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '';
        updateW = false;
    },
    create: function() {
          drawGrid(1.5*squareSize, 0, gridW, gridH, this.game);
          drawGrid(0, 0, squareSize, gridH, this.game);
          var pipesInGame = this.game.add.group();
          var pipesWaiting = this.game.add.group();
          startingPipe = this.game.add.sprite(140, 350, 'start');
          endingPipe = this.game.add.sprite(840, 70, 'straight2');
          createMega();
          fillWaitingRoom();
          var mermaid = game.add.sprite(300, 200, 'mermaid');
          var walk = mermaid.animations.add('turn');
          mermaid.animations.play('turn', 30, true);
          drawWaitingRoom(this.game);
          //createTimer();
          //createPause(this.game);
          //createMusic(this.game);
    },
    update: function(){
        var a = this.game;
        this.game.input.onDown.add(function () {updateY(a);}, this)
        //fillWaitingRoom();
        if(updateW){
          drawWaitingRoom(this.game);
          updateW =false
        }
    },
    render: function(){
        //game.debug.text('DEADLINE LÄHESTYY : ' + timer.duration.toFixed(0), 100, 525, { font: 'bold 25pt Annie Use Your Telescope' , fill: '#ff2626'});
    }
  };

function create() {

    var mermaid = game.add.sprite(300, 200, 'mermaid');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = mummy.animations.add('turn');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    mummy.animations.play('turn', 30, true);

}