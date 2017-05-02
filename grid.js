var drawGrid = function(startX, startY, w, h) {
    
    var gfx = game.add.graphics(startX, startY);
        gfx.lineStyle(3, 0xffffff, 5);

    for (x=startX;x<=w;x+=squareSize) {
        for (y=startY;y<=h;y+=squareSize) {
            gfx.moveTo(x, startY);
            gfx.lineTo(x, h);
            gfx.endFill();
            gfx.moveTo(startX, y);
            gfx.lineTo(w, y);
            gfx.endFill();
        }
    }
}

var waitingRoom = ["","","","","","",""];

//funktio, joka täyttää sivussa olevan ruudukon, josta raahataan putket peliruudukkoon. ei ole vielä linkattu ruuduukkoon = ei toimi...
function fillWaitingRoom(){
    for(var y = 0; y < 7; y++)
        if(waitingRoom[y] == ""){
            waitingRoom[y] = createPipe
}
    
    
    
    
    
    
    
}

