function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black")
    const snap: number= 20
    const centerX: number=width/2
    const centerY: number= height/2
    const ellipseW: number =abs(round((width-2*mouseX)/snap)*snap);
    const ellipseH: number =abs(round((height-2*mouseY)/snap)*snap);
    const ellipseArea: number =round(ellipseW*ellipseH*PI/4);
    const ellipseDistX: number =(width-ellipseW)/2
    const ellipseDistY: number =(height-ellipseH)/2

    //arcs
    noFill();
    stroke("red");
    arc(centerX, centerY, ellipseW, ellipseH, 0, 90);
    stroke("yellow");
    arc(centerX, centerY, ellipseW, ellipseH, 90,180);
    stroke("lightblue");
    arc(centerX, centerY, ellipseW, ellipseH, 180, 270);
    stroke("lightgreen");
    arc(centerX, centerY, ellipseW, ellipseH, 270, 360);

    //area size
    noStroke();
    fill("white");
    textAlign(LEFT);
    text(`Area: ${ellipseArea}`, 5, height-5);
    
    //helper lines
    stroke("grey");
    //links nach rechts
    line(ellipseDistX, centerY, width-ellipseDistX, centerY);
    //oben navh unten
    line(centerX, ellipseDistY, centerX, height-ellipseDistY);

    //Koordinaten anzeigen
    textAlign(RIGHT);
    text(ellipseW, ellipseDistX-5, centerY);
    textAlign(CENTER);
    text(ellipseH, centerX, ellipseDistY-5);

}
