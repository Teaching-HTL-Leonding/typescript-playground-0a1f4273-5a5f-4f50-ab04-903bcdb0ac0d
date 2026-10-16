function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  background("lightblue");
 fill("blue");
 circle(mouseX, mouseY, 100);
 fill("orange");
 circle(mouseX, mouseY, 50);


 line(mouseX - 30, mouseY, mouseX + 30, mouseY);
 line(mouseX, mouseY - 30, mouseX, mouseY + 30);
}
