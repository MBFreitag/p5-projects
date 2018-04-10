var clouds;
function setup() {
    createCanvas(800, 600);
    clouds = new Cloud();
    clouds.setvals();
}

function draw() {
    background(5, 155, 255);
    clouds.display();
    clouds.wind();
}

function Cloud() {
    this.x = width + 50;
    this.y = random(0, height);
    this.wind = 1;
    this.w = [];
    this.h = [];
    this.sepx = [];
    this.sepy = [];
    this.c = random(215, 255);

    this.setvals = function() {
        for (var i = 0; i < 5; i++) {
            this.w[i] = random(40, 70);
        }
        for (var i = 0; i < 5; i++) {
            this.h[i] = random(20, 60);
        }
        for (var i = 0; i < 4; i++) {
            this.sepx[i] = random(0, 30);
        }
        for (var i = 0; i < 4; i++) {
            this.sepy[i] = random(-10, 10);
        }
    };
    this.display = function() {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.w[0], this.h[0]);
        ellipse(this.x + this.sepx[0], this.y + this.sepy[0], this.w[1], this.h[1]);
        ellipse(this.x + this.sepx[0] + this.sepx[1], this.y + this.sepy[1], this.w[2], this.h[2]);
        ellipse(this.x + this.sepx[0] + this.sepx[1] + this.sepx[2], this.y + this.sepy[2], this.w[3], this.h[3]);
        ellipse(this.x + this.sepx[0] + this.sepx[1] + this.sepx[2] + this.sepx[3], this.y + this.sepy[3], this.w[4], this.h[4]);
    };
    this.wind = function() {
        this.x += -1;
    };
    this.edgeCheck = function() {
        if (this.x + 500 < 0) {
            return true;
        } else {
            return false;
        }
    };
}
