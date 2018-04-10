//Mack Freitag
//Newton's Cradle

var pens = []; // array of Pendulums
var dragConstant = .995; // arbitary damping
var gravityConstant = 1.4; // arbitrary gravity
var numofpens = 5; // number of pendulums in the cradle
var spacing = 30; // spacing between the pendulums

function setup() {
    createCanvas(750, 750);
    for (var i = 0; i < numofpens; i++) {
        pens[i] = new Pendulum(250 + spacing * i, 250); // filling the array with pendulums
    }
}

function draw() {
    background(255);
    for (var i in pens) {
        pens[i].go();
        for (var j in pens) {
            if (i == j) {
            } else {
                pens[i].intersecting(pens[j]);
            }
        }
    }
    strokeWeight(10);
    stroke(100);
    noFill();
    rect(250 - spacing * 1.5, 250, spacing * (numofpens + 2), 250, 20);
    fill(100, 50, 0);
    stroke(100, 50, 0);
    rect(250 - spacing - 20, 475, spacing * (numofpens + 1) + 40, 25);
}
function mousePressed() {
    for (var i in pens) {
        pens[i].clicked(mouseX, mouseY);
    }
}
function mouseReleased() {
    for (var i in pens) {
        pens[i].stopDragging();
    }
}
