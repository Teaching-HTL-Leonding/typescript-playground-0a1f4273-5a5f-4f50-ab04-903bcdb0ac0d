function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    //1/3 orange
    fill("orange");
    rect(0, 0, width/3, height);
    //2/3 grün
    fill("green");
    rect(width/3, 0, width/3, height);
    //3/3 Rot
    fill("red");
    rect((width*2)/3, 0, width/3, height);
    //schwarze balken
    fill("black");
    rect(0, height*0.7, width, height*0.3);
}

let message: string;

function mouseClicked() {
    //TEXT ART/ZENTRIERT
    fill("black");
    rect(0, height*0.7, width, height*0.3);
    textStyle(BOLD);
    fill("white");
    textSize(20);
    textAlign(CENTER);
    
    
    if(mouseX<=width/3){
        message="Orange";
        text(message, width/2, height*0.87);
    }else if(mouseX<=2*width/3){
         message="Green";
        text(message, width/2, height*0.87);
    }else{
         message="Red";
         text(message, width/2, height*0.87);
    }
}

