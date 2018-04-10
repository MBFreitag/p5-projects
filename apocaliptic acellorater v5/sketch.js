var left,
    right;

var obstacles = [];
var obstacleremoval = [];
var obstimer;

var trees = [];
var treeremoval = [];
var treetimer;

var p;

function setup() {
    createCanvas(512, 512);

    obstimer = new Timer(150);
    obstimer.begin();

    treetimer = new Timer(250);
    treetimer.begin();

    p = new Player();
}

function draw() {
    background(51, 112, 15);
    if (obstimer.isFinished()) {
        obstacles.push(new Obstacle());
        obstimer.begin();
    }
    for (var i = obstacles.length - 1; i > 0; i--) {
        obstacles[i].display();
        obstacles[i].scroll();
        if ((p.obsCheck(obstacles[i])) || (obstacles[i].edgeCheck())) {
            obstacles.splice(i, 1);
        }
    }

    if (treetimer.isFinished()) {
        trees.push(new Tree());
        treetimer.begin();
    }
    for (var i = trees.length - 1; i > 0; i--) {
        trees[i].display();
        trees[i].scroll();
    }
    p.display();
    p.left(left);
    p.right(right);

    if (mouseX < p.x) {
        left = true;
    } else {
        left = false;
    }
    if (mouseX > p.x) {
        right = true;
    } else {
        right = false;
    }
}

function Obstacle() {
    this.x = random(64, width - 64);
    this.y = -16;
    this.w = 32;
    this.h = 32;
    this.vel = 2;
    this.display = function() {
        rectMode(CENTER);
        fill(155, 179, 158);
        rect(this.x, this.y, this.w, this.h);
    };
    this.scroll = function() {
        this.y += this.vel;
    }
    this.edgeCheck = function() {
        if (this.y - this.h / 2 > height) {
            return true;
        } else {
            return false;
        }
    };
}
function Player() {
    this.lives = 0;
    this.x = width / 2;
    this.y = height - 128;
    this.w = 32;
    this.h = 32;
    this.vel = 1;
    this.display = function() {
        rectMode(CENTER);
        fill(255, 0, 180);
        rect(this.x, this.y, this.w, this.h);
    };
    this.left = function(b) {
        if (b) {
            this.x -= this.vel;
        }
    };
    this.right = function(b) {
        if (b) {
            this.x += this.vel;
        }
    };
    this.giveLives = function() {
        this.lives = 3;
    };
    this.isAlive = function() {
        if (this.lives > 0) {
            return true;
        } else {
            return false;
        }
    };
    this.obsCheck = function(obs) {
        if ((this.x + this.w / 3 >= obs.x - obs.w / 3) && (this.x - this.w / 4 <= obs.x + obs.w / 3) && (this.y + this.h / 3 >= obs.y - obs.h / 3) && (this.y - this.h / 3 <= obs.y + obs.h / 3)) {
            this.lives -= 1;
            return true;
        } else {
            return false;
        }
    };
}
function Timer(temptotalt) {
    this.savedt = 0;
    this.totalt = temptotalt;
    this.begin = function() {
        this.savedt = millis();
    };
    this.isFinished = function() {
        var passedt = millis() - this.savedt;
        if (passedt > this.totalt) {
            return true;
        } else {
            return false;
        }
    };
}
function Tree() {
    var rand = int(random(1, 3));
    if (rand == 1) {
        this.x = int(random(0, 64));
    } else {
        this.x = int(random(width - 64, width));
    }
    this.y = -48;
    this.w = 64;
    this.h = 96;
    this.vel = 2;

    this.display = function() {
        fill(25, 93, 36);
        rect(this.x, this.y, this.w, this.h);
    };
    this.scroll = function() {
        this.y += this.vel;
    };
    this.edgeCheck = function() {
        if (this.y - this.h / 2 > height) {
            return true;
        } else {
            return false;
        }
    };
}
