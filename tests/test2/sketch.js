
function setup(){
createCanvas(500,500);
}
function draw() {
  background(255);
square(mouseX,mouseY);
}
function square(x,y){
  rect(x,y,50,50);
}
