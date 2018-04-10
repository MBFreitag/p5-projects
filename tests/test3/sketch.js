var s;
function setup(){
  createCanvas(500,500);
  s= new Square(100,100);
}
function draw() {
  background(255);
  s.display();
  s.move();
}

function Square(tempX,tempY){
  this.x=tempX;
  this.y=tempY;
  this.s=50;
  this.display= function(){
    rect(this.x,this.y,this.s,this.s);
  };
  this.move=function(){
    this.x+=random(-3,3);
  };
}
