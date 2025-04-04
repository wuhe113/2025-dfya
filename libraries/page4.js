//get help from ChatGPT to figure out createGraphics();

let dots = [];
let dotGraphic;
let numDots = 20;
let spacing = 120; 

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight * 0.65);
  myCanvas.parent("dots-move");
  noStroke();

  dotGraphic = createGraphics(200, 200);
  dotGraphic.noStroke();
  dotGraphic.drawingContext.filter = "blur(3px)";


  for (let i = 0; i < numDots; i++) {
    dots.push({
      x: -i * spacing,
      y: height - random(50, 250),
      size: i < 5 ? random(100, 200) : random(30, 60),
      alpha: random(10, 100),
    });
  }
}

function draw() {
  background(255);

  for (let dot of dots) {

    dot.x += 2;

    // Recycle dot if it goes off the right edge
    if (dot.x > width + 100) {
      let leftmostX = getLeftmostX();
      dot.x = leftmostX - spacing;
      dot.y = height - random(50, 250);
      dot.size = random(30, 200);
      dot.alpha = random(10, 100);
    }

    drawDot(dot.x, dot.y, dot.size, dot.alpha);
  }
}

function drawDot(x, y, size, alpha) {
  dotGraphic.clear();
  dotGraphic.fill(102, 102, 102, alpha);
  dotGraphic.ellipse(dotGraphic.width / 2, dotGraphic.height / 2, size, size);
  image(dotGraphic, x - dotGraphic.width / 2, y - dotGraphic.height / 2);
}

function getLeftmostX() {
  return Math.min(...dots.map(d => d.x));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.65);
}
