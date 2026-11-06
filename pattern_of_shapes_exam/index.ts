function setup() {
  createCanvas(600, 400);
}

function mouseMoved() {
  background("white");
  stroke("black");
  strokeWeight(2);

  //Variable für die gelben Rechtecke
  const rectWidth: number = width * 0.2;
  const rectHeight: number = height * 0.2;

  //Gelbe Rechtecke
  fill("gold");
  rect(width * 0.1, height * 0.1, rectWidth, rectHeight);
  rect(width * 0.1, height * 0.7, rectWidth, rectHeight);
  rect(width * 0.7, height * 0.1, rectWidth, rectHeight);
  rect(width * 0.7, height * 0.7, rectWidth, rectHeight);

  //Blaues Rechteck
  fill("steelblue");
  rect(width * 0.3, height * 0.3, width * 0.4, height * 0.4);

  //Weiße Kreis
  fill("white");
  circle(width / 2, height / 2, min(width, height) * 0.4);

  //Variable für den Durchmesser der roten Kreise
  const diameter: number = min(width, height) * 0.2;

  //Rote Kreise
  fill("tomato");
  circle(width * 0.2, height / 2, diameter);
  circle(width * 0.8, height / 2, diameter);
  circle(width / 2, height * 0.2, diameter);
  circle(width / 2, height * 0.8, diameter);

  //Keis folgt der Maus
  fill("tomato");
  circle(mouseX, mouseY, min(width, height) * 0.1);
}
