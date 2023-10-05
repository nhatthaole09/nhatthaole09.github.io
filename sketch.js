// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBall = {
  x: 100,
  y: 100,
  dx: -3,
  dy: -4,
  radius: 25,
  r: 255,
  g: 0,
  b: 0
};


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function moveBall(speed){
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;
  Math.abs(theBall.x);
  Math.abs(theBall.y);
  //off the right side
  if (theBall.x > width){
    theBall.x = 0 - theBall.radius;
  }
  //off the bottom
  if (theBall.y > height){
    theBall.y = 0 - theBall.radius;
  }
}

function displayBall(){
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x,theBall.y, theBall.radius);
}
