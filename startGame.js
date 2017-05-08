var startGame = function(game){}

startGame.prototype = {
  	create: function(){
		var play1 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-200,"aloitaPeli",this.playTheGame,this);
        play1.scale.setTo(0.6, 0.6);
		play1.anchor.setTo(0.5,0.5);
        
        var play2 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-100,"aloitaPeli",this.playTheGame,this);
        play2.scale.setTo(0.6, 0.6);
		play2.anchor.setTo(0.5,0.5);
        
        var play3 = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"aloitaPeli",this.playTheGame,this);
        play3.scale.setTo(0.6, 0.6);
		play3.anchor.setTo(0.5,0.5);
        
        var äänet = this.game.add.button(this.game.world.centerX,this.game.world.centerY+100,"aloitaPeli",this.playTheGame,this);
        äänet.scale.setTo(0.6, 0.6);
		äänet.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("level1");
	}
}
