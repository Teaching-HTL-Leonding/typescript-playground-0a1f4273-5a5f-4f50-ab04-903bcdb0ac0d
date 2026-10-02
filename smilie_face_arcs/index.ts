function setup() {
  createCanvas(400, 400);
  background("blue");
  
  stroke("black");
  strokeWeight(10);
  
  fill("yellow");
  circle(200, 200, 350);

  angleMode(DEGREES);
  arc(200, 200, 250, 250, 20, 180 );
  
  fill("black");
  circle(125, 150, 20);

  fill("black");
  circle(275, 150, 20);
}