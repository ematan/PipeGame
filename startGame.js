var startGame = function(game){}
 
startGame.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(160,160,"Rakenna oma Balticconnector!");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"pelaa",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("level1");
	}
}