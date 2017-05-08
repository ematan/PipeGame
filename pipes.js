//uusi putki-olio, joka ottaa ominaisuuksia alla olevista "putkityypeistä"
function createPipe(){
    var arvottu = allPipes[randomPipe()];
    return arvottu;
};

var straight1={
    up: true,
    down: true,
    left: false,
    rigth: false,
    open: [1,3],    //up:1, down:3, left:4, right:2
    img: 'straight1',
    origY: 0
};
var straight2={
    up: false,
    down: false,
    left: true,
    rigth: true,
    open: [2,4],
    img: 'straight2',
    origY: 0
};
var corner1={
    up: true,
    down: false,
    left: false,
    rigth: true,
    open: [1,2],
    img: 'corner1',
    origY: 0
};
var corner2={
    up: false,
    down: true,
    left: false,
    rigth: true,
    open: [2,3],
    img: 'corner2',
    origY: 0
};
var corner3={
    up: false,
    down: true,
    left: true,
    rigth: false,
    open: [3,4],
    img: 'corner3',
    origY: 0
};
var corner4={
    up: true,
    down: false,
    left: true,
    rigth: false,
    open: [1,4],
    img: 'corner4',
    origY: 0
};
var startingPipe={
    up: false,
    down: false,
    left: false,
    rigth: true,
    open: [2],
    img: 'start'
};
var allPipes = [
    straight1,
    straight2,
    corner1,
    corner2,
    corner3,
    corner4
];


function getRandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
};

function randomPipe(){
    var x = getRandomInteger(0, (allPipes.length-1));
    return x
}

function enableDrag(pipe){
    pipe.inputEnabled = true;
    pipe.input.enableDrag(true);
    pipe.events.onDragStart.add(onDragStart, this);
    //pipe.events.onDragStop.add(onDragStop, this);
}

function unEnableDrag(pipe){
    pipe.inputEnabled = false;
    pipe.input.enableDrag(false);
}

//function onDragStop(sprite, pointer) {}

var currentY;
function getCurrentY(){currentY};

function onDragStart(sprite, pointer){
  //currentY = Math.floor(pointer.y/squareSize);
  result = sprite.key + " starts at y:" + pointer.y + " and currentY:" +currentY

}

//vain vasemmasta ruudukosta voi dragata vain oikeaan  ruudukkoon, eli tsekkaa koordinaateilla, että putket pysyvät ruudukkojen sisällä. ei toimi vielä? pitää kutsua tätä funktiota silloin, kun yritetään liikuttaa putkenpalaa
/*function checkPipeLocation(pipe){
    if((pipe.y >= 0 || pipe.y <= cheigth) && (pipe.x >= 0 || pipe.x <= squareSize)){
        enableDrag
    }
    else{unEnableDrag}
};*/

//lisää putken peliruudukkoon
function addPipe(pipe, x, y){
    megaArray[x][y] = pipe;
};

//poistaa putken peliruudukosta
function deletePipe(pipe, x, y){
    delete megaArray[pipe[x]][pipe[y]];
};

var connectedArray = [];
function oppositeDir(prevDir){
  if(prevDir==1) return 3;
  if(prevDir==2) return 4;
  if(prevDir==3) return 1;
  if(prevDir==4) return 2;
};

var startCoord = [3, 5]
var nextCoord = startCoord
function updateNextFromMega(dir){
 if(dir==1) return nextCoord = [nextCoord[0],nextCoord[1]-1];
 if(dir==2) return nextCoord = [nextCoord[0]+1,nextCoord[1]];
 if(dir==3) return nextCoord = [nextCoord[0],nextCoord[1]+1];
 if(dir==4) return nextCoord = [nextCoord[0]-1,nextCoord[1]];
};

//checkNext(startCoord,2)

function checkNext(coords, prevDir){
  //voittoehto
  if(coords[0]==12 && coords[1]==1){
    console.log("WINWIN!!");
    win=true
  } //wingame
  else if(coords[0] <3 || coords[0]>11 || coords[1]<0 || coords[1]>6 ){
    console.log("LOSE :(");
    lose=true
} //endgame
  else if(megaArray[coords[0]][coords[1]] == undefined){
    console.log("loppui: "+ coords)
    nextCoord=startCoord
  }
  else{
    console.log(coords + " + PrevDir:" + prevDir)
    //isdefined
    var pipeName = megaArray[coords[0]][coords[1]].key;
    var tyyppi = megaArray[coords[0]][coords[1]].customPipeIndex//allPipes.indexOf(pipeName);   ///voiko spritelle antaa ylimääräisiä tietoja/parametrejä
    if(allPipes[tyyppi]== undefined){
      lose=true
    }else{
    var comingDir = oppositeDir(prevDir);    // 4
    var indeksi = allPipes[tyyppi].open.indexOf(comingDir);
    if(indeksi==-1){
    //stop execution here
      nextCoord=startCoord
      lose=true
      console.log(connectedArray)
    }else{
      connectedArray.push(coords);
      var direction;
      if (indeksi==0){
        direction = allPipes[tyyppi].open[1]
      }else{
        direction = allPipes[tyyppi].open[0]
      };
      updateNextFromMega(direction);
      console.log("NextCoord: " + nextCoord);

        checkNext(nextCoord, direction)

    }
  }
  }
}
