
var matrix = []


// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var wolfArr = [];
var governmentArr = [];
var side = 10;


function setup() {
    for (var i = 0; i <= 20; ++i) {
        matrix[i] = []
        for (var j = 0; j <= 20; ++j) {
            matrix[i][j] = Math.round(random(4));
            if(i == j && Math.round(random(2)) == 1) {
                matrix[i][j] = 5;
            }
        }
    }
    //var dr = new Wolf(1,1,4)
    //dr.getNewCoordinates()
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    //pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);

            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x, y, 3);
                predatorArr.push(pr);
            }
            else if(matrix[y][x] == 5){
                var wf = new Wolf(x, y, 5);
                wolfArr.push(wf);
            }
            else if(matrix[y][x] == 4){
                var gv = new Government(x, y, 4);
                governmentArr.push(gv);
            }
        }
    }

}
//draw uxaki nerkuma
function draw() {
 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
        }
        }
    }
    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        //grassEaterArr[i].move();
        grassEaterArr[i].eat();
        //grassEaterArr[i].mul();
       // grassEaterArr[i].die();
    }
    for (var i in predatorArr) {
        //predatorArr[i].move();
        predatorArr[i].eat();
        //predatorArr[i].mul();
        //predatorArr[i].die();
    }
    for (var i in wolfArr) {
       // wolfArr[i].move();
        wolfArr[i].eat();
       // wolfArr[i].mul();
       // wolfArr[i].die();
    }
    for (var i in governmentArr) {
       // governmentArr[i].move();
        governmentArr[i].eat();
       // governmentArr[i].mul();
       // governmentArr[i].die();
    }
}

