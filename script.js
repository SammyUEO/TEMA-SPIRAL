class Spiral {
  constructor(x, y, size, numRects, angleIncrement, sizeDecrement) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.numRects = numRects;
    this.angleIncrement = angleIncrement;
    this.sizeDecrement = sizeDecrement;
  }

  draw() {
    let angle = 0;
    let size = this.size;

    translate(this.x, this.y);

    for (let i = 0; i < this.numRects; i++) {
      push();
      rotate(angle);
      rect(-size / 8, -size / 8, size, size);
      pop();
      angle += this.angleIncrement;
      size /= this.sizeDecrement;
    }
  }
}

let spiral;

function setup() {
  createCanvas(800, 800);
  background(255);
  noFill();
  stroke(0);

  spiral = new Spiral(width / 2, height - 600, 300, 80, PI / 17, 1.05);

  spiral.draw();
}

function draw() {
  noLoop();
}
