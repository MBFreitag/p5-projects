var b;
function setup(){
  createCanvas(500,500);
  b=new Ball(250,250);
}
function draw() {
  background(255);
  b.display();
  b.move();
  b.edgeCheck();
}

function Ball(tempX,tempY){
  this.x=tempX;
  this.y=tempY;
  this.diam=50;
  this.xvel=3;

  this.display = function() {
    ellipse(this.x,this.y,this.diam,this.diam);
  };
  this.move = function(){
    this.x+=this.xvel;
  };
  this.edgeCheck = function(){
    if((this.x>=width)||(this.x<=0)){
      this.xvel*=-1;
      return true;
    }else{
      return false;
    }
  };
}
