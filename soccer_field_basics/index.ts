// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 7;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;

function setup() {
    // We must calculate the size of the canvas using the constants.
    // Note that we assume that the soccer field has a width of 100m
    // and a height of 70m.
    createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
    background("green");

    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);

    push();

    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    // Experiment with different SCALE values to see how it works.
    scale(SCALE);

    // translate moves the origin of the coordinate system. 0/0 will not be
    // in the top-left corner, but MARGIN pixels to the right/down.
    // Experiment with different MARGIN values to see how it works.
    translate(MARGIN, MARGIN);

    //Spielfeldrand
    rect(0, 0, 100, 70);
    //Mittellinie
    line(50, 0, 50, 70);
    //Mittelfeldkreis
    circle(50, 35, 18.3);
    //16er Kreis
    circle(11, 35, 18.3);
    circle(89, 35, 18.3);
    //16er
    fill("green");
    rect(0,  11.75, 16.5, 46.5);
    rect(83.5, 11.75, 16.5, 46.5);
    //5er
    rect(0, 22.75, 5.5, 24.5);
    rect(94.5, 22.75, 5.5, 24.5);
    //Tornetz
    noFill();
    rect(-3, 31.34, 3, 7.32);
    rect(100, 31.34, 3, 7.32);
    //Punkte
    fill("white");
    circle(50, 35, 1);
    circle(11, 35, 1);
    circle(89, 35, 1);
    //Eckkante
    noFill();
    arc(0, 0, 2, 2, 0, 90);
    arc(100, 0, 2, 2, 90, 180);
    arc(0, 70, 2, 2, 270, 0);
    arc(100, 70, 2, 2, 180, 270);
}
