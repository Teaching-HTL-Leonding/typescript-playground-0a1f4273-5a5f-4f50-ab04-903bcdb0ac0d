// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  // <<< ADD YOUR CODE HERE

  // Canvas
  noFill();
  createCanvas(500, 500);

  // Stängel
  angleMode(DEGREES);
  stroke("green");
  strokeWeight(20);
  noFill();
  arc(200, 300, 110, 200, 270, 75);
  
  // Grüne Blüten
  noStroke();
  fill("lightgreen");
  circle(156, 231.9, 70);
  circle(156, 168.1, 70);
  circle(215.5, 247.5, 70);
  circle(250, 200, 70);
  circle(215.5, 152.5, 70);

  // Gelbe Blüte
  fill("yellow");
  circle(200, 200, 65);
}
