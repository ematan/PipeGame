$(document).ready(function(){
    
    var drawGrid = function(startX, startY, w, h, id) {
        var canvas = document.getElementById("game");
        var ctx = canvas.getContext('2d');
        ctx.canvas.width  = w;
        ctx.canvas.height = h;

        for (x=startX;x<=w;x+=60) {
            for (y=startY;y<=h;y+=60) {
                ctx.moveTo(x, startY);
                ctx.lineTo(x, h);
                ctx.stroke();
                ctx.moveTo(startX, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }

        };

        drawGrid(50, 50, 600, 420, "grid");

})