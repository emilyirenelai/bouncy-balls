// p5.js functions
/* global
 *    HSB, background, colorMode, createCanvas, ellipse, fill, height,
 *    noStroke, random, windowHeight, windowWidth, width, rect
 */

let dots = [];
const numDots = 25;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  //windowWidth and windowHeight: p5 magic variables
  //-20 makes the small white border
  colorMode(HSB, 360, 100, 100);
  
  for (let i = 0; i < numDots; i++) {
    if (i % 2) {
      dots.push(new Dot(true));
    } else {
      dots.push(new Dot());
    }
  }
  
}

function draw() {
  background(220, 0, 80);
  
  for(let dot of dots) {
    dot.move();
    //console.log(dot);
    //dot.moveYourself();
  }
}

function mousePressed() {
  // We'll use this for console log statements only.
  const dot = dots[0];
  console.log(dot.x);
}

class Dot {
  constructor(isSquare) {
    //const xVelocity = random(0.5, 3);
    //const yVelocity = random(0.5, 3);
    
    this.x = random(width);
    this.y = random(height);
    this.radius = random(5,12);
    this.color = random(360);
    this.baseXVelocity = random(0.5, 3);
    this.baseYVelocity = random(0.5, 3);
    this.xVelocity = random(0.5, 3);
    this.yVelocity = random(0.5, 3);
    this.isSquare = isSquare || false;
  }

 move() {
  // move the dot
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    if (this.x + this.radius > width) {
      this.xVelocity = -1 * this.baseXVelocity;
    }
    if (this.x - this.radius < 0) {
      this.xVelocity = this.baseXVelocity;
    }
    if (this.y + this.radius > height) {
      this.yVelocity = -1 * this.baseYVelocity;
    }
    if (this.y - this.radius < 0) {
      this.yVelocity = this.baseYVelocity;
    }
  
  this.draw();
}

  draw() {
    // draw the dot
    fill(this.color, 80, 70);
    noStroke();
    if (this.isSquare) {
      rect(this.x, this.y, this.radius);
    } else {
    ellipse(this.x, this.y, this.radius * 2);
  }

 }

}
