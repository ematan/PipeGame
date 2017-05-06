var music;

function resumeMusic(){
    music.resume();
}

function pauseMusic(){
    music.pause();
}

function createMusic(){
    music = game.add.audio('mystery');
    music.loopFull();
}
