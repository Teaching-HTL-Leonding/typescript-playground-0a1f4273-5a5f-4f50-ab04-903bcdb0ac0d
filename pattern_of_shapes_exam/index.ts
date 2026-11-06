function setup() {
  createCanvas(600, 400);
  background("white");

  stroke("black");
  strokeWeight(2);

  //Gelben Rechtecken
  fill("gold");
  rect(60, 40, 120, 80);
  rect(60, 280, 120, 80);
  rect(420, 40, 120, 80);
  rect(420, 280, 120, 80);

  //Blaue Rechtreck
  fill("steelblue");
  rect(180, 120, 240, 160);

  //Weißer Kreis
  circle(300, 200, 160);
}

function mouseMoved() {
}
