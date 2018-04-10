var dragConstant = .995; // arbitary damping
var gravityConstant = 1; // arbitrary gravity
var dubpen;
function setup(){
  createCanvas(1366,768);
dubpen = new DoublePendulum(700,200);
}
function draw() {
  background(255);
  dubpen.go();
}
