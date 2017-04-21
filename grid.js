$(document).ready(function(){
    
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');
    
    var cheigth = 490;
    var cwidth = 800;
    var squareSize = 70
    
    var drawGrid = function(startX, startY, w, h, id) {

        for (x=startX;x<=w;x+=squareSize) {
            for (y=startY;y<=h;y+=squareSize) {
                ctx.moveTo(x, startY);
                ctx.lineTo(x, h);
                ctx.stroke();
                ctx.moveTo(startX, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }

        };

        drawGrid(100, 0, cwidth, cheigth, "grid");
        drawGrid(0, 0, squareSize, cheigth, "grid");

})