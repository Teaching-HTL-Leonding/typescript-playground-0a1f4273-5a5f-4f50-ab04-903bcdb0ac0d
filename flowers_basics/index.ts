// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  // <<< ADD YOUR CODE HERE

  // Canvas
  noFill();
  createCanvas(1000, 1000);

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



  // Blume 2
  // Stängel
  angleMode(DEGREES);
  stroke("green");
  strokeWeight(20);
  noFill();
  arc(600, 300, 110, 200, 270, 75);
  
  // Grüne Blüten
  stroke("green");
  strokeWeight(3);
  fill("lightgreen");
  circle(650, 200, 80);
  circle(600, 250, 80);
  circle(550, 200, 80);
  circle(600, 150, 80);

  // Gelbe Blüte
  noStroke();
  fill("yellow");
  circle(600, 200, 65);



}
