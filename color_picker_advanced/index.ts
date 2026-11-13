function setup() {
    scale(3);
    createCanvas(360*3,200*3);
    noStroke();
    colorMode(HSB);
    background(0, 100, 100)
}

function mouseMoved() {
    const colorHue: number = mouseX;
    const colorSaturation: number = min(100, mouseY);

    fill(colorHue,colorSaturation, 100);
    rect(0, 0, width, height/2);
}

function mouseClicked() {
    const colorHue: number = round(mouseX);
    const colorSat: number = min(100,round(mouseY));

    fill(colorHue, colorSat, 100);
    rect(0, 100*3, width, height/2);
    
    fill("black");
    text(`H: ${colorHue}, S: ${colorSat}, B: 100`, 5, height - 5);
}

