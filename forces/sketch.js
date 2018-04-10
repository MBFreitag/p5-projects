var c;
function setup() {
    createCanvas(750, 750);
 c = new Ball();
}
function draw() {
    background(180);
    c.display();
    c.move();
    c.edgeCheck();
}

function Ball() {
    this.diam = random(10, 75);
		this.loc = new Vector(random(this.diam,width-this.diam),random(this.diam,height-this.diam));
    this.vel = new Vector(random(-5, 5),random(-5, 5));
    this.mass=3.1415*(this.diam/2)*(this.diam/2);

    this.display = function() {
        ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
    };
    this.move = function() {
        this.loc.add(this.vel);
    };
    this.edgeCheck = function() {
        if ((this.loc.x >= width - this.diam / 2) || (this.loc.x <= this.diam / 2)) {
            this.vel.mult(new Vector(-1,0));
        }
        if ((this.loc.y >= height - this.diam / 2) || (this.loc.y <= this.diam / 2)) {
            this.vel.mult(new Vector(0,-1));
        }
    };
    this.intersecting = function(obj) {
        var distance = dist(this.x, this.y, obj.x, obj.y);

        if (distance <= this.diam / 2 + obj.diam / 2) {
            collision(this, obj);
            return true;
        } else {
            return false;
        }
    };
    this.resetVels = function(tempvel) {
        this.vel=tempvel;
    };
}
