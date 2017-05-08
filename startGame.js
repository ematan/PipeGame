var startGame = function(game){}

startGame.prototype = {
  	create: function(){
		var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"aloitaPeli",this.playTheGame,this);
        playButton.scale.setTo(0.7, 0.7);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("level1");
	}
}
