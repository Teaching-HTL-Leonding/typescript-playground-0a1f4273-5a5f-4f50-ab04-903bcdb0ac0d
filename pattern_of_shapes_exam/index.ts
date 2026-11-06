function setup() {
  createCanvas(600, 400);
}

function mouseMoved() {
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
  fill("white")
  circle(300, 200, 160);

  //Rote Kreise
  fill("tomato");
  circle(120, 200, 80);
  circle(300, 80, 80);
  circle(300, 320, 80);
  circle(480, 200, 80);

  //Roter Kreis der, der Maus hinterherbewegt
  circle(mouseX, mouseY, 40);
}
