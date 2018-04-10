var turt;
function setup(){
createCanvas(750,750);
turt= new Turtle();
}
function draw() {
  background(255);
  turt.display();
  turt.update(mouseX,mouseY);
}

function Turtle() {
  this.size = random(40,50);
  this.loc = new Vector(width/2,height/2);
  this.vel = new Vector();
  this.acel = new Vector();
  this.theta = 0;
  this.topspeed = 1;

  this.display = function() {
    this.theta=this.vel.angle();
    push();
    translate(this.loc.x,this.loc.y);
    rotate(this.theta);
    fill(0,255,0);
    ellipse((this.size+15)/2,0,20,17);
    push();
    rotate(Math.PI/4);
    for(var i=1; i<3; i++){
      push();
      rotate((Math.PI/2)*i);
      ellipse((this.size+15)/2,0,20,12);
        ellipse(-(this.size+15)/2,0,30,12);
      pop();
    }
    pop();
    fill(255,150,0);
    ellipse(0,0,this.size,this.size/1.2);
    pop();
  };

  this.update = function(x,y) {
    this.attract = new Vector(x,y);
    this.acel = Vector.sub(this.attract,this.loc);
    this.acel.setMag(0.1);
    this.vel.add(this.acel);
    this.vel.limit(this.topspeed);
    this.loc.add(this.vel);
  };
}
