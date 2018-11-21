function Circle(x = 50, y = 50, r = 100, col = '#f00') {
  this.x = x;
  this.y = y;
  this.r = r;
  this.col = col;
  this.vx = random(-5,5);
  this.vy = random(-5,5);
}

Circle.prototype.move = function() {

  this.x += this.vx;
  this.y += this.vy;
};

Circle.prototype.draw = function() {
  fill(this.col);
  ellipse(this.x,this.y,this.r);
};

function Circle2(x = 50, y=50, r=50, col='#0f0') {
  Circle.call(this, x, y, r, col);
}

Circle2.prototype = Object.create(Circle.prototype);
Circle2.prototype.constructor = Circle;

Circle2.prototype.move = function () {
  Circle.prototype.move.call(this);
  if(this.x > width-this.r/2 || this.x < 0+this.r/2){
    this.vx=this.vx*-1;
  }
  if(this.y > height-this.r/2|| this.y < 0+this.r/2){
    this.vy=this.vy*-1;
  }
}

let circles = [];

function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  background(0);
  for(let i = 0; i < circles.length; i++) {
    circles[i].draw();
    circles[i].move();

  }
}

function mousePressed() {
  if(mouseX<width/2){
    circles.push( new Circle(mouseX, mouseY) );
  } else{
    circles.push( new Circle2(mouseX, mouseY));
  }
}
