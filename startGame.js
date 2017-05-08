var startGame = function(game){}

var playMusic = true;
var music;

startGame.prototype = {
  	create: function(){
		var play1 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-200,"aloitaPeli",this.playLevel1,this);
        play1.scale.setTo(0.6, 0.6);
		play1.anchor.setTo(0.5,0.5);
        
        var play2 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-100,"aloitaPeli",this.playLevel2,this);
        play2.scale.setTo(0.6, 0.6);
		play2.anchor.setTo(0.5,0.5);
        
        var play3 = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"aloitaPeli",this.playLevel3,this);
        play3.scale.setTo(0.6, 0.6);
		play3.anchor.setTo(0.5,0.5);
        
        var äänet = this.game.add.button(this.game.world.centerX,this.game.world.centerY+100,"aloitaPeli",this.soundCheck,this);
        äänet.scale.setTo(0.6, 0.6);
		äänet.anchor.setTo(0.5,0.5);
        
        music = this.game.add.audio('mystery');
        music.loopFull();
	},
	playLevel1: function(){
		this.game.state.start("level1");
	},
    playLevel2: function(){
		this.game.state.start("level2");
	},
    playLevel3: function(){
		this.game.state.start("level3");
	},
    soundCheck: function(){
		if(playMusic==true){
            game.input.onDown.add(music.pause(), this);
            playMusic=false
        }
        else if(playMusic==false){
            game.input.onDown.add(music.resume(), this);
            playMusic=true
        }
	}
};
