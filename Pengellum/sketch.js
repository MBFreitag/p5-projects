var p;
function setup(){
createCanvas(750, 750);
p = new Pendulum(250,250);
}
function draw() {
  background(100);
  p.update();
  p.display();

}

function Pendulum(x,y) {
  this.loc= new Vector();
  this.origin= new Vector(x,y);
  this.radius=200;
  this.theta=PI/4;
  this.aVel=0.0;
  this.aAcel=0.0;
  this.bobMass=1000;
  this.bobDiam=(sqrt(this.bobMass/PI));
  this.grav= 1.4;
  this.friction= .9999995;

  this.update = function(){
    this.aAcel = (-this.grav/this.radius)*sin(this.theta);
    this.aVel+=this.aAcel;
    this.aVel*=this.friction;
    this.theta+=this.aVel;
  };
  this.display =function(){
    this.loc.set(this.radius*sin(this.theta),this.radius*cos(this.theta));
    this.loc.add(this.origin);
    line(this.origin.x,this.origin.y,this.loc.x,this.loc.y);
    ellipse(this.loc.x,this.loc.y,this.bobDiam,this.bobDiam);
  };
}
