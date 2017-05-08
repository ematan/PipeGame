var level3 = function(game){}

  level3.prototype = {
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
          var mermaid = this.game.add.sprite(295, 215, 'mermaid');
          var turn = mermaid.animations.add('turn');
          /*mermaid.animations.play('turn', 4, true);
          mermaid.scale.setTo(1.3, 1.3);
          //mermaid.open = [8]
          megaArray[4][3]="defined"*/
          var shark = this.game.add.sprite(558, 75, 'shark');
          var swim = shark.animations.add('swim');
          shark.animations.play('swim', 10, true);
          /*var jellyfish = this.game.add.sprite(400, 200, 'fellyfish');
          var wiggle = jellyfish.animations.add('wiggle');
          jellyfish.animations.play('wiggle', 30, true);*/
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