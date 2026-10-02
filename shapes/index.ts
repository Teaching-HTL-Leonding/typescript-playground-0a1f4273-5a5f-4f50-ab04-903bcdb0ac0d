function setup() {
 
  createCanvas(500, 500);
  background("lightblue");

  // Sonne
  fill("yellow");
  circle(60, 60, 70);

  // Boden
  fill("saddlebrown");
  rect(0, 420, 500, 80);

  // Gras am Bodenrand
  fill("green");
  rect(0, 420, 500, 20);

    fill("mediumseagreen");
    rect(80, 100, 30, 15);
    rect(200, 60, 30, 15);
    rect(350, 120, 30, 15);
    rect(420, 80, 30, 15);
    rect(150, 150, 30, 15);
    rect(50, 180, 30, 15);
    rect(300, 50, 30, 15);
    rect(450, 200, 30, 15);
    rect(120, 250, 30, 15);
    rect(380, 160, 30, 15);
    rect(250, 100, 30, 15);
    rect(320, 250, 30, 15);

    // linke Ohr
    fill("brown");
    circle(160, 180, 70);

    // rechte Ohr
    fill("brown");
    circle(340, 180, 70);

    rect(170, 270, 160, 230);
    // Bauch
    fill("tan");
    circle(250, 380, 110);

    // Kopf
    fill("brown");
    circle(250, 210, 180);

        // linker Arm
    fill("brown");
    rect(130, 300, 40, 100);

    // linkes Bein
    fill("brown");
    rect(190, 450, 40, 60);

        // rechter Arm
    fill("brown");
    rect(330, 300, 40, 100);

    // rechtes Bein
    fill("brown");
    rect(270, 450, 40, 60);

        // Gesicht
    fill("tan");
    ellipse(250, 230, 130, 130);

    // Augen
    fill("white");
    circle(225, 200, 22);
    circle(275, 200, 22);

    fill("black");
    circle(225, 200, 10);
    circle(275, 200, 10);

    // Nase
    fill("saddlebrown");
    circle(243, 235, 8);
    circle(257, 235, 8);

    // Mund
    noFill();
    stroke("black");
    strokeWeight(2);
    angleMode(DEGREES);
    arc(250, 250, 30, 20, 0, 180);

        // Kette
    fill("gold");
    circle(220, 310, 12);
    circle(235, 318, 12);
    circle(250, 322, 12);
    circle(265, 318, 12);
    circle(280, 310, 12);
}