const brushSize = 10;
const transparency = 100;
function setup() {
  createCanvas(600, 600);
  background(150, 0, 0);
}

function draw() {
  lgSquareBrush();
}

function lgSquareBrush() {
  if (mouseIsPressed) {
    fill(0, transparency);
    var size = random(10, 100);
    stroke(150);
    textSize(40);
    fill(0, 0, 255);
    ellipse(mouseX, mouseY - brushSize, size, size);
  }
}
