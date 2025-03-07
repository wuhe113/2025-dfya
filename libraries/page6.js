function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("drawing");

    strokeWeight(1);
    stroke(77,77,77);
}

function mouseDragged(){
    line(pmouseX, pmouseY, mouseX, mouseY);
    console.log(mouseX, mouseY); 
}