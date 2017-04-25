/*var drawGrid = function(startX, startY, w, h) {
    var gfx = game.add.graphics(startX, startY);
    var y = startY;
    //gfx.beginFill(0xFF3300);
    gfx.lineStyle(3, 0xffffff, 5);
    for (x=startX; x<=w; x+=squareSize) {
       gfx.moveTo(x, -30);
        for (y=startY; y<=h; y+=squareSize) {
            console.log(x)
            gfx.lineTo(x, y);
            gfx.endFill();
        }
    }
   
    window.graphics = gfx;
};


var drawGrid2 = function(startX, startY, w, h) {
        var gfx = game.add.graphics(startX, startY);
        gfx.lineStyle(3, 0xffffff, 5);


        for (x=startX; x<=w; x+=60) {
            for (y=startY; y<=h; y+=60) {
                for (x=startX; x<=w; x+=squareSize) {
                    for (y=startY; y<=h; y+=squareSize) {
                        gfx.moveTo(x, y);
                        gfx.lineTo(x, h);
                        //gfx.endFill();
                    }
                }
            }
        }
}*/

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