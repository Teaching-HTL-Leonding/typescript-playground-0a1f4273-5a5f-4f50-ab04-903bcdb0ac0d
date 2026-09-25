function setup() {
    createCanvas(500, 500);
    background("deepskyblue");

    //grey head
    fill("grey");
    circle(250, 250, 300);

    //left ear
    fill("white");
    triangle(190, 90, 130, 15, 90, 160);

    //right ear
    fill("black");
    triangle(310, 90, 370, 15, 410, 160);

    //left eye
    fill("green");
    circle(200, 210, 30);

    //right eye
    fill("blue")
    circle(300, 210, 30);

    //nose
    fill("pink")
    triangle(225, 250, 275, 250, 250, 280);

    //mouth
    strokeWeight(2);
    stroke("black");
    line(250, 280, 250, 310);

    line(200, 280, 240, 290);
    line(300, 280, 260, 290);

    line(200, 300, 240, 300);
    line(260, 300, 300, 300);

    line(220, 320, 250, 310);
    line(280, 320, 250, 310);

    line(200, 310, 220, 320);
    line(280, 320, 300, 310);

    //sun in the corner
    fill("yellow");
    circle(480, 15, 100);

   //grass
   fill("green");
   rect(0, 450, 500, 450,)
   
   
    //body of the cat
    fill("grey");
    circle(250, 500, 200);
}
