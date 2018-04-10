var num = 50;
var x = [];
var y = [];
function setup() {
    createCanvas(800, 600);
    noStroke();
    print(num);
    for (var i = 0; i < num; i++) {
        x[i] = 0;
        y[i] = 0;
    }
}
function draw() {
    background(0);
    x[0] = mouseX;
    y[0] = mouseY;
    for (var i = num - 1; i > 0; i--) {
        x[i] = x[i - 1];
        y[i] = y[i - 1];
    }
    for (var i = num - 1; i > 0; i--) {
        fill(255 / (1 + i));
        ellipse(x[i], y[i], 20, 20);
    }
}
