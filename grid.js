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
