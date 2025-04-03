let offsets = [];
let sizes = [];
let opacity = [];

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight * 0.65);
  myCanvas.parent("dots-move");
//   createCanvas(800, 400);
  noStroke();
  
  for (let i = 0; i < 20; i++) {
    offsets[i] = random(50, 250);
    opacity[i] = random(10, 100);

    if (i < 5){
        sizes[i] = random(100, 200);
    } else if ( i > 5){
        sizes[i] = random(30, 60);
    }

  }
}

function draw() {
  background(255);

  for (let i = 0; i < 20; i++) {
    let x = i * 100 + frameCount * 2 + offsets[i];
    let y = height - offsets[i];

    
    
    drawDots(x % width, y, sizes[i], sizes[i], opacity[i]);
  }
}

function drawDots(x, y, size1, size2, alpha) {
  drawingContext.filter = "blur(3px)"
  fill(102, 102, 102, alpha);
  ellipse(x, y, size1 , size2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
