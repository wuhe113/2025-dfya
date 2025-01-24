function setup(){
    let myCanvas2 = createCanvas(windowWidth, windowHeight / 2);
    myCanvas2.parent("ray-light");
    background(0,0,0,0);
}

function draw(){
    translate(width / 2, height / 2);

    // for (i = 0; i < 10; i = i+1) {
    //     let x = random(-width * width, width * width);
    //     let y = random(-height * height, height * height);
    //     line(0, 0, x, y);
    // }
}