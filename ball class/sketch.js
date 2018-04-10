var balls = [];
function setup() {
    createCanvas(750, 750);
    for (var i = 0; i < 15; i++) {
        balls[i] = new Ball();
    }
}
function draw() {
    background(180);
    for (var i in balls) {
        balls[i].display();
        balls[i].move();
        balls[i].edgeCheck();
        for (var j in balls) {
            if (i == j) {
						}else{
                balls[i].intersecting(balls[j]);
            }
        }
			}
    }

function Ball() {
    this.diam = random(10, 75);
		this.x = random(this.diam,width-this.diam);
    this.y = random(this.diam,height-this.diam);
    this.xvel = random(-5, 5);
    this.yvel = random(-5, 5);
		this.r=random(255);
		this.g=random(255);
		this.b=random(255);
    this.mass=3.1415*(this.diam/2)*(this.diam/2);

    this.display = function() {
			fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.diam, this.diam);
    };
    this.move = function() {
        this.x += this.xvel;
        this.y += this.yvel;
    };
    this.edgeCheck = function() {
        if ((this.x >= width - this.diam / 2) || (this.x <= this.diam / 2)) {
            this.xvel *= -1;
        }
        if ((this.y >= height - this.diam / 2) || (this.y <= this.diam / 2)) {
            this.yvel *= -1;
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
    this.resetVels = function(tempXvel, tempYvel) {
        this.xvel = tempXvel;
        this.yvel = tempYvel;
    };
}
function collision(obj1, obj2) {
  var o1xv = ((obj1.mass - obj2.mass) * obj1.xvel + 2 * obj2.mass * obj2.xvel) / (obj1.mass + obj2.mass);
  var o2xv = ((obj2.mass - obj1.mass) * obj2.xvel + 2 * obj1.mass * obj1.xvel) / (obj2.mass + obj1.mass);
  var o1yv = ((obj1.mass - obj2.mass) * obj1.yvel + 2 * obj2.mass * obj2.yvel) / (obj1.mass + obj2.mass);
  var o2yv = ((obj2.mass - obj1.mass) * obj2.yvel + 2 * obj1.mass * obj1.yvel) / (obj2.mass + obj1.mass);
    obj2.resetVels(o2xv, o2yv);
    obj1.resetVels(o1xv, o1yv);
}
