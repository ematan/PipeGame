var drawGrid = function(startX, startY, w, h) {

    var gfx = game.add.graphics(startX, startY);
    gfx.lineStyle(3, 0xffffff, 5);

    for (x=startX; x<=w; x+=squareSize) {
        for (y=startY; y<=h; y+=squareSize) {
            gfx.moveTo(x, startY);
            gfx.lineTo(x, h);
            gfx.endFill();
            gfx.moveTo(startX, y);
            gfx.lineTo(w, y);
            gfx.endFill();
        }
    }
};

var waitingRoom = ["","","","","","",""];

//funktio, joka täyttää sivussa olevan ruudukon, josta raahataan putket peliruudukkoon. ei vielä täytä automaattisesti tyhjiä ruutuja waitingRoomissa.
function fillWaitingRoom(){
    for(var y = 0; y < 7; y++){
        if(waitingRoom[y] == ""){
            var temp = createPipe();
            temp.origY = y
            waitingRoom[y] = temp;
        }
    }
};

console.log(waitingRoom)

//tässä luodaan itse peliruudukko
var megaArray = new Array(9);
function createMega(){
  for (var i = 0; i < 12; i++) {
    megaArray[i] = new Array(7);
  }
};
// näin täytetään...: x[5][12] = 3.0;
