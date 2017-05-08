var startGame = {
    
    create: function(){
        
        var nameLabel = game.add.text(100,100, 'Rakenna oma Balticconnector!', {font: 'bold 30px Annie Use Your Telescope', fill: '#ff2626' });
        
        var startLabel = game.add.text(100, 200, 'paina w-nappulaa aloittaaksesi', {font: 'bold 30px Annie Use Your Telescope', fill: '#ff2626' });
        
        var wkey = game.input.keyboard.addkey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.start, this);
    }
    
    start: function(){
        game.state.start('level1');
    }
    
}