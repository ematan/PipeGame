
var win = false
var lose = false

var winGame = function(game){}
winGame.prototype = {
  create: function(){
  restartStuff();
  var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"aloitaPeli",this.playTheGame,this);
  playButton.scale.setTo(0.7, 0.7);
  playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
  this.game.state.start("level1",true,true);
  }
}

var loseGame = function(game){}
loseGame.prototype = {
  create: function(){
  restartStuff();
  var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"aloitaPeli",this.playTheGame,this);
  playButton.scale.setTo(0.7, 0.7);
  playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
  this.game.state.start("level1");
  }
}

function restartStuff(){
  win=false;
  lose=false;
  megaArray = new Array(9);
  waitingRoom = ["","","","","","",""],
  nextCoord = startCoord
}
