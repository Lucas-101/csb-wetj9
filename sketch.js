//Authored by John Kuiphoff
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

    stroke(150);
    textSize(40);
    text("black", mouseX, mouseY);
    ellipse(mouseX, mouseY + brushSize, brushSize, brushSize);
    fill(255, 0, 0, transparency);
    ellipse(mouseX - brushSize, mouseY, brushSize, brushSize);
    fill(0, 255, 0, transparency);
    ellipse(mouseX + brushSize, mouseY, brushSize, brushSize);
    fill(0, 0, 255, transparency);
    ellipse(mouseX, mouseY - brushSize, brushSize, brushSize);
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
