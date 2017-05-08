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
          var shark = this.game.add.sprite(558, 80, 'shark');
          var swim = shark.animations.add('swim');
          shark.animations.play('swim', 10, true);
          megaArray[8][1]="defined"
          megaArray[8][2]="defined"
          megaArray[9][1]="defined"
          megaArray[9][2]="defined"
          var shark2 = this.game.add.sprite(280, 150, 'shark');
          var swim = shark2.animations.add('swim');
          shark2.animations.play('swim', 10, true);
          megaArray[4][2]="defined"
          megaArray[4][3]="defined"
          megaArray[5][2]="defined"
          megaArray[5][3]="defined"
          var shark3 = this.game.add.sprite(420, 360, 'shark');
          var swim = shark3.animations.add('swim');
          shark3.animations.play('swim', 10, true);
          megaArray[6][5]="defined"
          megaArray[6][6]="defined"
          megaArray[7][5]="defined"
          megaArray[7][6]="defined"
          var shark4 = this.game.add.sprite(630, 290, 'shark');
          var swim = shark4.animations.add('swim');
          shark4.animations.play('swim', 10, true);
          megaArray[9][4]="defined"
          megaArray[9][5]="defined"
          megaArray[10][5]="defined"
          megaArray[10][4]="defined"
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