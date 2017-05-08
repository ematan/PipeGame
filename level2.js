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
          /*var shark = this.game.add.sprite(558, 75, 'shark');
          var swim = shark.animations.add('swim');
          shark.animations.play('swim', 10, true);*/
          var jellyfish = this.game.add.sprite(285, 210, 'jellyfish');
          var wiggle = jellyfish.animations.add('wiggle');
          jellyfish.animations.play('wiggle', 5, true);
          jellyfish.scale.setTo(1.3, 1.3);
          megaArray[4][3]="defined"
          var jellyfish2 = this.game.add.sprite(635, 350, 'jellyfish');
          var wiggle = jellyfish2.animations.add('wiggle');
          jellyfish2.animations.play('wiggle', 5, true);
          jellyfish2.scale.setTo(1.3, 1.3);
          megaArray[9][5]="defined"
          var jellyfish3 = this.game.add.sprite(495, 140, 'jellyfish');
          var wiggle = jellyfish3.animations.add('wiggle');
          jellyfish3.animations.play('wiggle', 5, true);
          jellyfish3.scale.setTo(1.3, 1.3);
          megaArray[7][2]="defined"
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