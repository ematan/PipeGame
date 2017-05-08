var level1 = function(game){}

  level1.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '';
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
          drawWaitingRoom(this.game);
          //createTimer();
          //createPause(this.game);
          //createMusic(this.game);
    },
    update: function(){
        var a = this.game
        this.game.input.onDown.add(function () {   updateY(a);}, this)
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
  var updateW = false
