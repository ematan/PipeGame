var drawGrid = function(startX, startY, w, h, game) {

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

function updateY(game){
  currentY = Math.floor(game.input.mousePointer.y/squareSize)
}

var result = ""
function render(){
  game.debug.text(result, 100, 200);
}

//var bench7 = ["","","","","","",""];
var latestY = 0;

function drawWaitingRoom(game){
  for(var i=0; i<7; i++){
    var x = game.add.sprite(0,i*squareSize, waitingRoom[i].img);
    x.customPipeIndex = allPipes.indexOf(waitingRoom[i])
    enableDrag(x);
    x.input.enableSnap(squareSize, squareSize, false, true);
    var a = i;
    //x.events.onDragStart.add(function(){latestY=a});
    x.events.onDragStop.add(fixLocation, this);
    //x.events.onDragStop.add(fixLocation(x, startLoc));
    //console.log(latestY);
    waitingRoom[i]=x;
  }
};

function fixLocation(item) {
    // Move the items when it is already dropped.
    console.log(megaArray)
    var newLocX = (item.x/squareSize);
    var newLocY = (item.y/squareSize);
    //console.log(newLocX + " " + newLocY)
    console.log(newLocY + "-yLoc");
    if (item.x < 3*squareSize || item.x > 11*squareSize || megaArray[newLocX][newLocY]!=undefined) {
        item.x = 0;
        //console.log(currentY);
        item.y = currentY*squareSize;
    }

    else{
        unEnableDrag(item)
        console.log(item.y/squareSize)
        var newLocX = (item.x/squareSize);
        var newLocY = (item.y/squareSize);
        item.x = newLocX*squareSize;
        item.y = newLocY*squareSize;
        console.log(newLocX+","+newLocY)

        console.log("Array1:" + megaArray[newLocX][newLocY])
        megaArray[newLocX][newLocY] = item;
        console.log("Array2:" + megaArray[newLocX][newLocY])
        //tässä alla luodaan uuttaa putkea otetun tilalle
        waitingRoom[currentY] = createPipe();
        checkNext(startCoord,2);
        updateW=true;
    }

};
